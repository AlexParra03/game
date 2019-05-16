import { GameObject } from "./GameObject";

export class Character extends GameObject {
	hp: number;
	hpBar: PIXI.Graphics;

    constructor() {
        super();
    	this.hp = 1.0;
    	this.hpBar = new PIXI.Graphics();
	    this.addChild(this.hpBar);
    }

    update(deltaTime) {
        this.renderHPBar();
    }

    renderHPBar() {
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
