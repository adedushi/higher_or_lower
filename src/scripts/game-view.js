class GameView {
    constructor (){

    }
    static boardColor = "pink";
    static boardWidth = 500;
    static boardHeight = window.screen.height / 3;

    static drawBoard(ctx, color, x = 0, y = 0, width, height) {
    ctx.clearRect(x, y, width, height)
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
    }


}

export default GameView;