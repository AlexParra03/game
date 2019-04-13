import { Player } from "./GameObjects/Player";
import { Character } from "./GameObjects/Character";
import { GameObject } from "./GameObjects/GameObject";

export class GameWorld extends PIXI.Container {

    // gameObjects : Array<GameObject> = new Array();
    

    constructor() {
        super();

        const objOne = new Character();
        objOne.currentSprite.x = 103;
        objOne.currentSprite.y = 239;
        this.addChild(objOne);

        const objTwo = new Character();
        objTwo.currentSprite.x = 203;
        objTwo.currentSprite.y = 239;
        this.addChild(objTwo);

        const objThree = new Character();
        objThree.currentSprite.x = 303;
        objThree.currentSprite.y = 239;
        this.addChild(objThree);
        
    }

    update(deltaTime: number) {
    
    }
}