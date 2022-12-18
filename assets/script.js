var DropDowntrigger = document.querySelector(".button");
var dropDownShow = document.querySelector(".dropdown");
var filterBtn = document.querySelector(".filter-btn");
var generateBtn = document.querySelector(".submit-btn");
var backBtn = document.querySelector(".back-btn");
var tagOptions = document.querySelectorAll(".filter-option");
var tempFilterTxt = document.querySelector(".temp-filter");
var tagOpt = null; //place holder to assign local tags
var sad = ["happiness", "cry", "loss", "death", "doing"]; //local tags
var life = ["living", "doinig", "use", "making"];
var friendship = ["family", "love", "hostility", "other", "friend"];
var love = [
  "valentine's day",
  "love",
  "making love",
  "partnership",
  "gauge",
  "romantic",
  "cute",
];
var funny = ["life", "people", "man", "funny", "want", "thing"];
var common = []; //arrat of common tags to be filled later
//API linking options
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ffa236209msh40cdcf1eec77dd3p199fb7jsncccb2f0b5456",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

var DropFunction = function (event) {
  event.preventDefault();

  dropDownShow.classList.add("is-active");
};
//starts searching API after local theme is chose by user and generate button is clicked
if (generateBtn != null) {
  generateBtn.addEventListener("click", function () {
    var chosenTag = tagOpt;
    console.log(chosenTag);
    generateAdjustment();
    displayBlaster();
    displayProgressBar();
    quote(chosenTag);

    setTimeout(function () {
      document.location.href = "./result.html";
    }, 5000);
  });
}

if (backBtn != null) {
  backBtn.addEventListener("click", function () {
    console.log("clicking");
    document.location.href = "./index.html";
  });
}

for (i of tagOptions) {
  i.addEventListener("click", function () {
    var chosenTag = this.textContent.trim();
    tempFilterTxt.textContent = chosenTag;
    dropDownShow.classList.remove("is-active");

    if (chosenTag == "Sad") {
      tagOpt = sad;
    } else if (chosenTag == "Funny") {
      tagOpt = funny;
    } else if (chosenTag == "Friendship") {
      tagOpt = friendship;
    }
    return tagOpt;
  });
}

DropDowntrigger.addEventListener("click", DropFunction);

// Function to return commonElements
function getCommon(tagsL, chosenTag, input) {
  console.log(chosenTag);
  tagsL.sort(); // Sort both the arrays
  chosenTag.sort(); // Array to contain common elements
  var i = 0,
    j = 0; // i points to arr1 and j to arr2
  // Break if one of them runs out
  while (i < tagsL.length && j < chosenTag.length) {
    if (tagsL[i] == chosenTag[j]) {
      // If both are same, add it to result
      common.push(tagsL[i]);
      i++;
      j++;
    } else if (tagsL[i] < chosenTag[j]) {
      // Increment the smaller value so that
      i++; // it could be matched with the larger
    } // element
    else {
      j++;
    }
  }

  //time out function to ensure API #1 is not overcalled
  if (common.length < 1) {
    setTimeout(function () {
      quote(chosenTag);
    }, 1400);
  } else {
    // yodaTranslate(input);
    console.log("yes I am three");
  }
}
//Yoda API call after local tags are matched and a generated quote is grabbed in variabe 'input'
//stores to local storage and generate quote on secound page while loading said page
var yodaTranslate = function (input) {
  var yoda =
    "https://api.funtranslations.com/translate/yoda.json?text=" + input + ".";
  fetch(yoda)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          console.log(data.contents.translated);
          var YodaQuote = data.contents.translated;
          localStorage.setItem("wisdom", YodaQuote);
          pg2Quote(YodaQuote);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to API");
    });
};

var displayProgressBar = function () {
  var barPlacement = document.querySelector(".progress-bar");
  var progressBar = document.createElement("progress");
  progressBar.setAttribute(
    "class",
    "progress is-small custom-progress is-danger"
  );
  barPlacement.appendChild(progressBar);
};

var displayBlaster = function () {
  var barPlacement = document.querySelector(".progress-bar");
  var blaster = document.createElement("img");
  blaster.setAttribute("id", "blaster-rifle");
  blaster.setAttribute("src", "./assets/images/han-solo2.png");

  barPlacement.appendChild(blaster);
};

var generateAdjustment = function () {
  generateBtn.textContent = "Yoda-fying!";
};
//filters out special character from quote and carries variables to be used later
function filterbychr(input, chosenTag, tags) {
  input = input.replace(/[^\w\s.&-]+/g, "");
  var tagsL = tags.map((name) => name.toLowerCase());
  getCommon(tagsL, chosenTag, input);
}

//need to clear storage at some point
// function clearStorage() {
//   localStorage.clear();
// }

//testing variables outside function (to avoid using up limited API calls)

// var quoteContainer = document.querySelector("#pg2-quote-container");
// var quotePara = document.createElement("p");
// quotePara.setAttribute("id", "pg2-quote");
// var testQuote = localStorage.getItem("wisdom");

// window.onload = function sarahTest() {
// if ( (document.location.href = "/result.html") && (testQuote != null) ) {
//only run fxn if on result.html and testQuote has content

//   if (testQuote != null) {
//     quotePara.textContent = '"' + testQuote + '"';
//     quoteContainer.append(quotePara);
//         console.log("test quote: " + testQuote)
//         console.log("quoteContainer: " + quoteContainer)
//         console.log("quoteBox: " + quotePara)
//   } else {
//     quotePara.textContent = "Yoda doesn't seem to have anything to say right now. Click the Back button to try again.";
//     quoteContainer.append(quotePara);
//     console.log("test quote is null.");
//   }
// }

//fxn shows translated quote on result.html
window.onload = function pg2Quote(YodaQuote) {
  var mostRecent = localStorage.getItem("wisdom"); //YodaQuote will save each new translated quote to "wisdom" key but if/when we start saving multiple quotes to local storage, we'll need to figure out how to grab only the most recent quote for showing on the second page
  var quoteContainer = document.querySelector("#pg2-quote-container"); //select div to append empty <p>
  var quotePara = document.createElement("p"); //create empty <p> to hold quote
  quotePara.setAttribute("id", "pg2-quote"); //set <p> id to #pg2-quote for styling purposes
  quotePara.textContent = '"' + mostRecent + '"';
  quoteContainer.append(quotePara);

  //append random yoda pic to page
  // var imgEl = document.getElementById("yoda-pic");
  // var yodaPix = newArray("/assets/images/baby-yoda-pissed.jpg", "/assets/images/yoda-1.jpg", "/assets/images/yoda-2.jpg");
  // var randomNum = Math.floor(Math.random() * yodaPix.length);
  // imgEl.src = yodaPix[randomNum];
};

// var yodaPic = document.getElementById("yoda-pic");
// var yodaPix = ("./assets/images/yoda-1.jpg");
// yodaPic.src = "./assets/images/yoda-2.jpg";

//code below is probably not necessary since API is consistently working, so there should always be a quote to show on result.html; however, we may still want to implement something like this in case something goes wrong -- without it, the page will probably display "null" as it is now

//only show text content if quote has been translated, else show 'try again' message

//     if (mostRecent != null) {
//       quotePara.textContent = '"' + mostRecent + '"'; //set <p> text content to most recently translated quote
//       quoteContainer.append(quotePara); //append <p> to div
//       subtitle = "Yoda has spoken."; //add subtitle
//     } else {
//       quotePara.textContent = "Yoda doesn't seem to have anything to say right now. Click the Back button to try again."
//     }
// }
//first API function calls for quote and tags
var quote = function (chosenTag) {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          var tags = data.tags;
          var input = data.content;
          localStorage.setItem("key", input);
          console.log(localStorage);
          filterbychr(input, chosenTag, tags);
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

var DropFunction = function (event) {
  event.preventDefault();

  dropDownShow.classList.add("is-active");
};

DropDowntrigger.addEventListener("click", DropFunction);
