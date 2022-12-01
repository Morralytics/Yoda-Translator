var quote = "https://zenquotes.io/api/quotes/";
fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data){
                console.log(data);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    }).catch(function (error) { alert('Unable to connect to API'); });