var DropDowntrigger = document.querySelector('.button');
var dropDownShow = document.querySelector('.dropdown');
var filterBtn = document.querySelector('.filter-btn')
var submitBtn = document.querySelector('.submit-btn');
var backBtn = document.querySelector('.back-btn');
var tagOptions = document.querySelectorAll('.filter-option');
var tempFilterTxt = document.querySelector('.temp-filter');


// Want to dynamically add filter boxes based on how many filters we decide to use
// Dowm the road wishlist item
var numOfFilter = 3;




// var yodaTranslate = function (input) {
//   var yoda =
//     "https://api.funtranslations.com/translate/yoda.json?text=" + input + ".";
//   fetch(yoda)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//         });
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert("Unable to connect to API");
//     });
// };


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2ffa236209msh40cdcf1eec77dd3p199fb7jsncccb2f0b5456',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};


// Commenting out so when any of us test the website, we dont max out the number of API calls within the hour
// fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           console.log(data.content);
//           var input = data.content;
//         //   yodaTranslate(input);
//         });
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert("Unable to connect to API");
//     });

var DropFunction = function(event){
	event.preventDefault();

	dropDownShow.classList.add('is-active');
};


if (submitBtn != null) {
	submitBtn.addEventListener('click', function() {
		document.location.href = './result.html';
	});
};

if (backBtn != null) {
	backBtn.addEventListener('click', function() {
		console.log('clicking');
		document.location.href = './index.html';
	});
};



for (i of tagOptions) {
	i.addEventListener('click', function() {
		var chosenTag = this.textContent.trim();
		tempFilterTxt.textContent = chosenTag;
		dropDownShow.classList.remove('is-active');
	});
};
quote();

DropDowntrigger.addEventListener("click", DropFunction);
