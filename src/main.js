import GameScene from './scenes/GameScene.js';
import MenuScene from './scenes/MenuSceneTest.js';
import LevelSelection from './scenes/LevelSelectionScene.js';

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
        scene: [Boot, MenuScene, LevelSelection, GameScene],
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

        //this.loadFile()
        //#region Audio
        //this.loadAudio()
        //#endregion
        //#region Sprites
        this.loadProps()
        //this.loadUi()
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
        this.load.spritesheet('conffeti-effect', 'assets/spritesheets/effects/conffeti_effect_ss.png', {
            frameWidth: 640,
            frameHeight: 316
        })
        
        this.load.spritesheet('explosion-effect', 'assets/spritesheets/effects/explosion_vfx_ss.png', {
            frameWidth: 256,
            frameHeight: 256
        })
        
    }

    loadBackgrounds() {
        for (var i = 1; i <= this.levelsquantity; i++) {
            this.load.image('bg' + i + 'p', 'assets/sprites/bgs/Levels-semGigas/' + i + '_SemGigas.png')
        }

        for (var i = 1; i <= this.levelsquantity; i++) {
            this.load.image('bg' + i, 'assets/sprites/bgs/Levels-comGigas/' + i + '_ComGigas.png')
        }

        // for (var i = 1; i <= this.levelsquantity; i++) {
        //     this.load.image('fase' + i, 'assets/sprites/bgs/fase' + i + '.png')
        // }        


        this.load.image('levelSelection-bg', 'assets/sprites/bgs/levelBG.png')
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
        //this.load.image('1-sp', 'assets/sprites/char-portraits/1-small-portrait.png')
        //this.load.image('2-sp', 'assets/sprites/char-portraits/2-small-portrait.png')
        //this.load.image('3-sp', 'assets/sprites/char-portraits/3-small-portrait.png')
        //this.load.image('4-sp', 'assets/sprites/char-portraits/4-small-portrait.png')
        //this.load.image('5-sp', 'assets/sprites/char-portraits/5-small-portrait.png')

        this.load.image('portrait-panel', 'assets/sprites/char-portraits/portrait_panel.png')
    }
    loadSilhouettes() {
        this.load.image('s-1', 'assets/sprites/silhouettes/s-1.png')
        this.load.image('s-2', 'assets/sprites/silhouettes/s-2.png')
        this.load.image('s-3', 'assets/sprites/silhouettes/s-3.png')
        this.load.image('s-4', 'assets/sprites/silhouettes/s-4.png')
        this.load.image('s-5', 'assets/sprites/silhouettes/s-5.png')
    }
    loadProps() {
        this.load.image('c-cat', 'assets/sprites/newProps/c_cat.png')
        this.load.image('bloco_amarelo', 'assets/sprites/newProps/bloco_amarelo.png')
        this.load.image('centopeia_verde', 'assets/sprites/newProps/centopeia_verde.png')
        this.load.image('gato_verde', 'assets/sprites/newProps/gato_verde.png')
        this.load.image('leao_vermelho', 'assets/sprites/newProps/leao_vermelho.png')
        this.load.image('livro_roxo', 'assets/sprites/newProps/livro_roxo.png')
        this.load.image('livros_vermelho', 'assets/sprites/newProps/livros_vermelho.png')
        this.load.image('objetos_azul', 'assets/sprites/newProps/objetos_azul.png')
        this.load.image('pato_azul', 'assets/sprites/newProps/pato_azul.png')
        this.load.image('puff_balde_amarelo', 'assets/sprites/newProps/puff_balde_amarelo.png')
        this.load.image('vaso_roxo', 'assets/sprites/newProps/vaso_roxo.png')
        this.load.image('urso_pelucia1', 'assets/sprites/newProps/urso_pelucia1.png')
        this.load.image('peças_quebra_cabeca', 'assets/sprites/newProps/peças_quebra_cabeca.png')
        this.load.image('unicornio_pelucia', 'assets/sprites/newProps/unicornio_pelucia.png')
        this.load.image('puff_amarelo', 'assets/sprites/newProps/puff_amarelo.png')
        this.load.image('puff_laranja', 'assets/sprites/newProps/puff_laranja.png')
        this.load.image('sacola_feira', 'assets/sprites/newProps/sacola_feira.png')
        this.load.image('rolo_macarrao', 'assets/sprites/newProps/rolo_macarrao.png')
        this.load.image('chaleira', 'assets/sprites/newProps/chaleira.png')
        this.load.image('cesta_frutas', 'assets/sprites/newProps/cesta_frutas.png')
        this.load.image('cadeira_bebe', 'assets/sprites/newProps/cadeira_bebe.png')
        this.load.image('batedeira_eletrica', 'assets/sprites/newProps/batedeira_eletrica.png')
        this.load.image('luva', 'assets/sprites/newProps/luva.png')
        this.load.image('cadeira_mesa', 'assets/sprites/newProps/cadeira_mesa.png')
        this.load.image('porta_balcao', 'assets/sprites/newProps/porta_balcao.png')
        this.load.image('mesa', 'assets/sprites/newProps/mesa.png')
        this.load.image('escorredor_pratos', 'assets/sprites/newProps/escorredor_pratos.png')
        this.load.image('borrifador', 'assets/sprites/newProps/borrifador.png')
        this.load.image('livro', 'assets/sprites/newProps/livro.png')
        this.load.image('estojo', 'assets/sprites/newProps/estojo.png')
        this.load.image('estante_2', 'assets/sprites/newProps/estante_2.png')
        this.load.image('caderninho', 'assets/sprites/newProps/caderninho.png')
        this.load.image('brinquedo_argola', 'assets/sprites/newProps/brinquedo_argola.png')
        this.load.image('bola_futebol', 'assets/sprites/newProps/bola_futebol.png')
        this.load.image('braco_boneca', 'assets/sprites/newProps/braco_boneca.png')
        this.load.image('cavalo_pau', 'assets/sprites/newProps/cavalo_pau.png')
        this.load.image('cama_2', 'assets/sprites/newProps/cama_2.png')
        this.load.image('bola_volei', 'assets/sprites/newProps/bola_volei.png')
        this.load.image('urso_pelucia', 'assets/sprites/newProps/urso_pelucia.png')
        this.load.image('bloco_verde', 'assets/sprites/newProps/bloco_verde.png')
        
    }

    loadAudio() {
        this.load.audio('hit', 'assets/sounds/hit.ogg')
        this.load.audio('end', 'assets/sounds/end.ogg')
        this.load.audio('score', 'assets/sounds/score.ogg')
    }
    //#endregion Asset Load
    //#region I/O
    //saveFile() {
    //    this.game.save = new SaveData()
    //    localStorage.setItem('saveFile', JSON.stringify(this.game.save))
    //}
    //loadFile() {
    //    this.game.save = JSON.parse(localStorage.getItem('saveFile'))
    //    if (this.game.save == null || this.game.save.unlockedLevels == null || this.game.save.lastPlayedLevel == null) {
    //        this.saveFile()
    //    }
    //}
    //#endregion I/O
    //#region Create Animation~
    createAnimations() {
        
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
    }
    //#endregion Create Animation

    loadSpineAnimations(){
        this.load.spine(
            "Glup_Anim",
            "assets/spineAnimations/Glup_Anim/Glup.json",
            "assets/spineAnimations/Glup_Anim/Glup.atlas"
        );

        this.load.spine(
            "Grrr_Anim",
            "assets/spineAnimations/Grrr_Anim/Grrr.json",
            "assets/spineAnimations/Grrr_Anim/Grrr.atlas"
        );

        this.load.spine(
            "Han_Anim",
            "assets/spineAnimations/Han_Anim/han.json",
            "assets/spineAnimations/Han_Anim/han.atlas"
        );

        this.load.spine(
            "Iei_Anim",
            "assets/spineAnimations/Iei_Anim/Iei.json",
            "assets/spineAnimations/Iei_Anim/Iei.atlas"
        );

        this.load.spine(
            "Ihuu_Anim",
            "assets/spineAnimations/Ihuu_Anim/ihuu.json",
            "assets/spineAnimations/Ihuu_Anim/ihuu.atlas"
        );
    }

    create() {
        this.createAnimations();

        this.scene.start("MenuScene");
        //this.scene.start("LevelSelection");
    }

   
}
