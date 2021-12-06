export default class Button {
    constructor(scene, posX, posY, levelNum) {
        this.scene = scene;

        this.levelNum = levelNum;

        var rectangle = this.scene.add.rectangle(posX, posY, 150, 150);
        rectangle.isFilled = true;
        rectangle.fillColor = 7261426;

        var text = this.scene.add.text(rectangle.x - 20, rectangle.y - 20, "", {});
        text.text = levelNum + 1;
        text.setStyle({ "fontSize": "72px" });

        rectangle.setInteractive();
        rectangle.on('pointerdown', ()=>{
            this.scene.scene.start('GameScene', {levelNum:this.levelNum});
        })
    }
}