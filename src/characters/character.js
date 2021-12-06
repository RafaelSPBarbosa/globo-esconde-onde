export default class Character {

    characterAnimations = [
        { iddle: 'purple-opening', victory: 'purple-ending' },
        { iddle: 'red-opening', victory: 'red-ending' },
        { iddle: 'yellow-opening', victory: 'yellow-ending' },
        { iddle: 'blue-opening', victory: 'blue-ending' },
        { iddle: 'green-opening', victory: 'green-ending' }
    ]

    constructor(scene, xPos, yPos, scale, sprite, charID) {
        this.scene = scene;
        this.charID = charID;

        this.charObj = this.scene.add.image(xPos, yPos, sprite).setScale(scale);
        
        var explosionEffect =  this.scene.add.sprite(xPos, yPos, "explosion-effect");
        
        this.charObj.setInteractive().on("pointerdown", ()=>{
            explosionEffect.play("explosion-effect");
            this.charObj.setVisible(false);
            this.scene.verifyVictory();
            
            var charAnim = this.scene.add.sprite(xPos, yPos, sprite);
            charAnim.play(this.characterAnimations[this.charID].victory);

            this.scene.time.addEvent({
                delay:3000,
                callback: ()=>{
                    charAnim.play(this.characterAnimations[this.charID].iddle);
                    if(charID == 4) charAnim.setScale(0.5);
                }
            })
        });
    }
}