var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         * Starts the scene
         */
        Menu.prototype.Start = function () {
            var _this = this;
            // add background image
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImage);
            // add bubble effect
            this._bubbles = [
                new objects.Bubble(false), new objects.Bubble(false), new objects.Bubble(false),
                new objects.Bubble(false), new objects.Bubble(false), new objects.Bubble(false)
            ];
            this._bubbles.forEach(function (bubble) {
                _this.addChild(bubble);
            });
            // Add Menu Label
            this._menuLabel = new objects.Label("Shark Attack 3: In Space", "60px", "Tahoma, Geneva, sans-serif", "#eee", 400, 140);
            this.addChild(new objects.Label("Shark Attack 3: In Space", "60px", "Tahoma, Geneva, sans-serif", "#000", 403, 143));
            this.addChild(new objects.Label("The sharks are back but now in space", "30px", "Tahoma, Geneva, sans-serif", "#ff0", 403, 250));
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startBtn", 150, 400, true);
            this.addChild(this._startButton);
            this._instruction = new objects.Button("instructionsBtn", 475, 400, true);
            this.addChild(this._instruction);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // instructions button even listener
            this._instruction.on('click', this._instructionButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * scene updates happen here...
         */
        Menu.prototype.Update = function () {
            this._bubbles.forEach(function (bubble) {
                bubble.update();
            });
            this._bgImage.x -= .5;
            this.checkBounds();
        };
        Menu.prototype.checkBounds = function () {
            // if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
            if (this._bgImage.x < (-1060)) {
                this._bgImage.x = 0;
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        Menu.prototype._instructionButtonClick = function (event) {
            core.scene = config.Scene.INSTRUCTIONS;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map