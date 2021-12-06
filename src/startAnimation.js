import FadeScreen from "./characters/FadeScreen.js";

export default class StartAnimation {
    constructor(scene, charFinalPositions) {
        this.scene = scene;

        this.charFinalPositions = charFinalPositions;

        this.fade = new FadeScreen({
            scene: this.scene,
            startopacity: 0
        });

        this.fade.backg.fillColor = 0x12143D;

        //Gambiarra para sincronizar a apagar da luz com a animação
        this.scene.time.addEvent({
            delay: 1600,
            callback: () => {
                this.fade.backg.alpha = 1;
            }
        })

        let animCtrl = true;
        this.startAnimation = this.scene.add.spine(1450, 1350, "Glup_Anim", "glup_lamp_corda", false).setScale(0.7);
        this.startAnimation.on("complete", () => {

            if (animCtrl) {
                this.startAnimation.setAnimation(0, "glup_olhos");
                animCtrl = false;
            }
            else {
                this.startAnimation.setVisible(false);
                this.scene.time.addEvent({
                    delay: 100,
                    callback: () => {
                        this.Start();
                    }
                })
            }
        })


        // this.scene.time.addEvent({
        //     delay: 2000,
        //     callback: () => {
        //         

        //         this.scene.time.addEvent({
        //             delay: 500,
        //             callback: () => {
        //                 this.Start();
        //             }
        //         })
        //     }
        // })
    }

    Start() {
        //this.scene.add.sprite(this.charFinalPositions[0].x, this.charFinalPositions[0].y, "eye-1").setScale(0.3);

        var centerX = this.scene.screenCenterX;
        var centerY = this.scene.screenCenterY;

        var startOffset = -500

        for (let i = 0; i < this.charFinalPositions.length; i++) {
            var eyeStartPointX = centerX + startOffset
            var eyeStartPointY = centerY

            //const path1 = { t: 0, vec: new Phaser.Math.Vector2() }
            var curve = new Phaser.Curves.Spline([
                eyeStartPointX, eyeStartPointY,

                eyeStartPointX + Phaser.Math.Between(200, -100), eyeStartPointY + Phaser.Math.Between(200, -100),

                this.charFinalPositions[i].x + Phaser.Math.Between(-100, 200), this.charFinalPositions[i].y + Phaser.Math.Between(-100, 200),

                this.charFinalPositions[i].x, this.charFinalPositions[i].y
            ])

            var eye = this.scene.add.follower(curve, eyeStartPointX, eyeStartPointY, 'eye' + (i + 1) + 'a')
            eye.play('eye' + (i + 1) + 'a')
            eye.setScale(0.5)
            eye.startFollow({
                duration: 7000,
                yoyo: false,
                ease: 'Sine.easeInOut'
            })

            this.scene.add.tween({
                targets: eye,
                alpha: 0,
                delay: 6650,
                duration: 200
            })

            startOffset += 250
        }

        this.scene.time.addEvent({
            delay: 7250,
            callback: () => {
                this.scene.spawnCharacters();
                this.ShowRope();
            }
        })
    }

    ShowRope() {
        let fade = new FadeScreen({
            scene: this.scene,
            startopacity: 1
        });

        fade.backg.fillColor = 0x12143D;
        
        var animation = this.scene.add.spine(1450, 1350, "Glup_Anim", "glup_corda_entra", false).setScale(0.7);

        let clickZone = this.scene.add.zone(2010, 200, 250, 600).setInteractive();

        clickZone.on('pointerdown', ()=>{
            animation.setAnimation(0,"glup_corda_swap_clic");
            animation.on("complete", ()=>{
                animation.setAnimation(0,"glup_corda_entra");
                //animation.state.timeScale = -1;
                animation.destroy();
            })
            fade.DestroyThis();
        })
        
    }
}