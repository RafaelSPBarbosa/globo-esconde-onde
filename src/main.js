import GameScene from './scenes/GameScene.js';
import MenuScene from './scenes/MenuScene.js';

// window.addEventListener('load', () => {
//     // setTimeout to 1 second will prevent a bug if you using a splash screen
//     window.setTimeout(() => {
//       // fix the height to 720
//       const DEFAULT_HEIGHT = 1080
//       // adjust the width dynamically based on the device screen ratio
//       const DEFAULT_WIDTH = (window.innerWidth / window.innerHeight) * DEFAULT_HEIGHT
  
//       const config = {
//         // width: 1920,
//         // height: 1080,
//         type: Phaser.AUTO,
//         premultipliedAlpha: false,
//         backgroundColor: "transparent",
//         transparent: true,
//         width: DEFAULT_WIDTH,
//         height: DEFAULT_HEIGHT,
//         scale: {
//           mode: Phaser.Scale.ENVELOP,
//           autoCenter: Phaser.Scale.CENTER_BOTH,
          
//         },
//         scene: [Boot, GameScene],
//       }
//       new Phaser.Game(config)
//     }, 1000)
// })

var game;

window.addEventListener("load", function () {
    game = new Phaser.Game({
        type: Phaser.AUTO,
        premultipliedAlpha: false,
        backgroundColor: "transparent",
        transparent: true,
        
        //width: 2048,
        //height: 1536,
        width: 2560,
        height: 1288,
        
        scale: {
            //mode: Phaser.Scale.ScaleModes.ENVELOP,
            //autoCenter: Phaser.Scale.Center.CENTER_BOTH,
          
            parent: "gameContainer",
            mode: Phaser.Scale.ENVELOP,
            //mode: Phaser.Scale.SMOOTH,
            //mode: Phaser.Scale.RESIZE,
            //mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        fps: {
            target: 60,
        },    
        scene: [Boot, MenuScene, GameScene],
    });

    //game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
    constructor() {
        super({
            key: "Boot",
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

    preload() {

        this.levelsquantity = 12;

        this.loadFile()
        //#region Audio
        this.loadAudio()
        //#endregion
        //#region Sprites
        this.loadProps()
        this.loadUi()
        //this.loadSilhouettes()
        this.loadPortraits()
        this.loadCharactersSprites()
        this.loadBackgrounds()
        //#endregion
        //#region SpriteSheets
        this.loadSpriteSheets()

        this.loadSpineAnimations();

        this.load.on('complete', function (value) {
            console.log("Assets carregados");
        })
    }

    //#region Asset Load
    loadSpriteSheets() {
        // #region 01 - Purple Character
        this.load.spritesheet('purple-opening', 'assets/spritesheets/presentation/1-presentation_SS.png', {
            frameWidth: 250,
            frameHeight: 250
        })
        this.load.spritesheet('purple-review', 'assets/spritesheets/review/1-review_SS.png', {
            frameWidth: 250,
            frameHeight: 250
        })
        this.load.spritesheet('purple-ending', 'assets/spritesheets/endgame/1-victory_SS.png', {
            frameWidth: 250,
            frameHeight: 250
        })
        // #endregion
        // #region 02 - Red Character
        this.load.spritesheet('red-opening', 'assets/spritesheets/presentation/2-presentation_SS.png', {
            frameWidth: 250,
            frameHeight: 250
        })
        this.load.spritesheet('red-review', 'assets/spritesheets/review/2-review_SS.png', {
            frameWidth: 250,
            frameHeight: 250
        })
        this.load.spritesheet('red-ending', 'assets/spritesheets/endgame/2-victory_SS.png', {
            frameWidth: 250,
            frameHeight: 250
        })
        // #endregion
        // #region 03 - Yellow Character
        this.load.spritesheet('yellow-opening', 'assets/spritesheets/presentation/3-presentation_SS.png', {
            frameWidth: 250,
            frameHeight: 311
        })
        this.load.spritesheet('yellow-review', 'assets/spritesheets/review/3-review_SS.png', {
            frameWidth: 250,
            frameHeight: 311
        })
        this.load.spritesheet('yellow-ending', 'assets/spritesheets/endgame/3-victory_SS.png', {
            frameWidth: 320,
            frameHeight: 398
        })
        // #endregion
        // #region 04 - Blue Character
        this.load.spritesheet('blue-opening', 'assets/spritesheets/presentation/4-presentation_SS.png', {
            frameWidth: 250,
            frameHeight: 222
        })
        this.load.spritesheet('blue-review', 'assets/spritesheets/review/4-review_SS.png', {
            frameWidth: 250,
            frameHeight: 222
        })
        this.load.spritesheet('blue-ending', 'assets/spritesheets/endgame/4-victory_SS.png', {
            frameWidth: 210,
            frameHeight: 262
        })
        // #endregion
        // #region 05 - Green Character
        this.load.spritesheet('green-opening', 'assets/spritesheets/presentation/5-presentation_SS.png', {
            frameWidth: 280,
            frameHeight: 328
        })
        this.load.spritesheet('green-review', 'assets/spritesheets/review/5-review_SS.png', {
            frameWidth: 270,
            frameHeight: 235
        })
        this.load.spritesheet('green-ending', 'assets/spritesheets/endgame/5-victory_SSn.png', {
            frameWidth: 300,
            frameHeight: 300
        })
        // #endregion
        // #region 06 - Effects
        this.load.spritesheet('conffeti-effect', 'assets/spritesheets/effects/conffeti_effect_ss.png', {
            frameWidth: 640,
            frameHeight: 316
        })
        // this.load.spritesheet('transform-bright-effect', 'assets/spritesheets/effects/transform_bright_effect_ss.png', {
        //     frameWidth: 512,
        //     frameHeight: 512
        // })
        // this.load.spritesheet('glow-effect', 'assets/spritesheets/effects/glow_ss.png', {
        //     frameWidth: 512,
        //     frameHeight: 512
        // })
        this.load.spritesheet('explosion-effect', 'assets/spritesheets/effects/explosion_vfx_ss.png', {
            frameWidth: 256,
            frameHeight: 256
        })
        // #endregion

        //#region Eyes

        this.load.spritesheet('eye1a', 'assets/spritesheets/eyes/eye1-ss.png', {
            frameWidth: 250,
            frameHeight: 250
        })

        this.load.spritesheet('eye2a', 'assets/spritesheets/eyes/eye2-ss.png', {
            frameWidth: 250,
            frameHeight: 250
        })

        this.load.spritesheet('eye3a', 'assets/spritesheets/eyes/eye3-ss.png', {
            frameWidth: 250,
            frameHeight: 250
        })

        this.load.spritesheet('eye4a', 'assets/spritesheets/eyes/eye4-ss.png', {
            frameWidth: 250,
            frameHeight: 250
        })

        this.load.spritesheet('eye5a', 'assets/spritesheets/eyes/eye5-ss.png', {
            frameWidth: 250,
            frameHeight: 250
        })

        //#endregion
    }
    loadBackgrounds() {
        for (var i = 1; i <= this.levelsquantity; i++) {
            this.load.image('bg' + i + 'p', 'assets/sprites/bgs/pre/l' + i + '-.png')
        }

        for (var i = 1; i <= this.levelsquantity; i++) {
            this.load.image('bg' + i, 'assets/sprites/bgs/lvl' + i + '-bg.png')
        }

        for (var i = 1; i <= this.levelsquantity; i++) {
            this.load.image('fase' + i, 'assets/sprites/bgs/fase' + i + '.png')
        }        

        this.load.image('menu-bg', 'assets/sprites/bgs/menu_bg.png')
        this.load.image('first-screen', 'assets/sprites/bgs/first_screen.png')
    }
    loadCharactersSprites() {
        for (var i = 1; i <= this.levelsquantity; i++) {
            this.load.image(i + '-1', 'assets/sprites/chars/' + i + '-1.png')
            this.load.image(i + '-2', 'assets/sprites/chars/' + i + '-2.png')
            this.load.image(i + '-3', 'assets/sprites/chars/' + i + '-3.png')
            this.load.image(i + '-4', 'assets/sprites/chars/' + i + '-4.png')
            this.load.image(i + '-5', 'assets/sprites/chars/' + i + '-5.png')
        }
        this.load.image('eye-1', 'assets/sprites/eyes/eye-1.png')
        this.load.image('eye-2', 'assets/sprites/eyes/eye-2.png')
        this.load.image('eye-3', 'assets/sprites/eyes/eye-3.png')
        this.load.image('eye-4', 'assets/sprites/eyes/eye-4.png')
        this.load.image('eye-5', 'assets/sprites/eyes/eye-5.png')
    }
    loadUi() {
        this.load.image('housebtn', 'assets/sprites/ui/housebtn.png')
        this.load.image('sliderbg', 'assets/sprites/ui/sliderbg.png')
        this.load.image('play-btn', 'assets/sprites/ui/play_btn.png')
        this.load.image('victory-popup', 'assets/sprites/ui/victory_popup.png')
        this.load.image('1-i', 'assets/sprites/ui/1-i.png')
        this.load.image('2-i', 'assets/sprites/ui/2-i.png')
        this.load.image('3-i', 'assets/sprites/ui/3-i.png')
        this.load.image('4-i', 'assets/sprites/ui/4-i.png')
        // this.load.image('5-i', 'assets/sprites/ui/5-i.png')
        // this.load.image('6-i', 'assets/sprites/ui/6-i.png')
        // this.load.image('7-i', 'assets/sprites/ui/7-i.png')
        // this.load.image('8-i', 'assets/sprites/ui/8-i.png')
        // this.load.image('9-i', 'assets/sprites/ui/9-i.png')
        this.load.image('1-c', 'assets/sprites/ui/1-c.png')
        this.load.image('2-c', 'assets/sprites/ui/2-c.png')
        this.load.image('3-c', 'assets/sprites/ui/3-c.png')
        this.load.image('4-c', 'assets/sprites/ui/4-c.png')
        this.load.image('l-g-arrow', 'assets/sprites/ui/l_g_arrow.png')
        this.load.image('r-g-arrow', 'assets/sprites/ui/r_g_arrow.png')
        this.load.image('replay-btn', 'assets/sprites/ui/replay_btn.png')
        this.load.image('win-popup', 'assets/sprites/ui/win_popup.png')
        this.load.image('y-lock', 'assets/sprites/ui/y_lock.png')
        this.load.image('r-lock', 'assets/sprites/ui/r_lock.png')
        this.load.image('g-lock', 'assets/sprites/ui/g_lock.png')
        this.load.image('find', 'assets/sprites/ui/find.png')
        this.load.image('hide-play', 'assets/sprites/ui/hide-play.png')
        this.load.image('back-to-menu', 'assets/sprites/ui/setinha.png')
    }
    loadPortraits() {
        this.load.image('1-portrait', 'assets/sprites/char-portraits/1.png')
        this.load.image('2-portrait', 'assets/sprites/char-portraits/2.png')
        this.load.image('3-portrait', 'assets/sprites/char-portraits/3.png')
        this.load.image('4-portrait', 'assets/sprites/char-portraits/4.png')
        this.load.image('5-portrait', 'assets/sprites/char-portraits/5.png')
        this.load.image('1-sp', 'assets/sprites/char-portraits/1-small-portrait.png')
        this.load.image('2-sp', 'assets/sprites/char-portraits/2-small-portrait.png')
        this.load.image('3-sp', 'assets/sprites/char-portraits/3-small-portrait.png')
        this.load.image('4-sp', 'assets/sprites/char-portraits/4-small-portrait.png')
        this.load.image('5-sp', 'assets/sprites/char-portraits/5-small-portrait.png')
    }
    loadSilhouettes() {
        this.load.image('s-1', 'assets/sprites/silhouettes/s-1.png')
        this.load.image('s-2', 'assets/sprites/silhouettes/s-2.png')
        this.load.image('s-3', 'assets/sprites/silhouettes/s-3.png')
        this.load.image('s-4', 'assets/sprites/silhouettes/s-4.png')
        this.load.image('s-5', 'assets/sprites/silhouettes/s-5.png')
    }
    loadProps() {
        this.load.image('v-ball', 'assets/sprites/props/v_ball.png')
        this.load.image('t-bear', 'assets/sprites/props/t_bear.png')
        this.load.image('d-toy', 'assets/sprites/props/d_toy.png')
        this.load.image('b-d-toy', 'assets/sprites/props/b_d_toy.png')
        this.load.image('c-cat', 'assets/sprites/props/c_cat.png')
        this.load.image('w-horse', 'assets/sprites/props/w_horse.png')
        this.load.image('doll', 'assets/sprites/props/doll.png')
        this.load.image('doll-a', 'assets/sprites/props/doll_a.png')
        this.load.image('c-cat', 'assets/sprites/props/c_dice.png')
        this.load.image('b-lamp', 'assets/sprites/props/b_lamp.png')
        this.load.image('f-ball', 'assets/sprites/props/f_ball.png')
        this.load.image('b-book', 'assets/sprites/props/b_book.png')
        this.load.image('n-book', 'assets/sprites/props/notebook.png')
        this.load.image('p-case', 'assets/sprites/props/p_case.png')
        this.load.image('y-cube', 'assets/sprites/props/y_cube.png')
        this.load.image('c-sink', 'assets/sprites/props/c_sink.png')
        this.load.image('d-table', 'assets/sprites/props/d_table.png')
        this.load.image('sprinkler', 'assets/sprites/props/sprinkler.png')
        this.load.image('dish-d', 'assets/sprites/props/dish_d.png')
        this.load.image('c-door', 'assets/sprites/props/c_door.png')
        this.load.image('glove', 'assets/sprites/props/glove.png')
        this.load.image('mixer', 'assets/sprites/props/mixer.png')
        this.load.image('i-mixer', 'assets/sprites/props/i_mixer.png')
        this.load.image('b-chair', 'assets/sprites/props/b_chair.png')
        this.load.image('bag', 'assets/sprites/props/bag.png')
        this.load.image('dish', 'assets/sprites/props/dish.png')
        this.load.image('fruits', 'assets/sprites/props/fruits.png')
        this.load.image('glove-2', 'assets/sprites/props/glove_2.png')
        this.load.image('kettle', 'assets/sprites/props/kettle.png')
        this.load.image('rolling-pin', 'assets/sprites/props/rolling_pin.png')
        this.load.image('orange-puff', 'assets/sprites/props/orange_puff.png')
        this.load.image('y-puff', 'assets/sprites/props/y_puff.png')
        this.load.image('rubick', 'assets/sprites/props/rubick.png')
        this.load.image('t-unicorn', 'assets/sprites/props/t_unicorn.png')
        this.load.image('chair', 'assets/sprites/props/chair.png')
        this.load.image('turtle', 'assets/sprites/props/turtle.png')
        this.load.image('cat', 'assets/sprites/props/cat.png')
        this.load.image('glob', 'assets/sprites/props/glob.png')
        this.load.image('livro-azul', 'assets/sprites/props/livro_azul.png')
        
    }
    loadAudio() {
        this.load.audio('hit', 'assets/sounds/hit.ogg')
        this.load.audio('end', 'assets/sounds/end.ogg')
        this.load.audio('score', 'assets/sounds/score.ogg')
    }
    //#endregion Asset Load
    //#region I/O
    saveFile() {
        this.game.save = new SaveData()
        localStorage.setItem('saveFile', JSON.stringify(this.game.save))
    }
    loadFile() {
        this.game.save = JSON.parse(localStorage.getItem('saveFile'))
        if (this.game.save == null || this.game.save.unlockedLevels == null || this.game.save.lastPlayedLevel == null) {
            this.saveFile()
        }
    }
    //#endregion I/O
    //#region Create Animation~
    createAnimations() {
        //#region 01 - Purple Character
        this.anims.create({
            key: 'purple-opening',
            frames: this.anims.generateFrameNumbers('purple-opening'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'purple-review',
            frames: this.anims.generateFrameNumbers('purple-review'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'purple-ending',
            frames: this.anims.generateFrameNumbers('purple-ending'),
            frameRate: 24,
            repeat: -1
        })
        //#endregion
        //#region 02 - Red Character
        this.anims.create({
            key: 'red-opening',
            frames: this.anims.generateFrameNumbers('red-opening'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'red-review',
            frames: this.anims.generateFrameNumbers('red-review'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'red-ending',
            frames: this.anims.generateFrameNumbers('red-ending'),
            frameRate: 30,
            repeat: -1
        })
        //#endregion
        //#region 03 - Yellow Character
        this.anims.create({
            key: 'yellow-opening',
            frames: this.anims.generateFrameNumbers('yellow-opening'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'yellow-review',
            frames: this.anims.generateFrameNumbers('yellow-review'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'yellow-ending',
            frames: this.anims.generateFrameNumbers('yellow-ending'),
            frameRate: 30,
            repeat: -1
        })
        //#endregion
        //#region 04 - Blue Character
        this.anims.create({
            key: 'blue-opening',
            frames: this.anims.generateFrameNumbers('blue-opening'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'blue-review',
            frames: this.anims.generateFrameNumbers('blue-review'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'blue-ending',
            frames: this.anims.generateFrameNumbers('blue-ending'),
            frameRate: 30,
            repeat: -1
        })
        //#endregion
        //#region 05 - Green Character
        this.anims.create({
            key: 'green-opening',
            frames: this.anims.generateFrameNumbers('green-opening'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'green-review',
            frames: this.anims.generateFrameNumbers('green-review'),
            frameRate: 24,
            repeat: -1
        })
        this.anims.create({
            key: 'green-ending',
            frames: this.anims.generateFrameNumbers('green-ending'),
            frameRate: 30,
            repeat: -1
        })
        //#endregion
        //#region 06 - Effects
        this.anims.create({
            key: 'conffeti-effect',
            frames: this.anims.generateFrameNumbers('conffeti-effect'),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: 'explosion-effect',
            frames: this.anims.generateFrameNumbers('explosion-effect'),
            frameRate: 50,
            repeat: 0
        })
        //#endregion

        //#region Eye
        this.anims.create({
            key: 'eye1a',
            frames: this.anims.generateFrameNumbers('eye1a'),
            frameRate: 30,
            repeat: -1
        })

        this.anims.create({
            key: 'eye2a',
            frames: this.anims.generateFrameNumbers('eye2a'),
            frameRate: 30,
            repeat: -1
        })

        this.anims.create({
            key: 'eye3a',
            frames: this.anims.generateFrameNumbers('eye3a'),
            frameRate: 30,
            repeat: -1
        })

        this.anims.create({
            key: 'eye4a',
            frames: this.anims.generateFrameNumbers('eye4a'),
            frameRate: 30,
            repeat: -1
        })

        this.anims.create({
            key: 'eye5a',
            frames: this.anims.generateFrameNumbers('eye5a'),
            frameRate: 30,
            repeat: -1
        })
        //#endregion
    }
    //#endregion Create Animation

    loadSpineAnimations(){
        this.load.spine(
            "Glup_Anim",
            "assets/spineAnimations/Glup_Anim/Glup.json",
            "assets/spineAnimations/Glup_Anim/Glup.atlas"
        );

        this.load.spine(
            "Grr_Anim",
            "assets/spineAnimations/Grrr_Anim/Grrr.json",
            "assets/spineAnimations/Grrr_Anim/Grrr.atlas"
        );

        this.load.spine(
            "Han_Anim",
            "assets/spineAnimations/Han_Anim/Han.json",
            "assets/spineAnimations/Han_Anim/Han.atlas"
        );

        this.load.spine(
            "Iei_Anim",
            "assets/spineAnimations/Iei_Anim/Iei.json",
            "assets/spineAnimations/Iei_Anim/Iei.atlas"
        );

        this.load.spine(
            "Ihuu_Anim",
            "assets/spineAnimations/Ihuu_Anim/Ihuu.json",
            "assets/spineAnimations/Ihuu_Anim/Ihuu.atlas"
        );
    }

    create() {
        this.createAnimations();

        this.scene.start("MenuScene");
    }

   
}
