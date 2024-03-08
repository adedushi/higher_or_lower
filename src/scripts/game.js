import Product from "./product.js";
import products from "./products.js";

const title = document.getElementById('title')
const buttons = document.querySelector('.buttons')
const startButton = document.querySelector('#start')
const productDisplay = document.querySelector('#product-display')
const placeholderPrice = document.querySelector('#placeholder-price')
const higherButton = document.querySelector('#higher')
const lowerButton = document.querySelector('#lower')
const currentScore = document.querySelector('#current-score')
const highScore = document.querySelector('#high-score')
const guessFeedback = document.querySelector('#feedback')
const nextButton = document.querySelector('#next')
const productLink = document.querySelector('#product-link')
const modalOpen = document.querySelector('#modal-open')
const modalClose = document.querySelector('#modal-close')
const modal = document.querySelector('#modal-container')
let lsHighScore = localStorage.getItem("highScore") || 0;


const productHistory = [];
const success = ["Correct!", "Well done!", "Nice one!"]
const failure = ["Close one!", "Sorry!", "Almost!"]

class Game {
    constructor(product) {
        this.product = product;
        this.score = 0;
    }

    static generateURL() {
        let productId = Game.selectProduct()
        while (productHistory.indexOf(productId) > -1) productId = Game.selectProduct()
        const API_KEY = "FTJXEwF95489m9I5HzWazZ0l";
        return `https://api.bestbuy.com/v1/products(sku=${productId})?apiKey=${API_KEY}&sort=name.asc&show=name,image,salePrice,url,sku&format=json`
    }

    static selectProduct() {
        return products[Math.floor(Math.random() * products.length)];
    }

    displayProduct() {
        startButton.style.display = "none";
        guessFeedback.innerHTML = ""
        productLink.style.visibility = "hidden";

        let productName = document.createElement('h3')
        productName.setAttribute("id", "product-name")
        productName.innerHTML = this.product.name


        let productImage = document.createElement('img')
        productImage.setAttribute("id", "product-image")
        productImage.src = this.product.image


        placeholderPrice.innerHTML = `$${this.product.placeholderPrice}.00`


        while (productDisplay.firstChild) {
            productDisplay.removeChild(productDisplay.firstChild);
        }

        productDisplay.append(productName);
        productDisplay.append(productImage);

    }

    disableButtons() {
        higherButton.disabled = true;
        lowerButton.disabled = true;
        nextButton.disabled = true;
        nextButton.innerHTML = 'Loading';
    }

    enableButtons() {
        higherButton.disabled = false;
        lowerButton.disabled = false;

        if (nextButton.style.display === "block") {
            nextButton.disabled = false;
            nextButton.innerHTML = 'Next';
        }
    }


    async fetchProduct(e) {
        e.preventDefault();
        this.disableButtons();
        let attempts = 0;

        while (attempts < 2) {
            try {
                let res = await fetch(Game.generateURL());


                if (res.ok) {
                    let resBody = await res.json();

                    let id = resBody.products[0].sku
                    let name = resBody.products[0].name
                    let image = resBody.products[0].image
                    let price = resBody.products[0].salePrice
                    let URL = resBody.products[0].url

                    this.product = new Product(id, name, image, price, URL);
                    this.product.assignPlaceholderPrice()
                    this.displayProduct();
                    this.enableButtons();
                    return this.changeButtons();
                }
            } catch (err) { }

            attempts += 1
            if (attempts < 2) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
        this.enableButtons();
    }

    guessHigher() {
        this.product.price > this.product.placeholderPrice ? this.correct() : this.incorrect()
    }

    guessLower() {
        this.product.price < this.product.placeholderPrice ? this.correct() : this.incorrect()
    }

    correct() {
        this.score++;
        this.updateHighScore();
        productHistory.push(this.product.id);
        currentScore.innerHTML = `Score: ${this.score}`;
        guessFeedback.innerHTML = `${success[Math.floor(Math.random() * success.length)]} The actual retail price is $${this.product.price.toFixed(2)}`
        productLink.href = `${this.product.URL}`;
        productLink.style.visibility = "";
    }

    incorrect() {
        this.score = 0;
        productHistory.splice(0, productHistory.length);
        currentScore.innerHTML = `Score: ${this.score}`;
        guessFeedback.innerHTML = `${failure[Math.floor(Math.random() * failure.length)]} The actual retail price is $${this.product.price.toFixed(2)}`
        productLink.href = `${this.product.URL}`;
        productLink.style.visibility = "";
    }

    updateHighScore() {
        if (this.score > parseInt(lsHighScore)) {
            localStorage.setItem("highScore", this.score);
            lsHighScore = localStorage.getItem("highScore");
        }
        highScore.innerHTML = `High Score: ${lsHighScore}`;
    }

    changeButtons() {
        if (nextButton.style.display === "none") {
            nextButton.style.display = "block";
            higherButton.style.display = "none";
            lowerButton.style.display = "none";
        } else {
            nextButton.style.display = "none";
            higherButton.style.display = "block";
            lowerButton.style.display = "block";
        }
    }

}

function visitHomePage() {
    window.location.href = '/';
}

let game = new Game()

document.addEventListener('DOMContentLoaded', game.updateHighScore.bind(game));
startButton.addEventListener('click', game.fetchProduct.bind(game));

startButton.addEventListener('click', function () {
    document.querySelector('.game').style.borderColor = "orange";
    document.querySelector('.product').style.borderColor = "orange";
    document.querySelector('.main-content').style.visibility = "visible";
    buttons.style.visibility = "visible"
    higherButton.style.display = "block"
    lowerButton.style.display = "block"
    startButton.style.display = "hidden"
    modal.style.display = "none"
})

document.addEventListener('DOMContentLoaded', function () {
    modal.style.display = "flex"
})

modalOpen.addEventListener('click', function () {
    modal.style.display = "flex"
})

modalClose.addEventListener('click', function () {
    modal.style.display = "none"
})



title.addEventListener('click', visitHomePage);
higherButton.addEventListener('click', game.guessHigher.bind(game));
higherButton.addEventListener('click', game.changeButtons.bind(game));
lowerButton.addEventListener('click', game.guessLower.bind(game));
lowerButton.addEventListener('click', game.changeButtons.bind(game));
nextButton.addEventListener('click', game.fetchProduct.bind(game));

export default Game;
