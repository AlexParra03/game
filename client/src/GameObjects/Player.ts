import { GameObject } from "./GameObject";

export class Player extends GameObject {
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

        window.addEventListener('keydown', this.keyDownEvent);
    }

    update(deltaTime) {
        // console.log(deltaTime);
        this.currentSprite.position.x += 1;
    }

    loadTextures(){

    }

    keyDownEvent(event) {
        console.log(event.code);
    }
}