import * as PIXI from 'pixi.js';

import { GameObject } from "./GameObject";

export class Character extends GameObject {
	public static B_COLOR = 0XFF0000;
	public static  F_COLOR = 0X00FF00;
	public static WIDTH = 150.0;
	public static HEIGHT = 40.0;
	
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
		this.drawHpBar(
			sprite.position.x + sprite.width * 0.5 - Character.WIDTH * 0.5,
			sprite.position.y - Character.HEIGHT,
			this.hp / this.maxHp);
    }

    drawHpBar(x: number, y: number, hp: number): void
    {
    	this.hpBar.clear();
		this.hpBar.beginFill(Character.B_COLOR);
    	this.hpBar.drawRect(x, y, Character.WIDTH, Character.HEIGHT);
		this.hpBar.beginFill(Character.F_COLOR);
		this.hpBar.drawRect(x, y, Character.WIDTH * hp, Character.HEIGHT);
    }

    loadTextures()
    {}
}
