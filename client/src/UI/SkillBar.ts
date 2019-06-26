import { UIElement } from "./UIElement";

export class SkillBar extends UIElement {
    public static B_COLOR = 0X663300;
    public static WIDTH = 500;
    public static HEIGHT = 100;
    public static X = 150;
    public static Y = 480;
    constructor() {
        super();
    }

    update(deltaTime: number){
        console.log("HI");
        this.drawHpBar();
    }

    drawHpBar(): void
    {
        // this.clear();
        this.beginFill(SkillBar.B_COLOR);
        this.drawRect(SkillBar.X, SkillBar.Y, SkillBar.WIDTH, SkillBar.HEIGHT);
    }

}