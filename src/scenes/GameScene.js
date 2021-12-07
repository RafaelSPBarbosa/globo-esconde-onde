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
            { x: 861, y: 1062, scale: 1.12, offsetX: 50, offsetY: -50 },
            { x: 1247, y: 699, scale: 1, offsetX: 0, offsetY: 40 },
            { x: 872, y: 661, scale: 0.91, offsetX: 0, offsetY: -40 },
            { x: 1496, y: 999, scale: 1.05, offsetX: 0, offsetY: 0 },
            { x: 771, y: 833, scale: 1, offsetX: 30, offsetY: -30 }
        ],
        [//2
            { x: 631, y: 594, scale: 1, offsetX: 60, offsetY: -50 },
            { x: 1234, y: 700, scale: 1.3, offsetX: 30, offsetY: -90 },
            { x: 1625, y: 1008, scale: 1, offsetX: 0, offsetY: 0 },
            { x: 1872, y: 486, scale: 1.28, offsetX: 0, offsetY: -190 },
            { x: 695, y: 800, scale: 1.18, offsetX: 80, offsetY: 0 }
        ],
        [//3
            { x: 881, y: 680, scale: 1, offsetX: 0, offsetY: -50 },
            { x: 1899, y: 956, scale: 1.05, offsetX: 0, offsetY: -60 },
            { x: 1231, y: 645, scale: 1, offsetX: 30, offsetY: -20 },
            { x: 838, y: 395, scale: 1, offsetX: 0, offsetY: -15 },
            { x: 1436, y: 1051, scale: 0.77, offsetX: 0, offsetY: -100 }
        ],
        [//4
            { x: 546, y: 583, scale: 1.09, offsetX: 0, offsetY: 0 },
            { x: 1571, y: 709, scale: 1.007, offsetX: 0, offsetY: 100 },
            { x: 1279, y: 669, scale: 1, offsetX: 30, offsetY: 0 },
            { x: 1894, y: 255, scale: 1, offsetX: 0, offsetY: 0 },
            { x: 1253, y: 986, scale: 1, offsetX: 80, offsetY: 80 }
        ],
        [//5
            { x: 1571, y: 552, scale: 0.89, offsetX: 0, offsetY: 0 },
            { x: 793, y: 720, scale: 1, offsetX: 0, offsetY: -50 },
            { x: 1304, y: 1051, scale: 1.06, offsetX: 60, offsetY: 0 },
            { x: 922, y: 931, scale: 1.097, offsetX: 20, offsetY: -30 },
            { x: 1948, y: 1028, scale: 1.11, offsetX: 0, offsetY: 0 }
        ],
        [//6
            { x: 895, y: 590, scale: 1.04, offsetX: 0, offsetY: -80 },
            { x: 1724, y: 1111, scale: 1, offsetX: -120, offsetY: -60 },
            { x: 932, y: 846, scale: 1.2, offsetX: 25, offsetY: 10 },
            { x: 741, y: 754, scale: 1.04, offsetX: 30, offsetY: -60 },
            { x: 1774, y: 808, scale: 1, offsetX: -10, offsetY: 30 }
        ],
        [//7
            { x: 2009, y: 583, scale: 0.96, offsetX: 0, offsetY: 0 },
            { x: 1958, y: 950, scale: 0.93, offsetX: 0, offsetY: 0 },
            { x: 734, y: 1045, scale: 1.05, offsetX: -20, offsetY: -80 },
            { x: 742, y: 176, scale: 1.14, offsetX: 50, offsetY: 165 },
            { x: 1640, y: 1046, scale: 0.88, offsetX: 0, offsetY: -70 }
        ],
        [//8
            { x: 884, y: 368, scale: 0.93, offsetX: 0, offsetY: 0 },
            { x: 1430, y: 411, scale: 1.04, offsetX: -30, offsetY: -70 },
            { x: 724, y: 625, scale: 0.91, offsetX: 30, offsetY: 0 },
            { x: 1630, y: 680, scale: 0.9, offsetX: 100, offsetY: 0 },
            { x: 1490, y: 1053, scale: 0.93, offsetX: 0, offsetY: 0 }
        ],
        [//9
            { x: 974, y: 771, scale: 1.13, offsetX: 0, offsetY: -70 },
            { x: 760, y: 956, scale: 0.96, offsetX: 0, offsetY: -60 },
            { x: 1913, y: 579, scale: 1.06, offsetX: -15, offsetY: 75 },
            { x: 791, y: 1105, scale: 1.01, offsetX: 0, offsetY: 20 },
            { x: 1625, y: 937, scale: 1, offsetX: 0, offsetY: -65 }
        ],
        [//10
            { x: 341, y: 605, scale: 0.87, offsetX: 0, offsetY: 0 },
            { x: 730, y: 668, scale: 0.87, offsetX: 20, offsetY: -20 },
            { x: 1204, y: 917, scale: 0.91, offsetX: -40, offsetY: -15 },
            { x: 2076, y: 1088, scale: 0.87, offsetX: -20, offsetY: 55 },
            { x: 2062, y: 889, scale: 0.92, offsetX: 20, offsetY: -20 }
        ],
        [//11
            { x: 1866, y: 585, scale: 0.91, offsetX: 0, offsetY: 0 },
            { x: 2033, y: 1017, scale: 1.07, offsetX: 0, offsetY: 0 },
            { x: 808, y: 967, scale: 0.77, offsetX: 0, offsetY: 0 },
            { x: 1315, y: 796, scale: 1, offsetX: 50, offsetY: 30 },
            { x: 580, y: 622, scale: 1.11, offsetX: 70, offsetY: 10 }
        ],
        [//12
            { x: 1306, y: 588, scale: 1.16, offsetX: 0, offsetY: -50 },
            { x: 1711, y: 722, scale: 1.1, offsetX: 0, offsetY: -20 },
            { x: 640, y: 1125, scale: 1.18, offsetX: -10, offsetY: 0 },
            { x: 667, y: 776, scale: 1.12, offsetX: 0, offsetY: -30 },
            { x: 1886, y: 410, scale: 1, offsetX: -40, offsetY: -50 }
        ]
    ]

    levelPropsData = [
        [//1
            { name: "t-bear", x: 769, y: 898, scale: 1 },
            { name: "v-ball", x: 795, y: 1059, scale: 1 }
        ],
        [//2
            { name: "doll-a", x: 607, y: 571, scale: 1 },
            { name: "c-cat", x: 1148, y: 1123, scale: 0.8 },
            { name: "w-horse", x: 809, y: 1068, scale: 1.07 }
        ],
        [//3
            { name: "b-d-toy", x: 1579, y: 1007, scale: 0.78 },
            { name: "f-ball", x: 1290, y: 1105, scale: 0.9 },
            { name: "t-bear", x: 1475, y: 1054, scale: 0.82 },
            { name: "y-cube", x: 1906, y: 1023, scale: 1 },
            { name: "n-book", x: 1231, y: 720, scale: 1 },
            { name: "livro-azul", x: 922, y: 734, scale: 1 },
            { name: "p-case", x: 863, y: 741, scale: 1.03 }
        ],
        [//4
            { name: "d-table", x: 903, y: 1052, scale: 1.04 },
            { name: "c-door", x: 1428, y: 925, scale: 1 },
            { name: "sprinkler", x: 1628, y: 942, scale: 1.06 },
            { name: "dish-d", x: 1307, y: 750, scale: 1 }
        ],
        [//5            
            { name: "glove-2", x: 997, y: 994, scale: 1.11 },
            { name: "chair", x: 1222, y: 1050, scale: 0.93 },
            { name: "dish-d", x: 1307, y: 750, scale: 1 },
            //{name:"mixer", x: 763, y: 740, scale: 1},
        ],
        [//6            
            { name: "fruits", x: 918, y: 940, scale: 1 },
            { name: "rolling-pin", x: 1606, y: 1162, scale: 1 },
            { name: "kettle", x: 1735, y: 998, scale: 1.2 },
            { name: "b-chair", x: 1970, y: 906, scale: 0.95 },
            { name: "bag", x: 1815, y: 1103, scale: 1 }
        ],
        [//7            
            { name: "orange-puff", x: 1551, y: 1096, scale: 0.91 }
        ],
        [//8            
            { name: "y-puff", x: 1596, y: 1126, scale: 0.93 }
        ],
        [//9            
            { name: "t-unicorn", x: 1859, y: 708, scale: 1 }
        ],
        [//10            

        ],
        [//11            
            { name: "turtle", x: 855, y: 1071, scale: 1 }
        ],
        [//12            
            { name: "glob", x: 528, y: 834, scale: 1.04 },
            { name: "worm-toy", x: 1918, y: 425, scale: 1.02 },
        ]
    ]


    characterAnimations = [
        [
            { key: "Ihuu_Anim", victory: 'ihuu_idle_comemoracao', animationNumber: 1, scale: 0.15 },
            'ihuu_idle'
        ],
        [
            { key: "Iei_Anim", victory: 'iei_idle_comemoracao', animationNumber: 6, scale: 0.16 },
            'iei_idle_neutro_1',
            'iei_idle_neutro_2',
            'iei_idle_stretch',
            'iei_idle_neutro_1',
            'iei_idle_neutro_2',
            'iei_idle_pum'
        ],
        [
            { key: "Han_Anim", victory: 'han_comemoracao', animationNumber: 2, scale: 0.25 },
            'han_idle_neutro_1',
            'han_idle_neutro_2'
        ],
        [
            { key: "Grrr_Anim", victory: 'grrr_bracos', animationNumber: 2, scale: 0.2 },
            'grrr_idle',
            'grrr_suspiro'
        ],
        [
            { key: "Glup_Anim", victory: 'glup_comemoracao', animationNumber: 4, scale: 0.15 },
            'glup_idle',
            'glup_sleeping',
            'glup_idle',
            'glup_notes'
        ]
    ]

    init() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    }

    create(data) {
        this.levelNum = data.levelNum;
        this.bg = this.add.image(this.screenCenterX, this.screenCenterY, "bg" + (this.levelNum + 1) + "p");

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
        this.bg = this.add.image(this.screenCenterX, this.screenCenterY, "bg" + (this.levelNum + 1));

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
    }

    verifyVictory() {
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
                            this.scene.start("MenuScene");
                        }
                    });
                }
            })


        }
    }

}
