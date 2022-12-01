var quote = "https://api.goprogram.ai/inspiration";
fetch(quote)
  .then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
      });
    } else {
      alert("Error: " + response.status);
    }
  })
  .catch(function (error) {
    alert("Unable to connect to API");
  });

//   const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url, data = {
//     method: "get",
//     mode: "no-cors"
//   })
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);