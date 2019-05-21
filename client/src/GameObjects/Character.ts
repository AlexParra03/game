import * as PIXI from 'pixi.js';

import { Config } from '../Config';
import { GameObject } from "./GameObject";

export class Character extends GameObject {
	hp: number;
	maxHp: number;
	hpBar: PIXI.Graphics;

    constructor() {
        super();
    	this.hp = 1.0;
	this.maxHp = 1.0;
    	this.hpBar = new PIXI.Graphics();
    	this.addChild(this.hpBar);
    }

    update(deltaTime)
    {
   	var sprite = this.currentSprite;
	this.draw_hp_bar(
	    sprite.position.x + sprite.width * 0.5 - Config.HP_BAR_WIDTH * 0.5,
	    sprite.position.y - Config.HP_BAR_HEIGHT,
	    this.hp / this.maxHp);
    }

    draw_hp_bar(x: number, y: number, hp: number): void
    {
    	this.hpBar.clear();
	this.hpBar.beginFill(Config.HP_BAR_BG);
    	this.hpBar.drawRect(x, y, Config.HP_BAR_WIDTH, Config.HP_BAR_HEIGHT);
	this.hpBar.beginFill(Config.HP_BAR_FG);
	this.hpBar.drawRect(x, y, Config.HP_BAR_WIDTH * hp, Config.HP_BAR_HEIGHT);
    }

    loadTextures()
    {}
}
