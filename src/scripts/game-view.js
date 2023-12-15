import Product from "./product";

class GameView {
    constructor (product){
        this.product = product
    }

    static boardColor = "pink";
    static boardWidth = 500;
    static boardHeight = window.screen.height / 3;

    static drawBoard(ctx, color, x = 0, y = 0, width, height) {
    ctx.clearRect(x, y, width, height)
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
    }


    static displayProduct(product){
        const img = new Image();
        img.src = product.image;
    }
}



export default GameView;