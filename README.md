
# Welcome to Higher or Lower
**URL: https://adedushi.github.io/higher_or_lower/**
##
![Gameplay](https://github.com/adedushi/higher_or_lower/blob/main/assets/gameplay.png)
## Description
Higher or Lower is a dynamic take on the classic mini-game “More or Less” from “The Price is Right.” [Watch a clip of the original game](https://youtu.be/koBXw1TIOnM?si=QnQQUeOCVyxz0yR_&t=155)

The gameplay is simple. You are presented with a random item’s image, title and a placeholder price. You will be asked to guess whether the actual retail price is higher or lower than the placeholder price. Points are awarded for correct answers. Try to get the longest streak!


## How to Play
Press 'Start' to receive details about the first product. Select 'Higher' or 'Lower' to input your guess on the actual retail price. After receiving feedback on your guess, you can 'See Product Details' to be directed to the product page or select 'Next' to move on to the next product. Watch your current score and high score update automatically.


## Technologies, Libraries and APIs

This project made use of the following technologies: 
- Webpack to bundle source Javascript code
- npm to manage project dependencies
- BestBuy API to obtain product and price information

  

## Feature Implementation

The `product` is randomly assigned a placeholder price. This could be greater or less than the actual price by up to 20%. The placeholder is rounded to a reasonable number based on magnitude.

```generatePlaceholderPrice(price) {

let  priceSalt  =  Math.random() * (Math.round(Math.random()) *  2  -  1);

let  placeholder  =  price  + (price  *  priceSalt  *  .2);

  

if (price  <  10) {

placeholder  =  Math.ceil(placeholder  +  1)

} else  if (price  <  100) {

placeholder  = (Math.ceil(placeholder  /  10) *  10)

} else  if (price  <  1000) {

placeholder  = (Math.ceil(placeholder  /  50) *  50)

} else {

placeholder  = (Math.ceil(placeholder  /  100) *  100)

}

  

return  Math.abs(price  -  placeholder) >  1.01  ?  placeholder  :  this.generatePlaceholderPrice(price)

}
```

A user's high score is stored using the browser's built-in `localStorage`. The page is simultaneously updated to show any changes to the high score.
```updateHighScore() {

if (this.score  >  parseInt(lsHighScore)) {

localStorage.setItem("highScore", this.score);

lsHighScore  =  localStorage.getItem("highScore");

}

highScore.innerHTML  =  `High Score: ${lsHighScore}`;

}
```
## Future Improvements
**Improve product fetching**
API calls can be restructured to occur proactively. This would make the gameplay run more smoothly. API calls can also be more dynamic to include a large list of ever-changing products

**Refactoring code**
Some of the code in `game` can be moved to a new `gameView` file. That would improve readability and allow for easier updates in the future.

**Design Improvements**
Various parts of the CSS can be updated to maintain a consistent theme. Updates to make the game playable on mobile screens may also be possible.