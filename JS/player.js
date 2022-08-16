import { StandingLeft, StandingRight } from "./state.js";

export default class Player {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [new StandingLeft(), new StandingRight()];
        this.currentState = this.states[0];
        this.image = dogImage;
        this.width = 200;
        this.height = 181.83;
        this.x = this.gameWidth * .5 - this.width * .5;
        this.y = this.gameHeight - this.height;
        this.frameX = 0;
        this.frameY = 0;
    }
    draw(context) {
        //can expect 3,5,9 arguments
        context.drawImage(this.image, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(input) {
        this.currentState.handleInput(input);
    }
    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }

}
