import { GameObject } from "./GameObject";

export class TileMap extends GameObject {
    readonly TILE_SIZE = 40;
    readonly WIDTH = 15;
    readonly HEIGHT = 16;
    readonly MAP = [
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
    constructor() {
        super();
        const textures = [];
        textures.push( PIXI.Texture.fromImage('assets/graphics/Tiles/grass20.png', true));
        textures.push( PIXI.Texture.fromImage('assets/graphics/Tiles/water.png', true));

        for(let row = 0; row < this.HEIGHT; row++) {
            for(let col = 0; col < this.WIDTH; col++) {
                let sprite = new PIXI.Sprite(textures[this.MAP[row][col]]);
                sprite.position.x = col * this.TILE_SIZE;
                sprite.position.y = row * this.TILE_SIZE;

                this.addChild(sprite);
            }
        }
    }

    update(deltaTime) {
        // console.log(deltaTime);
        // this.currentSprite.position.x += 1;
    }

    loadTextures(){

    }
}