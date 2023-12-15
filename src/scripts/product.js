class Product{
    constructor(id, name, image, price, URL){
        this.id = id;
        this.name = name;
        this.image = image
        this.price = price;
        this.URL = URL;
    }

    generatePlaceholderPrice(price) {
        let priceSalt = Math.random() * (Math.round(Math.random()) * 2 - 1);
        let placeHolder = price + (price * priceSalt * .2);

        if (price < 10) {
            placeHolder = Math.ceil(placeHolder + 1)
        } else if (price < 100) {
            placeHolder = (Math.ceil(placeHolder / 10) * 10)
        } else if (price < 1000) {
            placeHolder = (Math.ceil(placeHolder / 50) * 50)
        } else {
            placeHolder = (Math.ceil(placeHolder / 100) * 100)
        }

        return Math.abs(price - placeHolder) > .99 ? placeHolder : this.generatePlaceholderPrice(price)
    }

    assignPlaceholderPrice(){
        this.placeHolderPrice = this.generatePlaceholderPrice(this.price)
    }

    guessHigher() {
        return (this.price > this.placeHolderPrice); 
    }

    guessLower() {
        return this.price < this.placeHolderPrice
    }
}

export default Product;