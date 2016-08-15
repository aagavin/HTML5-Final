var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    /**
     * This is the Level 1 Scene object used in the game
     *
     * @class Level1
     * @extends {objects.Scene}
     */
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        //private _nextLevelBtn: objects.Button;
        /**
         * Creates an instance of Level1.
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
         * Start method for Level1
         */
        Level1.prototype.Start = function () {
            var _this = this;
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            //creates and adds shark/ship objects
            this._player = new objects.Player("diver");
            this._sharks = [
                new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
            ];
            // add background object to scene
            this.addChild(this._bgImage);
            // this._bubbles.forEach(bubble => {
            // 	this.addChild(bubble);
            // });
            // add player to scene
            this.addChild(this._player);
            // add shark to scene
            //add Sharks with foreach loop (3 sharks)
            this._sharks.forEach(function (shark) {
                _this.addChild(shark);
            });
            //Add and create heart icon
            this._treasure = new objects.Treasure();
            this.addChild(this._treasure);
            //create and add bullet objects (10)
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
            //Shoot with mouseclick function
            this.on('click', function () {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            });
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
            // update treasure
            this._treasure.update();
            this._collision.check(this._player, this._treasure);
            //Death condition
            if (core.lives < 1) {
                this._themeSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            //Level 2 condition
            if (core.score > 290) {
                this._themeSound.stop();
                core.scene = config.Scene.LEVEL2;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            // update score and lives
            this._livesLbl.text = "Lives: " + core.lives;
            this._scoreLbl.text = "Score: " + core.score;
            this.checkBounds();
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