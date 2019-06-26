import { SkillBar } from "./SkillBar";


export class UI extends PIXI.Container {

    constructor() {
        super();
        // console.log('ZZZ');
        // this.addChild(this.skillBar);
        this.addChild(new SkillBar());
    }
    
    update(deltaTime: number) {
	    this.children.forEach(function (userInterface: UI) {
		    userInterface.update(deltaTime);
        });
    
    }

}
