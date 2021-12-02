import FadeScreen from "../characters/FadeScreen.js";

export default class GameScene extends Phaser.Scene {
    constructor(){
        super({key:"GameScene"});
    }
    
    init() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    }

    create(data) {
        
        this.add.image(this.screenCenterX, this.screenCenterY, "bg1");

        //this.cameras.main.setZoom(0.9);
        this.cameras.main.centerOn(this.screenCenterX, this.screenCenterY);
        console.log("deu1")

        var fade = new FadeScreen({
            scene: this,
            startopacity: 1
        });
        fade.Fade({
            fromalpha: 1,
            toalpha: 0,
            duration: 500,
            delay:5000,
            onComplete: () => {
                fade.DestroyThis()
                console.log("deu")
            }
        });

        //this.add.zone(808, 436, 128, 128).setInteractive();
        //let rectangle_3 = this.add.rectangle(808, 436, 128, 128);
        //rectangle_3.isFilled = true;

        // this.input.on('gameobjectdown', function (pointer, gameObject){
        //     console.log("deu");  
        // })
        
    }

}
