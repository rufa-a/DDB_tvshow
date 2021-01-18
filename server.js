const express = require('express');
const db = require('./settings/db');
const tvshowName = require('./models/tvshow');

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}`));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

app.post('/save', (request, response) => {
  console.log('/save ', request.body);

  var newTvshow = new tvshowName({ name: request.body.tvshowName });

  newTvshow.save(err => {

    const responseData = {
      data: 'Попытались сохранить сериал ' + request.body.tvshowName,
      status: -1,
      error: ''
    }; 

    if(err) {
      responseData.status = 400;
      responseData.error = 'Невозможно сохранить сериал в базе данных';      
    } else {
      responseData.status = 200;
    }
    response.send(JSON.stringify(responseData));
  });
});

app.get('/find/:query', (request, response) => {
  console.log('/find/:query', request.params.query);

  tvshowName.find({ name: request.params.query }).exec(function (err, tvshows) {
    const responseData = {
      data: JSON.stringify(tvshows),
      status: -1,
      error: ''
    }; 

    if(err) {
      responseData.status = 404;
      responseData.error = 'Невозможно найти сериал ' + request.params.query;      
    } else {
      responseData.status = 200;
    }
    response.send(JSON.stringify(responseData));
  });
});

app.listen(80);
