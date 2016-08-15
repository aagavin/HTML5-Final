var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This class will control the Final Boss
     *
     * @export
     * @class FinalBoss
     * @extends {objects.GameObject}
     */
    var FinalBoss = (function (_super) {
        __extends(FinalBoss, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of FinalBoss.
         *
         * @param {string} imgString
         */
        function FinalBoss(imgString) {
            _super.call(this, imgString);
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++
        /**
         *  This method checks if the object has reached its boundaries
         *
         * @private
         * @returns {void}
         */
        FinalBoss.prototype._checkBounds = function () {
            // left wall
            if (this.x < (0 + this.halfWidth)) {
                this._dx = (-1) * this._dx;
            }
            // right wall
            if ((this.x + this.width) > (config.Screen.WIDTH)) {
                this._dx = (-1) * this._dx;
            }
            // top wall
            if (this.y < (0 + this.halfHeight)) {
                this._dy = (-1) * this._dy;
            }
            // bottom wall
            if (this.y > (config.Screen.HEIGHT - this.height)) {
                this._dy = (-1) * this._dy;
            }
        };
        FinalBoss.prototype._reset = function () {
            this._dx = Math.floor(Math.random() * (6 - 1)) + 1;
            this._dy = Math.floor(Math.random() * (6 - 1)) + 1;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        FinalBoss.prototype.start = function () {
            this._reset();
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HALF_HEIGHT;
        };
        FinalBoss.prototype.update = function () {
            this.x -= this._dx;
            this.y -= this._dy;
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return FinalBoss;
    }(objects.GameObject));
    objects.FinalBoss = FinalBoss;
})(objects || (objects = {}));
//# sourceMappingURL=finalBoss.js.map