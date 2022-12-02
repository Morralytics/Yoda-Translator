var filter1 = document.querySelector("#filter1");

var filter2 = document.querySelector("#filter2");

var filter3 = document.querySelector("#filter3");
var input =" The art of war teaches us to rely not on the likelihood of the enemy's not coming but on our own readiness to receive him not on the chance of his not attacking but rather on the fact that we have made our position unassailable."

var yodaTranslate = function (input) {
  var yoda =
    "https://api.funtranslations.com/translate/yoda.json?text=" + input + ".";
  fetch(yoda)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to API");
    });
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ffa236209msh40cdcf1eec77dd3p199fb7jsncccb2f0b5456",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json().then(function (data) {
        console.log(data);
        console.log(data.content);
        var input = data.content;
        //   yodaTranslate(input);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  })
  .catch(function (error) {
    alert("Unable to connect to API");
  });

var f1= function (event) {
  event.preventDefault();
  console.log("click");
};
var f2 = function (event) {
  event.preventDefault();
  console.log("click");
};
var f3= function (event) {
  event.preventDefault();
  console.log("click");
};

filter1.addEventListener("click", f1);
filter2.addEventListener("click", f2);
filter3.addEventListener("click", f3);
yodaTranslate(input);