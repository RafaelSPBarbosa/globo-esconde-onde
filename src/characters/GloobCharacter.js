
export default class GloobCharacter {
    /**
     * @param {Phaser.Scene} scene
     * @param {string} prop
     * @param {string} charprop
     * @param {string} charbody
     * @param {Array} animations
     *  = {iddle, victory}
     * @param {Scale} scaleprop
     * @param {Scale} scalechar
     * @param {Position} charoffset
     *  = {x, y}
     * @param {Event} onComplete
     * @param {Event} onClick
     */
    constructor(data = { scene, prop, charprop, charbody, animations, scaleprop, scalechar, charoffset, onClick, onComplete }) {
        /** @type {Phaser.Scene} */
        this.scene = data.scene

        this.transform = this.scene.add.container()

        this.animations = {
            iddle: data.animations.iddle,
            victory: data.animations.victory
        }

        this.charoffset = {
            x: data.charoffset.x,
            y: data.charoffset.y
        }

        this.prop = this.scene.add.image(0, 0, data.prop)
        this.charprop = this.scene.add.image(0, 0, data.charprop)
        this.charbody = this.scene.add.sprite(0, 0, data.charbody)

        this.prop.alpha = 0
        this.charbody.alpha = 0

        if (!data.scaleprop.x || !data.scaleprop.y) this.prop.scale = data.scaleprop
        else this.prop.setScale(data.scaleprop.x, data.scaleprop.y)

        if (!data.scaleprop.x || !data.scaleprop.y) this.charprop.scale = data.scaleprop
        else this.charprop.setScale(data.scaleprop.x, data.scaleprop.y)

        if (!data.scalechar.x || !data.scalechar.y) this.charbody.scale = data.scalechar
        else this.charbody.setScale(data.scalechar.x, data.scalechar.y)

        this.onComplete = data.onComplete

        this.transform.add(this.prop)
        this.transform.add(this.charprop)
        this.transform.add(this.charbody)

        this.onClick = data.onClick

        this.charbody.x += this.charoffset.x
        this.charbody.y += this.charoffset.y

        this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.awake, this)
        this.endlevel = false
    }

    awake() {
        this.charprop.setInteractive({ pixelPerfect: true }).on('pointerdown', () => {
            if (this.onClick) this.onClick()
            this.reviewCharacter()
            this.charprop.setInteractive().removeAllListeners()
        })
    }

    reviewCharacter() {
        var found = this.scene.sound.add('score')
        found.play()
        console.log('found audio')
        this.scene.add.tween({
            targets: this.charprop,
            alpha: 0,
            duration: 500
        })

        this.scene.add.tween({
            targets: this.charbody,
            alpha: 1,
            duration: 1000,
            onComplete: () => {
                this.charbody.play(this.animations.victory)

                //#region Sim, isso é uma gambiarra
                if (this.animations.victory == 'green-ending') {
                    this.transform.setScale(1.8)
                    switch (this.scene.leveldata.thisLevel) {
                        case 1:
                            this.charbody.y = this.charbody.y - 5
                            this.charbody.x = this.charbody.x - 5
                            break
                        case 2:
                            this.charbody.y = this.charbody.y - 17
                            this.charbody.x = this.charbody.x - 36
                            break
                        case 3:
                            this.charbody.y = this.charbody.y + 25
                            break
                        case 4:
                            this.charbody.y = this.charbody.y - 12
                            this.charbody.x = this.charbody.x - 35
                            break
                        case 5:
                            this.charbody.y = this.charbody.y - 15
                            break
                        case 6:
                            this.charbody.y = this.charbody.y - 34
                            break
                        case 7:
                            break
                        case 8:
                            this.charbody.y = this.charbody.y - 5
                            break
                        case 9:
                            // this.charbody.y = this.charbody.y + 10
                            break
                        case 10:
                            this.charbody.y = this.charbody.y + 10
                            // this.charbody.x = this.charbody.x - 5
                            break
                        case 11:
                            this.charbody.x = this.charbody.x - 30
                            this.charbody.y = this.charbody.y - 30
                            break
                        case 12:
                            this.charbody.y = this.charbody.y - 16
                            break
                    }
                }
                //#endregion
                this.scene.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        if (!this.endlevel) {
                            //#region Sim, isso também é uma gambiarra
                            if (this.animations.iddle == 'green-opening') {
                                this.transform.setScale(1)

                                switch (this.scene.leveldata.thisLevel) {
                                    case 1:
                                        break
                                    case 2:
                                        this.charbody.y = this.charbody.y + 17
                                        this.charbody.x = this.charbody.x + 36
                                        break
                                    case 3:
                                        this.charbody.y = this.charbody.y - 25
                                        break
                                    case 4:
                                        this.charbody.y = this.charbody.y + 12
                                        this.charbody.x = this.charbody.x + 35
                                        break
                                    case 5:
                                        this.charbody.y = this.charbody.y + 10
                                        break
                                    case 6:
                                        this.charbody.y = this.charbody.y + 34
                                        break
                                    case 7:
                                        break
                                    case 8:
                                        this.charbody.y = this.charbody.y + 5
                                        break
                                    case 9:
                                        // this.charbody.y = this.charbody.y - 10
                                        break
                                    case 10:
                                        this.charbody.y = this.charbody.y - 5
                                        // this.charbody.x = this.charbody.x + 5
                                        break
                                    case 11:
                                        this.charbody.x = this.charbody.x + 30
                                        this.charbody.y = this.charbody.y + 30
                                        break
                                    case 12:
                                        this.charbody.y = this.charbody.y + 16
                                        break
                                }
                            }
                            //#endregion
                            this.charbody.play(this.animations.iddle)
                        }
                    }
                })

                if (this.onComplete) this.onComplete()
            }
        })
    }

    PlayVictory() {
        this.endlevel = true
        if (this.animations.victory == 'green-ending') {
            this.transform.setScale(1.8)
            // this.charbody.y = this.charbody.y + 25
            // this.charbody.x = this.charbody.x - 20
        }
        this.charbody.play(this.animations.victory)
    }
}
