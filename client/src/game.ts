import * as PIXI from 'pixi.js';
import { Player } from './GameObjects/Player';
import { MainScene } from './MainScene';

var renderer = PIXI.autoDetectRenderer(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(renderer.view);

const scene = new MainScene();


mainLoop();

let prev_time = Date.now();
function mainLoop() {
    const delta_time = Date.now() - prev_time;
    prev_time = Date.now();

    requestAnimationFrame(mainLoop);
    scene.update(delta_time);
    renderer.render(scene);
}