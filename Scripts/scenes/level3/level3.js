var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    /**
     * This is level3
     *
     * @export
     * @class Level3
     * @extends {objects.Scene}
     */
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        /**
         * Creates an instance of Level3.
         *
         */
        function Level3() {
            _super.call(this);
        }
        //***************** public methods *****************// 
        /**
         * Start method
         *
         * @returns voids
         */
        Level3.prototype.Start = function () {
            // drop shadow
            this._textShadow = new createjs.Shadow('#000', 0, 0, 3);
            this._bgImage = new createjs.Bitmap(core.assets.getResult('bgPlayImgL2'));
            this.addChild(this._bgImage);
            this._player = new objects.Player('player_level3');
            this.addChild(this._player);
            this._bullets = new Array();
            for (var bullet = 0; bullet < 5; bullet++) {
                this._bullets.push(new objects.Bullet('bulletPlayer'));
                this.addChild(this._bullets[bullet]);
            }
            this._finalBoss = new objects.FinalBoss('finalBoss');
            this.addChild(this._finalBoss);
            this._lblBossLives = new objects.Label('Boss Lives: ' + core.bossLives, '35px', "Tahoma, Geneva, sans-serif", "#ff0", 150, 45);
            this._lblBossLives.shadow = this._textShadow;
            this.addChild(this._lblBossLives);
            this._lblLives = new objects.Label('Your Lives: ' + core.lives, '34px', "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
            this._lblLives.shadow = this._textShadow;
            this.addChild(this._lblLives);
            this._stars = new Array();
            for (var i = 0; i < 3; i++) {
                var star = new objects.Star('star');
                this._stars.push(star);
                this.addChild(star);
            }
            // Collision manager
            this._collision = new managers.Collision();
            this._themeSound = createjs.Sound.play('level3_music');
            this._themeSound.loop = -1;
            core.stage.addChild(this);
            this.on('click', function () {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            });
        };
        /**
         * Update method
         *
         * @returns voids
         */
        Level3.prototype.Update = function () {
            var _this = this;
            // Update background image
            this._bgImage.x -= 2;
            // update player
            this._player.update();
            // update final boss
            this._finalBoss.update();
            // lives lbl
            this._lblLives.text = 'Lives: ' + core.lives;
            // boss lives lbl
            this._lblBossLives.text = 'Boss Lives: ' + core.bossLives;
            // _collision star and player
            this._stars.forEach(function (star) {
                _this._collision.check(_this._player, star);
                star.update();
            });
            // Collision between star and bullet
            this._stars.forEach(function (star) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(star, bullet);
                });
            });
            // Collision between bullet and boss
            this._bullets.forEach(function (bullet) {
                _this._collision.check(_this._finalBoss, bullet);
            });
            // update bullets
            this._bullets.forEach(function (bullet) {
                bullet.update();
            });
            // Collision check between player and boss
            this._collision.check(this._player, this._finalBoss);
            //this._collision.check(this._player)
            if (core.lives < 1) {
                core.scene = config.Scene.OVER;
                core.changeScene();
                this._themeSound.stop();
            }
            if (core.bossLives < 1) {
                core.scene = config.Scene.WIN;
                core.changeScene();
                this._themeSound.stop();
            }
            this.checkBounds();
        };
        //***************** private methods *****************//
        /**
         * check bounds of elements
         *
         * @private
         * @returns void
         */
        Level3.prototype.checkBounds = function () {
            if (this._bgImage.x < (-2433)) {
                this._bgImage.x = 0;
            }
        };
        Object.defineProperty(Level3.prototype, "themeSound", {
            /**
             * Getter for stoping the sound
             *
             * @readonly
             * @type {createjs.AbstractSoundInstance}
             */
            get: function () {
                return this._themeSound;
            },
            enumerable: true,
            configurable: true
        });
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map