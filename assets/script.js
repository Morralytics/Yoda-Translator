var DropDowntrigger = document.querySelector(".button");
var dropDownShow = document.querySelector(".dropdown");
var filterBtn = document.querySelector(".filter-btn");
var generateBtn = document.querySelector(".submit-btn");
var backBtn = document.querySelector(".back-btn");
var tagOptions = document.querySelectorAll(".filter-option");
var tempFilterTxt = document.querySelector(".temp-filter");
var tagOpt = null;
var sad = ["happiness", "cry", "loss", "death", "doing"];
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
var common = [];
// Want to dynamically add filter boxes based on how many filters we decide to use
// Dowm the road wishlist item
var numOfFilter = 3;

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

if (generateBtn != null) {
  generateBtn.addEventListener("click", function () {
    var chosenTag = tagOpt;
    console.log(chosenTag);
    generateAdjustment();
    displayBlaster();
    displayProgressBar();
    quote(chosenTag);

    // setTimeout(function() {
    //   // document.location.href = "./result.html";
    // }, 5000);
  });
}

if (backBtn != null) {
  backBtn.addEventListener("click", function () {
    console.log("clicking");
    document.location.href = "./index.html";
    //will need to clear local storage at some point
    // clearStorage();
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
  console.log(common.length);
  if (common.length < 1) {
    common.length = 0;
    console.log(tagsL);
    console.log(common.length);
    setTimeout(function () {
      quote(chosenTag);
    }, 1400);
  } else {
    input = input.replace(/[^\w\s.&-]+/g, "");
    console.log(input);
    console.log(common);
    yodaTranslate(input);
    console.log("yes I am three");
  }
}

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
          goTo(YodaQuote);
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

function filterbychr(input, chosenTag, tags) {
  input = input.replace(/[^\w\s.&-]+/g, "");
  var tagsL = tags.map((name) => name.toLowerCase());
  console.log(input);
  console.log(chosenTag);
  getCommon(tagsL, chosenTag, input);
}

//need to clear storage at some point; ideally when clicking the back button (otherwise every quote will be saved and potentially appended to the page)
function clearStorage() {
  localStorage.clear();
}

var quoteContainer = document.querySelector("#pg2-quote-container");
function goTo(YodaQuote) {
  window.location.assign("./result.html");
  document.location.href("./result.html");
  localStorage.getItem("key", YodaQuote);
    var quoteBox = document.createElement("#pg2-quote");
    var mostRecent = localStorage.length().slice(0); //most recent quote appears to be saved to START of index, not end
  quoteContainer.appendChild(quoteBox);
  quoteBox.textContent(mostRecent);
}

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
