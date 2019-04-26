import { Player } from "./GameObjects/Player";
import { GameWorld } from "./GameWorld";

export class MainScene extends PIXI.Container {

    player : Player;
    gameWorld : GameWorld;
    

    constructor() {
        super();
        this.player = new Player();
        // this.player.position.x = 500;
        this.addChild(this.player);
        this.gameWorld = new GameWorld();
        this.addChild(this.gameWorld);
        // this.addChild(new Player());
    }

    update(deltaTime: number) {
        this.player.update(deltaTime);
        this.gameWorld.update(deltaTime);
    }
}