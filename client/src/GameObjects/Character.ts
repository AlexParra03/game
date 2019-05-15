import { GameObject } from "./GameObject";

export class Character extends GameObject {
	hp: number;
	hpBar: PIXI.Graphics;

    constructor() {
        super();
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

    	this.hp = 1.0;
    	this.hpBar = new PIXI.Graphics();
	this.addChild(this.hpBar);
    }

    update(deltaTime) {
        // console.log(deltaTime);
        // this.currentSprite.position.x += 1;
	var width = this.currentSprite.width * 0.8;	
	this.hpBar.clear();
    	this.hpBar.beginFill(0XFF0000);
	this.hpBar.drawRect(this.currentSprite.x, this.currentSprite.y, width, 30);
    	this.hpBar.beginFill(0X00FF00);
	this.hpBar.drawRect(this.currentSprite.x, this.currentSprite.y, width * this.hp, 30);
	
	this.hp -= 0.01;
	if (this.hp < 0.0) {
		this.hp = 1.0;
	}
    }

    loadTextures(){

    }
}
