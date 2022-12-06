var numOfFilter = 3;
var DropDowntrigger = document.querySelector(".button");
var dropDownShow = document.querySelector(".dropdown");
var Sad = [
  "happiness",
  "cry",
  "loss",
  "death",
  "likeness",
  "life",
  "doing",
  "people",
  "thing",
];
var life = ["living", "doinig", "use", "thing", "people", "likeness", "making"];
var friendship = [
  "family",
  "love",
  "life",
  "hostility",
  "other",
  "friend",
  "people",
  "likeness",
  "use",
];
var love = [
  "Valentine's day",
  "love",
  "making love",
  "partnership",
  "gauge",
  "romantic",
  "cute",
  "for her",
  "for him",
];
var funny = [
  "cute",
  "life",
  "people",
  "doing",
  "man",
  "life",
  "likeness",
  "want",
  "thing",
];
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

function filterbychr(input, author) {
    checker = /^T/;
    checker.test(author);
    result = (checker.test(author));
console.log(result);
    if (result === false){
setTimeout(quote, 1000);
    }else{
  input = input.replace(/[^\w\s.&-]+/g, "");
  console.log(input);
}}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ffa236209msh40cdcf1eec77dd3p199fb7jsncccb2f0b5456",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};
var quote = function () {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          var tags = data.tags;
          var author = data.originator.name;
          var input = data.content;
          console.log(tags);
          console.log(author);
          filterbychr(input, author);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to API");
    });
};

// Want to dynamically add filter boxes based on how many filters we decide to use
// Dowm the road wishlist item
var numOfFilter = 3;

var DropFunction = function (event) {
  event.preventDefault();

  dropDownShow.classList.add("is-active");
  console.log("click");
};
quote();

DropDowntrigger.addEventListener("click", DropFunction);
