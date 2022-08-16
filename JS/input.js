export default class InputHandler {
    constructor() {
        this.lastKey = '';
        //listens for a key being pressed
        window.addEventListener('keydown', (e) =>  {
            switch (e.key) {
                case "ArrowLeft":
                    this.lastKey = 'PRESS left';
                    break;
                case "ArrowRight":
                    this.lastKey = 'PRESS right';
                    break;
            }
        });
        //listens for a key being released
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.lastKey = 'RELEASE left';
                    break;
                case "ArrowRight":
                    this.lastKey = 'RELEASE right';
                    break;
            }
        });
    }
}