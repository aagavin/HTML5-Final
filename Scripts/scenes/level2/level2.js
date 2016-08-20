var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        //private _amfiring:boolean;
        /**
         * Creates an instance of Play.
         *
         */
        function Level2() {
            _super.call(this);
        }
        // Public methods
        /**
         * Start method
         */
        Level2.prototype.Start = function () {
            var _this = this;
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImgL2"));
            this._player = new objects.Player("player_level3");
            this._sharks = [
                new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
            ];
            // add objects to scent
            this.addChild(this._bgImage);
            // add player to scene
            this.addChild(this._player);
            // add shark to scene
            this._sharks.forEach(function (shark) {
                _this.addChild(shark);
            });
            this._injuredPeople = new objects.InjuredPeople();
            this.addChild(this._injuredPeople);
            this._bullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.Bullet("bulletPlayer"));
                this.addChild(this._bullets[bullet]);
            }
            this._livesLbl = new objects.Label("Lives: " + core.lives, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 100, 45);
            this.addChild(this._livesLbl);
            this._scoreLbl = new objects.Label("Score: " + core.score, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
            this.addChild(this._scoreLbl);
            this._peopleSavedLbl = new objects.Label("People Saved: " + core.peopleSaved, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 400, 45);
            this.addChild(this._peopleSavedLbl);
            // add a collision managers
            this._collision = new managers.Collision();
            // add scene to stage
            core.stage.addChild(this);
            // start sound
            this._themeSound = createjs.Sound.play('epic');
            this._themeSound.volume = 0.2;
            this._themeSound.loop = -1;
            this.on('click', function () {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            });
        };
        Level2.prototype.Test = function () {
            console.log("Fire");
            return true;
        };
        Level2.prototype.Update = function () {
            var _this = this;
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
            this._injuredPeople.update();
            this._collision.check(this._player, this._injuredPeople);
            if (core.lives < 1) {
                this._themeSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            if (core.peopleSaved > 9) {
                this._themeSound.stop();
                core.scene = config.Scene.LEVEL3;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            // update score and lives
            this._livesLbl.text = "Lives: " + core.lives;
            this._scoreLbl.text = "Score: " + core.score;
            this._peopleSavedLbl.text = "People Saved: " + core.peopleSaved;
            this.checkBounds();
        };
        Level2.prototype.checkBounds = function () {
            // if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
            if (this._bgImage.x < (-2433)) {
                this._bgImage.x = 0;
            }
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map