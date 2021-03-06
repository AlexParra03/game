import { Player } from "./GameObjects/Player";
import { NPC } from "./GameObjects/NPC";
import { Character } from "./GameObjects/Character";
import { GameObject } from "./GameObjects/GameObject";
import { TileMap } from "./GameObjects/TileMap";

export class GameWorld extends PIXI.Container {
    

    constructor() {
        super();
        this.mockup();
    }

    update(deltaTime: number) {
	    this.children.forEach(function (object: GameObject) {
		    object.update(deltaTime);
	    });
    }

    mockup(){
        const tileMap = new TileMap();
        this.addChild(tileMap);

        const objOne = new NPC();
        objOne.currentSprite.x = -50;
        objOne.currentSprite.y = 239;
        this.addChild(objOne);

        const objTwo = new NPC();
        objTwo.currentSprite.x = 203;
        objTwo.currentSprite.y = 239;
        this.addChild(objTwo);

        const objThree = new NPC();
        objThree.currentSprite.x = 503;
        objThree.currentSprite.y = 239;
        this.addChild(objThree);
    }
}
