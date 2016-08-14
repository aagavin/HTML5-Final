var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        //private _nextLevelBtn: objects.Button;
        /**
         * Creates an instance of Play.
         *
         */
        function Level1() {
            _super.call(this);
            //private _amfiring:boolean;
            //private _keyboardControls: objects.KeyboardControls;
            this._frameCount = 0;
        }
        // Public methods
        /**
         * Start method
         */
        Level1.prototype.Start = function () {
            var _this = this;
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this._player = new objects.Player("diver");
            this._sharks = [
                new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
            ];
            // add objects to scent
            this.addChild(this._bgImage);
            // this._bubbles.forEach(bubble => {
            // 	this.addChild(bubble);
            // });
            // add player to scene
            this.addChild(this._player);
            // add shark to scene
            this._sharks.forEach(function (shark) {
                _this.addChild(shark);
            });
            this._treasure = new objects.Treasure();
            this.addChild(this._treasure);
            this._bullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.Bullet("bullet"));
                this.addChild(this._bullets[bullet]);
            }
            // add score and lives manager
            core.lives = 10;
            core.score = 0;
            this._livesLbl = new objects.Label("Lives: " + core.lives, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 100, 45);
            this.addChild(this._livesLbl);
            this._scoreLbl = new objects.Label("Score: " + core.score, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
            this.addChild(this._scoreLbl);
            // add a collision managers
            this._collision = new managers.Collision();
            // add scene to stage
            core.stage.addChild(this);
            // start sound
            this._themeSound = createjs.Sound.play('shipEngine');
            this._themeSound.loop = -1;
        };
        Level1.prototype.Test = function () {
            console.log("Fire");
            /*for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }*/
            return true;
        };
        Level1.prototype.Update = function () {
            var _this = this;
            //this._amfiring = false;
            // 
            this._frameCount++;
            this._bgImage.x -= .5;
            this._bullets.forEach(function (bullet) {
                // update each bullet
                bullet.update();
            });
            // update player	
            this._player.update();
            // update shark + player
            this._sharks.forEach(function (shark) {
                shark.update();
                _this._collision.check(_this._player, shark);
            });
            //update shark + bullet
            this._sharks.forEach(function (shark) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(shark, bullet);
                });
            });
            //This is the TEST code, it does not work
            /*if (this._frameCount % 10 == 0){
                this.addEventListener('click', function () {
                    console.log("fire");
                    for (var bullet in this._bullets) {
                        if (!this._bullets[bullet].InFlight) {
                            this._bullets[bullet].Fire(this._player.position);
                            break;
                        }
                    }
                });
            }*/
            this.addEventListener('click', function () {
                if (this._frameCount % 10 == 0) {
                    console.log("fire");
                    for (var bullet in this._bullets) {
                        if (!this._bullets[bullet].InFlight) {
                            this._bullets[bullet].Fire(this._player.position);
                            break;
                        }
                    }
                }
            });
            if (this._frameCount % 10 == 0) {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
                // update treasure
                this._treasure.update();
                this._collision.check(this._player, this._treasure);
                if (core.lives < 1) {
                    this._themeSound.stop();
                    core.scene = config.Scene.OVER;
                    core.changeScene();
                }
                if (core.score > 290) {
                    this._themeSound.stop();
                    core.scene = config.Scene.LEVEL2;
                    core.changeScene();
                }
                // update score and lives
                this._livesLbl.text = "Lives: " + core.lives;
                this._scoreLbl.text = "Score: " + core.score;
                this.checkBounds();
            }
        };
        Level1.prototype.checkBounds = function () {
            // if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
            if (this._bgImage.x < (-1060)) {
                this._bgImage.x = 0;
            }
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map