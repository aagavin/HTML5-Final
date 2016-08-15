var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Player object used in the game
     *
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    var Star = (function (_super) {
        __extends(Star, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Star(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        /**
        * This method checks if the object has reached its boundaries
        *
        * @private
        * @method _checkBounds
        * @returns {void}
        */
        Star.prototype._checkBounds = function () {
            if ((this.x + this.halfWidth) < 0) {
                this._reset();
            }
            if (this.y < (this.halfHeight)) {
                this._dy = (-1) * this._dy;
            }
            if (this.y > config.Screen.HEIGHT) {
                this._dy = (-1) * this._dy;
            }
        };
        Star.prototype._reset = function () {
            this._dx = Math.floor(Math.random() * (7 - 2)) + 2;
            this._dy = Math.floor(Math.random() * (7 - 2)) + 2;
            this.x = config.Screen.WIDTH + this.width;
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - 15)) + 15;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Star.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._spinNumber = Math.floor(Math.random() * (15 - 5)) + 5;
            this._reset();
        };
        /**
         * This method updates the objects properties every time it's called
         *
         * @public
         * @param {Vector2} playerLoc
         * @returns {void}
         */
        Star.prototype.update = function () {
            this.x -= this._dx;
            this.y -= this._dy;
            this.position = new objects.Vector2(this.x, this.y);
            this.rotation += this._spinNumber;
            // this.y=core.stage.mouseY;
            this._checkBounds();
        };
        return Star;
    }(objects.GameObject));
    objects.Star = Star;
})(objects || (objects = {}));
//# sourceMappingURL=star.js.map