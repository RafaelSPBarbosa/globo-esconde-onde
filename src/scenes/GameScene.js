import StartAnimation from "../startAnimation.js";
import Character from "../characters/character.js";
import FadeScreen from "../characters/FadeScreen.js";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene",
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

    levelCharactersData = [
        [//1            
            { x: 861, y: 1062, scale: 2, offsetX: 50, offsetY: -50 },
            { x: 1247, y: 699, scale: 2, offsetX: 0, offsetY: 40 },
            { x: 872, y: 661, scale: 2, offsetX: 0, offsetY: -40 },
            { x: 1496, y: 999, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 771, y: 833, scale: 2, offsetX: 30, offsetY: -30 }
        ],
        [//2
            { x: 631, y: 594, scale: 2, offsetX: 60, offsetY: -50 },
            { x: 1234, y: 700, scale: 2, offsetX: 30, offsetY: -90 },
            { x: 1625, y: 1008, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 1872, y: 486, scale: 2, offsetX: 0, offsetY: -190 },
            { x: 883, y: 859, scale: 2, offsetX: 80, offsetY: 0 }
        ],
        [//3
            { x: 881, y: 680, scale: 2, offsetX: 0, offsetY: -50 },
            { x: 1899, y: 956, scale: 2, offsetX: 0, offsetY: -60 },
            { x: 1231, y: 645, scale: 2, offsetX: 30, offsetY: -20 },
            { x: 838, y: 395, scale: 2, offsetX: 0, offsetY: -15 },
            { x: 1436, y: 1051, scale: 2, offsetX: 0, offsetY: -100 }
        ],
        [//4
            { x: 546, y: 583, scale: 2, offsetX: 20, offsetY: -70 },
            { x: 1571, y: 709, scale: 2, offsetX: 0, offsetY: 100 },
            { x: 1279, y: 669, scale: 2, offsetX: 30, offsetY: 0 },
            { x: 1894, y: 255, scale: 2, offsetX: 20, offsetY: 335 },
            { x: 1253, y: 986, scale: 2, offsetX: 90, offsetY: 100 }
        ],
        [//5
            { x: 1571, y: 552, scale: 2, offsetX: 0, offsetY: -25 },
            { x: 793, y: 720, scale: 2, offsetX: 0, offsetY: -40 },
            { x: 1304, y: 1051, scale: 2, offsetX: 60, offsetY: 0 },
            { x: 922, y: 931, scale: 2, offsetX: 25, offsetY: -30 },
            { x: 1948, y: 1028, scale: 2, offsetX: 0, offsetY: 20 }
        ],
        [//6
            { x: 895, y: 590, scale: 2, offsetX: 10, offsetY: -90 },
            { x: 1724, y: 1111, scale: 2, offsetX: -120, offsetY: -60 },
            { x: 932, y: 846, scale: 2, offsetX: 25, offsetY: 30 },
            { x: 741, y: 754, scale: 2, offsetX: 30, offsetY: -70 },
            { x: 1774, y: 808, scale: 2, offsetX: 0, offsetY: 50 }
        ],
        [//7
            { x: 2009, y: 583, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 1958, y: 950, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 734, y: 1045, scale: 2, offsetX: -20, offsetY: -80 },
            { x: 786, y: 272, scale: 2, offsetX: 20, offsetY: 65 },
            { x: 1640, y: 1046, scale: 2, offsetX: 0, offsetY: -70 }
        ],
        [//8
            { x: 884, y: 368, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 1430, y: 411, scale: 2, offsetX: -30, offsetY: -70 },
            { x: 724, y: 625, scale: 2, offsetX: 50, offsetY: 80 },
            { x: 1630, y: 680, scale: 2, offsetX: 100, offsetY: 0 },
            { x: 1490, y: 1053, scale: 2, offsetX: 0, offsetY: 0 }
        ],
        [//9
            { x: 974, y: 771, scale: 2, offsetX: 0, offsetY: -70 },
            { x: 760, y: 956, scale: 2, offsetX: 0, offsetY: -65 },
            { x: 1913, y: 579, scale: 2, offsetX: -15, offsetY: 75 },
            { x: 791, y: 1105, scale: 2, offsetX: 0, offsetY: 30 },
            { x: 1625, y: 937, scale: 2, offsetX: -20, offsetY: -65 }
        ],
        [//10
            { x: 1948, y: 432, scale: 2, offsetX: 0, offsetY: -50 },
            { x: 730, y: 668, scale: 2, offsetX: 20, offsetY: -20 },
            { x: 1216, y: 906, scale: 2, offsetX: -40, offsetY: -15 },
            { x: 2076, y: 1088, scale: 2, offsetX: -70, offsetY: 55 },
            { x: 2062, y: 889, scale: 2, offsetX: -50, offsetY: -20 }
        ],
        [//11
            { x: 1866, y: 585, scale: 2, offsetX: 0, offsetY: -40 },
            { x: 2067, y: 1043, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 808, y: 967, scale: 2, offsetX: 0, offsetY: 0 },
            { x: 1315, y: 796, scale: 2, offsetX: 50, offsetY: 30 },
            { x: 580, y: 622, scale: 2, offsetX: 70, offsetY: 10 }
        ],
        [//12
            { x: 1316, y: 584, scale: 2.24, offsetX: 0, offsetY: -50 },
            { x: 1709, y: 727, scale: 2.13, offsetX: 0, offsetY: -20 },
            { x: 673, y: 1120, scale: 2.43, offsetX: -50, offsetY: 0 },
            { x: 605, y: 760, scale: 2.2, offsetX: 0, offsetY: -50 },
            { x: 1838, y: 405, scale: 2, offsetX: -10, offsetY: -50 }
        ]
    ]

    levelPropsData = [
        [//1
            { name: "urso_pelucia", x: 769, y: 898, scale: 2 },
            { name: "bola_volei", x: 795, y: 1059, scale: 2 },
            { name: "livro", x: 914, y: 728, scale: 2.1 }
        ],
        [//2
            { name: "braco_boneca", x: 607, y: 571, scale: 2 },
            { name: "c-cat", x: 1148, y: 1123, scale: 0.8 },
            { name: "cavalo_pau", x: 809, y: 1068, scale: 2}
        ],
        [//3
            { name: "brinquedo_argola", x: 1579, y: 1007, scale: 2 },
            { name: "bola_futebol", x: 1290, y: 1105, scale: 2 },
            { name: "urso_pelucia", x: 1475, y: 1054, scale: 2 },
            { name: "bloco_amarelo", x: 1906, y: 1023, scale: 2 },
            { name: "caderninho", x: 1231, y: 720, scale: 2 },
            { name: "livro", x: 922, y: 734, scale: 2 },
            { name: "estojo", x: 863, y: 741, scale: 2 }
        ],
        [//4
            { name: "mesa", x: 903, y: 1052, scale: 2},
            { name: "porta_balcao", x: 1428, y: 925, scale: 2 },
            { name: "borrifador", x: 1628, y: 942, scale: 2 },
            { name: "escorredor_pratos", x: 1307, y: 750, scale: 2 }
        ],
        [//5            
            { name: "luva", x: 997, y: 994, scale: 2 },
            { name: "cadeira_mesa", x: 1222, y: 1050, scale: 2 },
            { name: "batedeira_eletrica", x: 763, y: 740, scale: 2}
        ],
        [//6            
            { name: "cesta_frutas", x: 918, y: 940, scale: 2 },
            { name: "rolo_macarrao", x: 1606, y: 1162, scale: 2 },
            { name: "chaleira", x: 1735, y: 998, scale: 2 },
            { name: "cadeira_bebe", x: 1970, y: 906, scale: 2 },
            { name: "sacola_feira", x: 1815, y: 1103, scale: 2 }
        ],
        [//7            
            { name: "puff_laranja", x: 1551, y: 1096, scale: 2 }
        ],
        [//8            
            { name: "puff_amarelo", x: 1596, y: 1126, scale: 2 },
            { name: "unicornio_pelucia", x: 1866, y: 703, scale: 2.07 },
        ],
        [//9            
            { name: "unicornio_pelucia", x: 1859, y: 708, scale: 2 }
        ],
        [//10            
            { name: "urso_pelucia1", x: 2111, y: 407, scale: 2 },
            { name: "peças_quebra_cabeca", x: 1189, y: 963, scale: 2 }
        ],
        [//11            
            { name: "bloco_verde", x: 815, y: 994, scale: 2 },
            { name: "livro_roxo", x: 1872, y: 605, scale: 2 },
            { name: "leao_vermelho", x: 2016, y: 1022, scale: 2 },
        ],
        [//12            
            { name: "objetos_azul", x: 587, y: 795, scale: 2.17 },
            { name: "centopeia_verde", x: 1918, y: 425, scale: 2 },
            { name: "vaso_roxo", x: 1268, y: 594, scale: 2.26 },
            { name: "livros_vermelho", x: 1706, y: 765, scale: 2 },
            { name: "puff_balde_amarelo", x: 526, y: 1201, scale: 2.32 },
            { name: "gato_verde", x: 1788, y: 428, scale: 2 }
        ]
    ]

    init() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    }

    create(data) {
        this.levelNum = data.levelNum;
        this.bg = this.add.image(this.screenCenterX, this.screenCenterY, "bg" + (this.levelNum + 1) + "p").setScale(2).setInteractive();

        //this.cameras.main.setZoom(0.9);
        this.cameras.main.centerOn(this.screenCenterX, this.screenCenterY);

        this.charactersFound = 0;

        this.charPos = this.levelCharactersData[this.levelNum];

        //#region Scale test
        //var x = 500;

        // this.add.spine(
        //     x+ 250,
        //     1000,
        //     "Glup_Anim",
        //     'glup_comemoracao',
        //     false).setScale(0.19);

        //  this.add.spine(
        //     x+500,
        //     1000,
        //     "Iei_Anim",
        //     'iei_idle_comemoracao',
        //     false).setScale(0.16);

        //  this.add.spine(
        //     x+725,
        //     1000,
        //     "Han_Anim",
        //     'han_comemoracao',
        //     false).setScale(0.28);

            
        // this.add.spine(
        //     x+1000,
        //     1000,
        //     "Ihuu_Anim",
        //     'ihuu_idle_comemoracao',
        //     false).setScale(0.11);

        // this.add.spine(
        //     x+1250,
        //     1000,
        //     "Grrr_Anim",
        //     'grrr_bracos',
        //     false).setScale(0.21);
        //#endregion
         
        new StartAnimation(this, this.charPos);

    }

    spawnCharacters() {
        this.bg.destroy();
        this.bg = this.add.image(this.screenCenterX, this.screenCenterY, "bg" + (this.levelNum + 1)).setScale(2).setInteractive();

        this.characters = [];

        //lOAD CHARACTERS
        for (let i = 0; i < this.charPos.length; i++) {
            //this.add.image(this.charPos[i].x, this.charPos[i].y, (this.levelNum + 1)+'-'+(i+1)).setScale(this.charPos[i].scale);
            this.characters.push(new Character(this, this.charPos[i], (this.levelNum + 1) + '-' + (i + 1), i));
        }

        //LOAD PROPS
        var props = this.levelPropsData[this.levelNum];
        for (let i = 0; i < props.length; i++) {
            this.add.image(props[i].x, props[i].y, props[i].name).setScale(props[i].scale);
        }

        this.containerPanel = this.add.container(this.screenCenterX, this.cameras.main.height + 150, []);

        this.containerPanel.add(this.add.image(0, 0, "portrait-panel"));
        //this.containerPanel.add(this.add.image(10, 37, "portrait-panel").setScale(1.75));

        var charactersPanelData = [
            {x:-400 , y: -41, scale: 0.13, eyeX: -400 ,eyeY:-61 },
            {x:-250 , y: 57, scale: 0.2, eyeX: -248 ,eyeY: 7},
            {x:-63 , y: -1, scale: 0.36, eyeX: -68 ,eyeY:-102},
            {x:168 , y: 38, scale: 0.25, eyeX: 170 ,eyeY: 0},
            {x:390 , y: 39, scale: 0.16, eyeX: 385 ,eyeY:-17}
        ]

        for(let i = 1; i<=5;i++){
            this.containerPanel.add(this.add.image(charactersPanelData[i-1].eyeX, charactersPanelData[i-1].eyeY, "eye-"+i).
            setScale(charactersPanelData[i-1].scale));
          
        }

        for(let i = 1; i<=5;i++){
            this.containerPanel.add(this.add.image(charactersPanelData[i-1].x, charactersPanelData[i-1].y, i+"-portrait")
            .setScale(charactersPanelData[i-1].scale).setVisible(false));
        }
    }

    verifyVictory(charID) {
        this.charactersFound += 1;
        if (this.charactersFound == 5) {
            this.time.addEvent({
                delay: 1000,
                callback: () => {
                    for (let i = 0; i < this.characters.length; i++) {
                        this.characters[i].playVictoryAnimation();
                    }

                    var particle = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'conffeti-effect');
                    particle.scale = 4;
                    particle.play('conffeti-effect');

                    let fade = new FadeScreen({
                        scene: this,
                        startopacity: 0
                    });

                    fade.Fade({
                        fromalpha: 0,
                        toalpha: 1,
                        duration: 1000,
                        delay: 3000,
                        onComplete: () => {
                            for (let i = 0; i < this.characters.length; i++) {
                                this.characters[i].destroyAnimations();
                            }
                            //this.scene.pause();
                            this.scene.sendToBack("GameScene");
                            this.scene.run("MenuScene");
                            //fade.DestroyThis();
                        }
                    });
                }
            })


        }

        this.containerPanel.getAt(charID+6).setVisible(true);

        if(this.paneltween==null || !this.paneltween.isPlaying()){
            this.paneltween = this.add.tween({
                targets: this.containerPanel,
                y: this.containerPanel.y - 260,
                duration: 500,
                ease: "Back",
                delay:500,
                yoyo: true,
                hold:3000
            })
        }
    }

}
