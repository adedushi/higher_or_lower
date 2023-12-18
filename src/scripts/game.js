import Product from "./product.js";
import products from "./products.js";
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
let lsHighScore = localStorage.getItem("highScore") || 0;

const productHistory = [];
const success = ["Correct!", "You're right!", "Nice one!"]
const failure = ["Close one!", "Sorry!", "Almost!"]

class Game {
    constructor(product) {
        this.product = product;
        this.score = 0;
    }

    static generateURL() {
        let product_id = Game.selectProduct()
        while (productHistory.indexOf(product_id) > -1) product_id = Game.selectProduct()
        const API_KEY = "";
        return `https://api.bestbuy.com/v1/products(sku=${product_id})?apiKey=${API_KEY}&sort=name.asc&show=name,image,salePrice,url,sku&format=json`
    }

    static selectProduct(){
        return products[Math.floor(Math.random() * products.length)];
    }

    displayProduct() {
        startButton.style.display = "none";
        guessFeedback.innerHTML = ""
        productLink.style.visibility = "hidden";
        console.log(this.product);

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

    async fetchProduct(e) {
        e.preventDefault();

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

            } else {
                throw new Error(res)
            }

        } catch (err) {
            console.error(err);
        }

    }

    guessHigher() {
        this.product.price > this.product.placeholderPrice ? this.correct() : this.incorrect()
    }

    guessLower() {
        this.product.price < this.product.placeholderPrice ? this.correct() : this.incorrect()
    }

    correct(){
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

let game = new Game()

document.addEventListener('DOMContentLoaded', game.updateHighScore.bind(game));
startButton.addEventListener('click', game.fetchProduct.bind(game));
higherButton.addEventListener('click', game.guessHigher.bind(game));
higherButton.addEventListener('click', game.changeButtons.bind(game));
lowerButton.addEventListener('click', game.guessLower.bind(game));
lowerButton.addEventListener('click', game.changeButtons.bind(game));
nextButton.addEventListener('click', game.fetchProduct.bind(game));
nextButton.addEventListener('click', game.changeButtons.bind(game));

export default Game;
