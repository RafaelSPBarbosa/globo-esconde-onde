import StartAnimation from "../startAnimation.js";

export default class GameScene extends Phaser.Scene {
    constructor(){
        super({key:"GameScene"});
    }
    
    levelCharactersData = [
        [//1            
            {x: 861, y: 1062, scale: 1.12},
            {x: 1247, y: 699, scale: 1},
            {x: 872, y: 661, scale: 0.91},
            {x: 1496, y: 999, scale: 1.05},
            {x: 771, y: 833, scale: 1}
        ],
        [//2
            {x: 631, y: 594, scale: 1},
            {x: 1234, y: 700, scale: 1.3},
            {x: 1625, y: 1008, scale:1 },
            {x: 1872, y: 486, scale: 1.28},
            {x: 695, y: 800, scale: 1.18}
        ],
        [//3
            {x: 881, y: 680, scale: 1},
            {x: 1899, y: 956, scale: 1.05},
            {x: 1231, y: 645, scale: 1},
            {x: 838, y: 395, scale: 1},
            {x: 1436, y: 1051, scale: 0.77}
        ],
        [//4
            {x: 546, y: 583, scale: 1.09},
            {x: 1571, y: 709, scale: 1.007},
            {x: 1279, y: 669, scale: 1},
            {x: 1894, y: 267, scale: 1},
            {x: 1253, y: 986, scale: 1}
        ],
        [//5
            {x: 1571, y: 552, scale: 0.89},
            {x: 793, y: 720, scale: 1},
            {x: 1304, y: 1051, scale: 1.06},
            {x: 922, y: 931, scale: 1.097},
            {x: 1948, y: 1028, scale: 1.11}
        ],
        [//6
            {x: 895, y: 590, scale: 1.04},
            {x: 1724, y: 1111, scale: 1},
            {x: 932, y: 846, scale: 1.2},
            {x: 741, y: 754, scale: 1.04},
            {x: 1774, y: 808, scale: 1}
        ],
        [//7
            {x: 2009, y: 583, scale: 0.96},
            {x: 1958, y: 950, scale: 0.93},
            {x: 734, y: 1045, scale: 1.05},
            {x: 742, y: 176, scale: 1.14},
            {x: 1640, y: 1046, scale: 0.88}
        ],
        [//8
            {x: 884, y: 368, scale: 0.93},
            {x: 1430, y: 411, scale: 1.04},
            {x: 724, y: 625, scale: 0.91},
            {x: 1630, y: 680, scale: 0.9},
            {x: 1490, y: 1053, scale: 0.93}
        ],
        [//9
            {x: 974, y: 771, scale: 1.13},
            {x: 760, y: 956, scale: 0.96},
            {x: 1913, y: 579, scale: 1.06},
            {x: 791, y: 1105, scale: 1.01},
            {x: 1625, y: 937, scale: 1}
        ],
        [//10
            {x: 341, y: 605, scale: 0.87},
            {x: 730, y: 668, scale: 0.87},
            {x: 1204, y: 917, scale: 0.91},
            {x: 2076, y: 1088, scale: 0.87},
            {x: 2062, y: 889, scale: 0.92}
        ],
        [//11
            {x: 1866, y: 585, scale: 0.91},
            {x: 2033, y: 1017, scale: 1.07},
            {x: 808, y: 967, scale: 0.77},
            {x: 1315, y: 796, scale: 1},
            {x: 580, y: 622, scale: 1.11}
        ],
        [//12
            {x: 1306, y: 588, scale: 1.16},
            {x: 1711, y: 722, scale: 1.1},
            {x: 640, y: 1125, scale: 1.18},
            {x: 667, y: 776, scale: 1.12},
            {x: 1886, y: 410, scale: 1}
        ]
    ]

    levelPropsData = [
        [//1
            {name:"t-bear", x: 769, y: 898, scale: 1},
            {name:"v-ball", x: 795, y: 1059, scale: 1}
        ],
        [//2
            {name:"doll-a", x: 607, y: 571, scale: 1},
            {name:"c-cat", x: 1148, y: 1123, scale: 0.8},
            {name:"w-horse", x: 809, y: 1068, scale: 1.07}
        ],
        [//3
            {name:"b-d-toy", x: 1579, y: 1007, scale: 0.78},
            {name:"f-ball", x: 1290, y: 1105, scale: 0.9},
            {name:"t-bear", x: 1475, y: 1054, scale: 0.82},
            {name:"y-cube", x: 1906, y: 1023, scale: 1},
            {name:"n-book", x: 1231, y: 720, scale: 1},
            {name:"livro-azul", x: 922, y: 734, scale: 1},
            {name:"p-case", x: 863, y: 741, scale: 1.03}
        ],
        [//4
            {name:"d-table", x: 903, y: 1052, scale: 1.04},
            {name:"c-door", x: 1428, y: 925, scale: 1},
            {name:"sprinkler", x: 1628, y: 942, scale: 1.06},
            {name:"dish-d", x: 1307, y: 750, scale: 1}  
        ]
    ]

    init() {
        this.screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        this.screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    }

    create(data) {
        this.levelNum = 3;

        this.bg = this.add.image(this.screenCenterX, this.screenCenterY, "bg" + (this.levelNum + 1) + "p");

        //this.cameras.main.setZoom(0.9);
        this.cameras.main.centerOn(this.screenCenterX, this.screenCenterY);
        
        // fade.Fade({
        //     fromalpha: 1,
        //     toalpha: 0,
        //     duration: 500,
        //     delay:5000,
        //     onComplete: () => {
        //         fade.DestroyThis()
        //     }
        // });

        this.charPos = this.levelCharactersData[this.levelNum];

        new StartAnimation(this, this.charPos);
        
    }

    spawnCharacters(){
        this.bg.destroy();
        this.bg = this.add.image(this.screenCenterX, this.screenCenterY, "bg" + (this.levelNum + 1));

        //lOAD CHARACTERS
        for(let i = 0; i < this.charPos.length; i++){
            this.add.image(this.charPos[i].x, this.charPos[i].y, (this.levelNum + 1)+'-'+(i+1)).setScale(this.charPos[i].scale);
        }
        
        //LOAD PROPS
        var props = this.levelPropsData[this.levelNum];
        for(let i = 0; i < props.length; i++){
            this.add.image(props[i].x, props[i].y, props[i].name).setScale(props[i].scale);
        }
    }

}
