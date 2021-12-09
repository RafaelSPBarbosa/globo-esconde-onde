import Button from "../buttton.js";
import FadeScreen from "../characters/FadeScreen.js";

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: "MenuScene",
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

    init() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    }

    create() {
        var xPos = 1000;
        var yPos = 341;

        var bg = this.add.rectangle(this.screenCenterX, this.screenCenterY, 2560, 1288);
        bg.isFilled = true;

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

        //var anim = this.add.spine(
        //2000,
        //1200,
        //"Grrr_Anim",
        //"grrr_bracos",
        //true).setScale(0.5);

        // let test = this.add.spine(1000, 1050, "Glup_Anim", "glup_comemoracao", false).setScale(0.2);

        // console.log(test);

        //var rectangle = this.add.rectangle(2000, 1200, 150, 150);
        //rectangle.isFilled = true;
        //rectangle.fillColor = 0xff0000;

        //console.log(rectangle);
    }


}