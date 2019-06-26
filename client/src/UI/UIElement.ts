export abstract class UIElement extends PIXI.Graphics {
    
    constructor() {
        super();
    }

    abstract update(deltaTime: number) : void;

}