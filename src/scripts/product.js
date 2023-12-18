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
        let placeholder = price + (price * priceSalt * .2);

        if (price < 10) {
            placeholder = Math.ceil(placeholder + 1)
        } else if (price < 100) {
            placeholder = (Math.ceil(placeholder / 10) * 10)
        } else if (price < 1000) {
            placeholder = (Math.ceil(placeholder / 50) * 50)
        } else {
            placeholder = (Math.ceil(placeholder / 100) * 100)
        }

        return Math.abs(price - placeholder) > 1.01 ? placeholder : this.generatePlaceholderPrice(price)
    }

    assignPlaceholderPrice(){
        this.placeholderPrice = this.generatePlaceholderPrice(this.price)
    }

    guessHigher() {
        return (this.price > this.placeholderPrice); 
    }

    guessLower() {
        return this.price < this.placeholderPrice
    }
}

export default Product;