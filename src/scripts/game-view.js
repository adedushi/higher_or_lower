import Game from "./game";
const start = document.querySelector('#start');
const productDisplay = document.querySelector('#product-display');
const higherButton = document.querySelector('#higher')
const lowerButton = document.querySelector('#lower')
const currentScore = document.querySelector('#current-score')
const highScore = document.querySelector('#high-score')
let lsHighScore = localStorage.getItem("highScore") || 0;

class GameView {
    constructor (game){
        this.game = game;
    }

    displayProduct() {
        this.game.fetchProduct.bind(this.game);

        let productName = document.createElement('h3')
        productName.innerHTML = this.game.product.name

        let productImage = document.createElement('img')
        productImage.src = this.game.product.image

        let productPlaceholderPrice = document.createElement('h3')
        productPlaceholderPrice.innerHTML = `$${this.game.product.placeHolderPrice}.00`


        while (productDisplay.firstChild) {
            productDisplay.removeChild(productDisplay.firstChild);
        }

        productDisplay.append(productName);
        productDisplay.append(productImage);
        productDisplay.append(productPlaceholderPrice);


        console.log(game.product);
    }

    updateHighScore() {
        if (this.score > parseInt(lsHighScore)) {
            localStorage.setItem("highScore", this.score);
            lsHighScore = localStorage.getItem("highScore");
        }
        highScore.innerHTML = `High Score: ${lsHighScore}`;
    }

}

function test () {
    console.log("this works");
}


let game = new Game()
let gameView = new GameView(game)

document.addEventListener('DOMContentLoaded', gameView.game.fetchProduct.bind(gameView.game));

start.addEventListener('click', gameView.displayProduct.bind(gameView));
start.addEventListener('click', gameView.game.fetchProduct.bind(gameView.game));

higherButton.addEventListener('click', gameView.displayProduct.bind(gameView));
higherButton.addEventListener('click', gameView.game.fetchProduct.bind(gameView.game));

lowerButton.addEventListener('click', gameView.displayProduct.bind(gameView));
lowerButton.addEventListener('click', gameView.game.fetchProduct.bind(gameView.game));

higherButton.addEventListener('click', gameView.game.guessHigher.bind(gameView.game));
lowerButton.addEventListener('click', gameView.game.guessLower.bind(gameView.game));



export default GameView;