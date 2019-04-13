import { GameObject } from "./GameObject";

export class Player extends GameObject {
    movingUp = false;
    movingDown = false;
    movingLeft = false;
    movingRight = false;

    constructor() {
        super();
        var texture = PIXI.Texture.fromImage('assets/graphics/Player/player.png', true);
        var sprite = new PIXI.Sprite(texture);
        this.currentSprite = new PIXI.Sprite(texture);
        this.currentSprite.position.x = 200;
        this.currentSprite.position.y = 200;
        // bunny.anchor.x = 0.5;
        // bunny.anchor.y = 0.5;
        // bunny.position.x = 400;
        // bunny.position.y = 300;
        // bunny.scale.x = 2;
        // bunny.scale.y = 2;
        this.addChild(this.currentSprite);

        window.addEventListener('keydown', this.keyDownEvent.bind(this));
        window.addEventListener('keyup', this.keyUpEvent.bind(this));
    }

    update(deltaTime) {
    }

    loadTextures(){

    }

    keyDownEvent(event) {
        if ( !this.movingUp && event.code === 'KeyW') {
            this.movingUp = true;
            console.log(true, "[]");
        }

        if (event.code === 'KeyS') {
            this.movingDown = true;
        }
        
        if (event.code === 'KeyA') {
            this.movingLeft = true;
        }

        if (event.code === 'KeyD') {
            this.movingRight = true;
        }

    }

    keyUpEvent(event) {
        if (this.movingUp && event.code === 'KeyW') {
            console.log(false,  "[]");
            this.movingUp = false;
        }

        if (event.code === 'KeyS') {
            this.movingDown = false;
        }
        
        if (event.code === 'KeyA') {
            this.movingLeft = false;
        }

        if (event.code === 'KeyD') {
            this.movingRight = false;
        }

    }
}