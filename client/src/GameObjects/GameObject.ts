import * as PIXI from 'pixi.js';

export abstract class GameObject extends PIXI.Container {

  currentSprite: PIXI.Sprite | null = null;

  constructor() {
    super();
  }

  abstract loadTextures(): void;
  abstract update(deltaTime: number): void;
}