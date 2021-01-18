const tvshowSaveForm = document.getElementById("tvshowSaveForm");
const tvshowFindForm = document.getElementById("tvshowFindForm");
const tvshowDataField = document.getElementById("tvshowDataField");

function tvshowSaveHandler(event) {
    event.preventDefault();

    const tvshowName = document.getElementById('tvshowName1').value;
    console.log(tvshowName)

    fetch('/save', {
        method: 'POST',
        body: JSON.stringify({
            'tvshowName': tvshowName,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        response.json().then((res) => {
            const tvshowField = document.getElementById("tvshowDataField1");
            console.log(res);
            tvshowField.innerHTML = JSON.stringify(res);
        })
    }).catch(err => console.log("Error when /save", err));
}

function tvshowFindHandler(event) {
    event.preventDefault();

    const tvshowName = document.getElementById('tvshowName2').value;

    fetch('/find/' + tvshowName).then(response => {
        response.json().then((res) => {
            const tvshowField = document.getElementById("tvshowDataField3");
            console.log(res);
            tvshowField.innerHTML = JSON.stringify(res.data);
        })
    }).catch(err => console.log("Error when /find", err));
}

tvshowSaveForm.addEventListener('submit', tvshowSaveHandler);
tvshowFindForm.addEventListener('submit', tvshowFindHandler);