import Button from "../buttton.js";
import FadeScreen from "../characters/FadeScreen.js";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: "MenuScene",
        pack: {
            files: [
                {
                    type: "scenePlugin",
                    key: "SpinePlugin",
                    url: "src/SpinePlugin.min.js",
                    //@ts-ignore
                    sceneKey: "spine",
                },
            ],
        },
    });
        
    }

    create() {        
        var xPos = 1000;
        var yPos = 341;

        var levelNum = 0;
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                
                new Button(this, xPos, yPos, levelNum);

                levelNum += 1;

                xPos += 200;
            }
            xPos = 1000;
            yPos += 300;
        }

        // this.add.spine(
        //     2000,
        //     1300,
        //     "Glup_Anim",
        //     "glup_corda_entra",
        //     false).setScale(0.5);
    }


}