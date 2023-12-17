import Product from "./product.js";
import products from "./products.js";

const productHistory = [];


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
        // this.updateHighScore();
        productHistory.push(this.product.id);
        // currentScore.innerHTML = `Score: ${this.score}`;
    }

    incorrect() {
        this.score = 0;
        productHistory.splice(0, productHistory.length);
        // currentScore.innerHTML = `Score: ${this.score}`;
    }



}

export default Game;
