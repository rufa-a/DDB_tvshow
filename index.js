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
            const tvshowActionField = document.getElementById("save-action");
            const tvshowStatusField = document.getElementById("save-status");
            console.log(res);
            tvshowActionField.innerHTML = res.data;
            tvshowStatusField.innerHTML = res.status;
        })
    }).catch(err => console.log("Error when /save", err));
}

function tvshowFindHandler(event) {
    event.preventDefault();

    const tvshowName = document.getElementById('tvshowName2').value;

    fetch('/find/' + tvshowName).then(response => {
        response.json().then((res) => {
            const tvshowIdField = document.getElementById("find-id");
            const tvshowNameField = document.getElementById("find-name");
            console.log(res);
            tvshowIdField.innerHTML = JSON.parse(res.data)[0]._id;
            tvshowNameField.innerHTML = JSON.parse(res.data)[0].name;
        })
    }).catch(err => console.log("Error when /find", err));
}

tvshowSaveForm.addEventListener('submit', tvshowSaveHandler);
tvshowFindForm.addEventListener('submit', tvshowFindHandler);