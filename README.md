# README

## About

This website is meant to generate a random quote within a certain theme. It does so by calling an API (https://rapidapi.com/andruxnet/api/random-famous-quotes/) to return a random quote. Then it will check the tags of that quote against the selected theme tags until returning a quote that has sufficient similar tags to the chosen theme. Once an appropriate quote has been found, it will put the quote through a Yoda-speak translating API (https://funtranslations.com/api/yoda). Finally, the translated quote will be saved to local storage and appended to the second page. 

The first page should appear as a background of Yoda in his home. In the top left corner is a Star Wars-themed heading and subtitle giving a brief description of the site. In the center of the page, there is a drop down selector to choose a theme. Above the theme selector, there is a brief set of directions. Below the theme selector, there is a generate button. Upon clicking the generate button after selecting a theme, a unique loading bar will appear and then the user shall be taken to the quote page. 

The quote page has a Star Wars-themed heading and subtitle in the upper left hand corner. The page's background image is of the Death Dtar being built. In the center of the page, the translated Yoda-speak quote will be appended. Below the quote, there is be a back button that will take the user back to the main page. 

THIS SITE IS LIMITED TO 5 API CALLS AN HOUR. When the Yoda translator API has reached the limit, an error message will be displayed upon attempting to generate a quote but the user will still be taken to the second page and the last translated quote will be appended to the page.

## Installation

N/A

## Repo and Deployed Site Links

Here is a link to the git hub repo: https://github.com/Morralytics/Yoda-Translator

Here is the link to the deployed site: https://volexity21.github.io/Yoda-Translator/

## Screenshots
Here are several images of the live application:
![.](./assets/images/Screenshot%202022-12-16%20115124.png)
![.](./assets/images/Screenshot%202022-12-16%20115210.png)
![.](./assets/images/Screenshot%202022-12-16%20115155.png)

## Future Development

The team hopes to implement the following wishlist items in future updates:

- Append random Yoda picture to second page underneath appended quote
- Add sound effect (e.g. blaster, light saber) on button click of generate button
- Add history button and additional local storage functionality to allow user to see history of recently translated quotes

[Feel free to join me through past and future projects!](https://github.com/Morralytics)
