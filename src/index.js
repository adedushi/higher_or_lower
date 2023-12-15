import Game from "./scripts/game.js";
import GameView from "./scripts/game-view";
import Product from "./scripts/product.js";

const gameCanvas = document.getElementById("game-canvas");
const ctx = gameCanvas.getContext("2d");

gameCanvas.width = GameView.boardWidth;
gameCanvas.height = GameView.boardHeight;

// gameCanvas.addEventListener('click', Product.fetchProduct);

GameView.drawBoard(ctx, GameView.boardColor, 0, 0, GameView.boardWidth, GameView.boardHeight);

