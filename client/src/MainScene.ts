import { Player } from "./GameObjects/Player";
import { GameWorld } from "./GameWorld";
import { UI } from "./UI/UI";

export class MainScene extends PIXI.Container {

    player : Player;
    gameWorld : GameWorld;
    UI: UI
    

    constructor() {
        super();
        this.gameWorld = new GameWorld();
        this.addChild(this.gameWorld);
        this.player = new Player();
        this.addChild(this.player);
        
        this.UI = new UI();
        this.addChild(this.UI);

    }

    update(deltaTime: number) {
        this.player.update(deltaTime);
        this.gameWorld.update(deltaTime);
        this.UI.update(deltaTime);

        if(this.player.movingUp) {
            this.gameWorld.position.y += 1;
        }
        if(this.player.movingDown) {
            this.gameWorld.position.y -= 1;
        }
        if(this.player.movingLeft) {
            this.gameWorld.position.x += 1;
        }
        if(this.player.movingRight) {
            this.gameWorld.position.x -= 1;
        }
    }
}
