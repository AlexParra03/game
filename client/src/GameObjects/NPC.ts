import { GameObject } from "./GameObject";
import { Character } from "./Character";

export class NPC extends Character {

    constructor() {
        super();
        this.loadTextures();
	    this.addChild(this.hpBar);
    }

    update(deltaTime) {
        super.update(deltaTime);
    }

    loadTextures(){
        var texture = PIXI.Texture.fromImage('assets/graphics/Player/player.png', true);
        var sprite = new PIXI.Sprite(texture);
        this.currentSprite = new PIXI.Sprite(texture);
        this.currentSprite.position.x = 100;
        this.currentSprite.position.y = 200;
        // bunny.anchor.x = 0.5;
        // bunny.anchor.y = 0.5;
        // bunny.position.x = 400;
        // bunny.position.y = 300;
        // bunny.scale.x = 2;
        // bunny.scale.y = 2;
        this.addChild(this.currentSprite);
    }
}
