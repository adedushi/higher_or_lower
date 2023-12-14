class Game {
    constructor(ele) {
        this.ele = ele;
        console.log(this)
        this.ele.innerHTML = "<h1>it's Alive!!!!</h1>";

        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener("click", this.handleClick);
    }
    
    handleClick() {
        this.ele.children[0].innerText = "Ouch!";
    }
}

export default Game;