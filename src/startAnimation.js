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

        //Gambiarra para sincronizar o apagar da luz com a animação
        this.scene.time.addEvent({
            delay: 1600,
            callback: () => {
                this.fade.backg.alpha = 1;
            }
        })

        let animCtrl = true;
        var startAnimation = this.scene.add.spine(1400, 1350, "Glup_Anim", "glup_lamp_corda", false).setScale(0.7);
        startAnimation.on("complete", () => {

            if (animCtrl) {
                //startAnimation.setAnimation(0, "glup_olhos");
                animCtrl = false;


                startAnimation.setVisible(false);
                startAnimation.destroy();
                this.lightsOut();
            }
            else {
                startAnimation.setVisible(false);
                startAnimation.destroy();
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

    animationData = [
        { key: "Ihuu_Anim", animation: "ihuu", x: 600, y: 400, initScale: 0.3, finalScale: 0.11},
        { key: "Iei_Anim", animation: "iei"  , x: 800, y: 1300, initScale: 0.5, finalScale: 0.16},
        { key: "Han_Anim", animation: "han"  , x: 1500, y: 1000, initScale: 0.8, finalScale: 0.28},
        { key: "Grrr_Anim", animation: "grrr", x: 1900, y: 1500, initScale: 0.7, finalScale: 0.21},
        { key: "Glup_Anim", animation: "glup", x: 1400, y: 1350, initScale: 0.7, finalScale: 0.19}
    ]

    lightsOut() {
        var followers = []

        for(let i = 0; i<this.animationData.length; i++){
            var animation = this.scene.add.spine(this.animationData[i].x, this.animationData[i].y, this.animationData[i].key, this.animationData[i].animation+"_olhos", true)
            .setScale(this.animationData[i].initScale).setAlpha(0);

            if(i==4){
                animation.setAlpha(1);
            }else{
                this.scene.add.tween({
                    targets:animation,
                    alpha:1,
                    delay:500,
                    duration:400
                })
            }

            var eyeStartPointX = this.animationData[i].x;
            var eyeStartPointY = this.animationData[i].y;
           
            //const path1 = { t: 0, vec: new Phaser.Math.Vector2() }
            var curve = new Phaser.Curves.Spline([
                eyeStartPointX, eyeStartPointY,
                
                eyeStartPointX + Phaser.Math.Between(200, -100), eyeStartPointY + Phaser.Math.Between(-200, -200),
                
                this.charFinalPositions[i].x + Phaser.Math.Between(-200, 200), this.charFinalPositions[i].y + Phaser.Math.Between(-200, 200),
                
                this.charFinalPositions[i].x, this.charFinalPositions[i].y
            ])

            var follower = this.scene.add.follower(curve, eyeStartPointX, eyeStartPointY)
            follower.startFollow({
                duration: 7000,
                delay:1000,
                yoyo: false,
                ease: 'Sine.easeInOut'
            })
            followers.push(follower);

            this.scene.add.tween({
                targets: animation,
                scale: this.animationData[i].finalScale,
                duration: 7000,
                delay:1000,
                onUpdate: (t,tg)=> {
                    tg.x = followers[i].x;
                    tg.y = followers[i].y;
                }
            })

            this.scene.add.tween({
                targets: animation,
                alpha: 0,
                delay: 5500,
                duration: 200
            })

        }

        this.scene.time.addEvent({
            delay: 7250,
            callback: () => {
                this.scene.spawnCharacters();
                this.ShowRope();
            }
        })
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

        var animation = this.scene.add.spine(1400, 1350, "Glup_Anim", "glup_corda_entra", false).setScale(0.7);

        let clickZone = this.scene.add.zone(2010, 200, 250, 600).setInteractive();

        clickZone.on('pointerdown', () => {
            animation.setAnimation(0, "glup_corda_swap_clic");
            animation.on("complete", () => {
                
                this.scene.add.tween({
                    targets: animation,
                    y: "-=500",
                    duration:200,
                    onComplete: ()=>{
                        animation.destroy();
                    }
                })
            })
            clickZone.destroy();
            fade.DestroyThis();
        })

    }
}