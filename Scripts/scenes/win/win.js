var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Win() {
            _super.call(this);
        }
        /**
         *
         */
        Win.prototype.Start = function () {
            this._bgImg = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImg);
            this._gameoversound = createjs.Sound.play('gameover');
            // Add Menu Label
            this._gameOverLabel = new objects.Label("Congratulations you killed the Sharkmada", "bold 30px", "Consolas", "#ee0", config.Screen.WIDTH - 420, 100);
            this._gameOverLabel2 = new objects.Label("and saved the galaxy!", "bold 30px", "Consolas", "#ee0", config.Screen.WIDTH - 420, 120);
            this.addChild(this._gameOverLabel);
            this.addChild(this._gameOverLabel2);
            // add the start button
            this._restartButton = new objects.Button("playagain", 250, 400, true);
            this.addChild(this._restartButton);
            this._menuButton = new objects.Button("menu", 600, 400, true);
            this.addChild(this._menuButton);
            /**
             * Score
             */
            if (core.score > core.highScore) {
                core.highScore = core.score;
            }
            this.addChild(new objects.Label('Score: ' + core.score, '35px', 'Tahoma, Geneva, sans-serif', '#ddd', 250, 200));
            this.addChild(new objects.Label('High Score: ' + core.highScore, '35px', 'Tahoma, Geneva, sans-serif', '#ddd', 600, 200));
            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            this._menuButton.on('click', this._menuButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Win.prototype.Update = function () {
            // scene updates happen here...
            this._bgImg.x -= 5;
            this.checkBounds();
        };
        Win.prototype.checkBounds = function () {
            // if (this._bgImg.x<(-(this._bgImg.getBounds().width-640))) {
            if (this._bgImg.x < (-1060)) {
                this._bgImg.x = 0;
            }
        };
        Win.prototype._stopSound = function () {
            this._gameoversound.stop();
        };
        // EVENT HANDLERS ++++++++++++++++
        Win.prototype._restartButtonClick = function (event) {
            this._stopSound();
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        Win.prototype._menuButtonClick = function (event) {
            this._stopSound();
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map