export default class LevelSelection extends Phaser.Scene {
    constructor() {
        super({
            key: "LevelSelection"
        });
    }

    init() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    }

    create() {
        this.add.image(this.screenCenterX, -250, "levelSelection-bg").setScale(2.5);

        var zone = this.add.zone(this.screenCenterX, this.screenCenterY, 320, 256).setOrigin(0).setInteractive();

        zone.on('pointermove', function (pointer) {

            if (pointer.isDown) {
                text.y += (pointer.velocity.y / 10);

                text.y = Phaser.Math.Clamp(text.y, -400, 300);
            }

        });

    }
}