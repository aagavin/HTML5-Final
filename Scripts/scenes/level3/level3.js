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
            this._bgImage = new createjs.Bitmap(core.assets.getResult('bgPlayImgL2'));
            this.addChild(this._bgImage);
            this._player = new objects.Player('player_level3');
            this.addChild(this._lblScore);
            this._lblScore = new objects.Label('Score' + core.score, '35px', "Tahoma, Geneva, sans-serif", "#fff", 150, 45);
            this.addChild(this._player);
            core.stage.addChild(this);
        };
        /**
         * Update method
         *
         * @returns voids
         */
        Level3.prototype.Update = function () {
            // Update background image
            this._bgImage.x -= 2;
            // update player
            this._player.update();
            // console.log(this._player.y);
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
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map