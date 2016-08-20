var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var L2toL3 = (function (_super) {
        __extends(L2toL3, _super);
        /**
         * Creates an instance of L2toL3.
         *
         */
        function L2toL3() {
            _super.call(this);
        }
        L2toL3.prototype.Start = function () {
            // add background image
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImage);
            // Add Menu Label
            this._menuLabel = new objects.Label("Congratulations!", "40px", "Tahoma, Geneva, sans-serif", "#eee", config.Screen.HALF_WIDTH, 140);
            this._menuLabel.shadow = new createjs.Shadow("#fff", 0, 0, 15);
            this._menuLabel2 = new objects.Label("You made it past the frontlines to the enemy ship.", "27px", "Tahoma, Geneva, sans-serif", "#ff0", config.Screen.HALF_WIDTH, 200);
            //this._menuLabel2.shadow=new createjs.Shadow("#fff", 0,0,15);
            this.addChild(new objects.Label("Save all the humans you come across while", "27px", "Tahoma, Geneva, sans-serif", "#ff0", config.Screen.HALF_WIDTH, 230));
            this.addChild(new objects.Label("you make your way to the Shark leader.", "27px", "Tahoma, Geneva, sans-serif", "#ff0", config.Screen.HALF_WIDTH, 260));
            this.addChild(this._menuLabel);
            this.addChild(this._menuLabel2);
            // add the start button
            this._startButton = new objects.Button("level2Btn", 250, 400, true);
            this.addChild(this._startButton);
            this._instruction = new objects.Button("instructionsBtn", 600, 400, true);
            this.addChild(this._instruction);
            // end Button
            this._exitButton = new objects.Button("exitButton", config.Screen.HALF_WIDTH, config.Screen.HEIGHT - 35, true);
            this.addChild(this._exitButton);
            // Start button event listener
            // this._startButton.on('click', this._startButtonClick, this);
            // // instructions button even listener
            // this._instruction.on('click', this._instructionButtonClick, this);
            // // End button event listener
            // this._exitButton.on('click', this._endButtonClick,this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * scene updates happen here...
         */
        L2toL3.prototype.Update = function () {
            this._bgImage.x -= .5;
            this.checkBounds();
        };
        L2toL3.prototype.checkBounds = function () {
            if (this._bgImage.x < (-1060)) {
                this._bgImage.x = 0;
            }
        };
        return L2toL3;
    }(objects.Scene));
    scenes.L2toL3 = L2toL3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2to3transition.js.map