export default class FadeScreen {
    /**
     * @param {Phaser.Scene} scene
     * @param {number} startopacity
     */
    constructor(data = { scene, startopacity }) {
        /** @type {Phaser.Scene} */
        this.scene = data.scene

        /** @type {Phaser.Game} */
        this.game = this.scene.game

        var startopacity = data.startopacity

        /** @type {Phaser.GameObjects.Container} */

        this.gameobject = this.scene.add.container()

        this.backg = this.scene.add.rectangle(0, 0, this.game.canvas.width * 2, this.game.canvas.height * 2, 0x000000).setInteractive()
        this.backg.alpha = startopacity

        this.gameobject.add(this.backg)
    }

    /**
     * @param {number} fromalpha
     * @param {number} toalpha
     * @param {number} duration
     * @param {function} onComplete
     */
    Fade(info = { fromalpha, toalpha, duration, delay, onComplete }) {
        this.backg.alpha = info.fromalpha

        /** @type {Phaser.Types.Tweens.TweenBuilderConfig} */
        var fade_bg = {
            targets: this.backg,
            alpha: info.toalpha,
            duration: info.duration,
            delay: info.delay,
            onComplete: () => {
                if (info.onComplete) info.onComplete()
            }
        }

        this.scene.add.tween(fade_bg)
    }

    DestroyThis() {
        this.gameobject.destroy(true)
    }
}
