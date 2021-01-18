const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tvshowName = new Schema ({
        name: { type: String, required: true }
});

module.exports = mongoose.model('tvshowName', tvshowName)