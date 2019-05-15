import { Player } from "./GameObjects/Player";
import { Character } from "./GameObjects/Character";
import { GameObject } from "./GameObjects/GameObject";
import { TileMap } from "./GameObjects/TileMap";

export class GameWorld extends PIXI.Container {
    

    constructor() {
        super();

        const tileMap = new TileMap();
        this.addChild(tileMap);

        const objOne = new Character();
        objOne.currentSprite.x = -50;
        objOne.currentSprite.y = 239;
        this.addChild(objOne);

        const objTwo = new Character();
        objTwo.currentSprite.x = 203;
        objTwo.currentSprite.y = 239;
        this.addChild(objTwo);

        const objThree = new Character();
        objThree.currentSprite.x = 503;
        objThree.currentSprite.y = 239;
        this.addChild(objThree);
        
    }

    update(deltaTime: number) {
	    this.children.forEach(function (character: Character) {
		    character.update(deltaTime);
	    });
    }
}
