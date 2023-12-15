import Product from "./product.js";
import products from "./products.js";
const start = document.querySelector("#start");
const productDisplay = document.querySelector('.product-display');
const higherButton = document.querySelector('#higher')
const lowerButton = document.querySelector('#lower')
const scoreBoard = document.querySelector('#score')

class Game {
    constructor(product) {
        this.product = product;
        this.score = 0;
    }

    static generateURL() {
        let product_id = products[Math.floor(Math.random() * products.length)];
        const API_KEY = "";
        return `https://api.bestbuy.com/v1/products(sku=${product_id})?apiKey=${API_KEY}&sort=name.asc&show=name,image,salePrice,url,sku&format=json`
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

                let productImage = document.createElement('img')
                productImage.src = this.product.image

                let productPlaceholderPrice = document.createElement('h1')
                productPlaceholderPrice.innerHTML = this.product.placeHolderPrice


                while (productDisplay.firstChild) {
                    productDisplay.removeChild(productDisplay.firstChild);
                }

                productDisplay.append(productImage);
                productDisplay.append(productPlaceholderPrice);
                
                console.log(this.product);

            } else {
                throw new Error(res)
            }

        } catch (err) {
            console.error(err);
        }

    }
    guessHigher() {
        this.product.price > this.product.placeHolderPrice ? this.correct() : this.incorrect()
    }

    guessLower() {
        this.product.price < this.product.placeHolderPrice ? this.correct() : this.incorrect()
    }

    correct(){
        this.score++;
        scoreBoard.innerHTML = `Score: ${this.score}`;
    }

    incorrect() {
        this.score = 0;
        scoreBoard.innerHTML = `Score: ${this.score}`
    }

}

let game = new Game()

start.addEventListener('click', game.fetchProduct.bind(game));
higherButton.addEventListener('click', game.guessHigher.bind(game));
higherButton.addEventListener('click', game.fetchProduct.bind(game));
lowerButton.addEventListener('click', game.guessLower.bind(game));
lowerButton.addEventListener('click', game.fetchProduct.bind(game));

export default Game;