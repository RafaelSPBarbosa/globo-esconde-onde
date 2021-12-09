export default class Character {

    characterAnimations = [
        [
            {key:"Ihuu_Anim", victory:'ihuu_idle_comemoracao', animationNumber: 1, scale:0.11},
            'ihuu_idle'
        ],
        [
            {key:"Iei_Anim", victory:'iei_idle_comemoracao', animationNumber: 6, scale:0.16},
            'iei_idle_neutro_1',
            'iei_idle_neutro_2',
            'iei_idle_stretch',
            'iei_idle_neutro_1',
            'iei_idle_neutro_2',
            'iei_idle_pum'
        ],
        [
            {key:"Han_Anim", victory:'han_comemoracao', animationNumber: 2, scale:0.28},
            'han_idle_neutro_1',
            'han_idle_neutro_2'
        ],
        [
            {key:"Grrr_Anim", victory:'grrr_bracos', animationNumber: 2, scale:0.21},
            'grrr_idle',
            'grrr_suspiro'
        ],
        [
            {key:"Glup_Anim", victory:'glup_comemoracao', animationNumber: 4, scale:0.19},
            'glup_idle',
            'glup_sleeping',
            'glup_idle',
            'glup_notes'
        ]
    ]

    //characterAnimations = [
    //    { iddle: 'purple-opening', victory: 'purple-ending' },
    //    { iddle: 'red-opening', victory: 'red-ending' },
    //    { iddle: 'yellow-opening', victory: 'yellow-ending' },
    //    { iddle: 'blue-opening', victory: 'blue-ending' },
    //    { iddle: 'green-opening', victory: 'green-ending' }
    //]

    constructor(scene,charData, sprite, charID) {
        this.scene = scene;
        this.charID = charID;

        var xPos = charData.x;
        var yPos = charData.y;
        var scale = charData.scale;

        var offsetX = charData.offsetX;
        var offsetY = charData.offsetY;

        this.charObj = this.scene.add.image(xPos, yPos, sprite).setScale(scale);

        this.animationData = this.characterAnimations[this.charID];

        this.anim = this.scene.add.spine(
            xPos + offsetX,
            yPos + 100 + offsetY,
            this.animationData[0].key,
            this.animationData[0].victory,
            true).setScale(this.animationData[0].scale).setAlpha(0);
        
        this.charObj.setInteractive().on("pointerdown", ()=>{
            this.scene.add.tween({
                targets: this.charObj,
                alpha: 0,
                duration: 100 
            })
            //this.charObj.setVisible(false);
            this.scene.verifyVictory(this.charID);
            
            this.startAnimation(xPos, yPos);
            
        });
    }

    startAnimation(x,y){
        var explosionEffect =  this.scene.add.sprite(x, y, "explosion-effect");
        explosionEffect.play("explosion-effect");
        
        this.scene.add.tween({
            targets: this.anim,
            alpha: 1,
            duration: 100 
        })

        this.anim.setVisible(true);
        this.playVictoryAnimation();

        var ctrol = 1;
        this.anim.on("complete", ()=>{
         
            this.anim.setAnimation(0, this.animationData[ctrol], false);

            if(ctrol == this.animationData[0].animationNumber){
                ctrol = 1;
            }else{
                ctrol++;
            }
        })
    }

    playVictoryAnimation(){
        this.anim.setAnimation(0,this.animationData[0].victory, false);
    }

    destroyAnimations(){
        this.anim.destroy();
    }
}