import * as PIXI from 'pixi.js';
import { Player } from './GameObjects/Player';
import { MainScene } from './MainScene';

var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

// var stage = new PIXI.Container();
// var texture = PIXI.Texture.fromImage('assets/graphics/bunny.png', true);
// console.log("HELLO");
// var bunny = new PIXI.Sprite(texture);
// bunny.anchor.x = 0.5;
// bunny.anchor.y = 0.5;
// bunny.position.x = 400;
// bunny.position.y = 300;
// bunny.scale.x = 2;
// bunny.scale.y = 2;
// stage.addChild(bunny);
const scene = new MainScene();
const player = new Player();


mainLoop();

let prev_time = Date.now();
function mainLoop() {
    const delta_time = Date.now() - prev_time;
    prev_time = Date.now();

    requestAnimationFrame(mainLoop);
    scene.update(delta_time);
    renderer.render(scene);
}