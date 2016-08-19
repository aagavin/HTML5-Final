var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Treasure object used in the game
     * Update: It shows a heart icon
     * @class Treasure
     * @extends {objects.GameObject}
     */
    var Heart = (function (_super) {
        __extends(Heart, _super);
        /**
         * Creates an instance of Treasure.
         * @constructor
         */
        function Heart() {
            _super.call(this, 'treasure');
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @returns {void}
         */
        Heart.prototype.Reset = function () {
            this._dx = Math.floor(Math.random() * 3) + 2;
            this.x = 5000 + this.width;
            this.y = Math.floor(Math.random() * ((480 - this.width) - 200 + 1) + 200);
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Heart.prototype._checkBounds = function () {
            if (this.x <= -(this.width * 2)) {
                this.Reset();
            }
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
        Heart.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.Reset();
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Heart.prototype.update = function () {
            // this.y += this._dx;
            this.x -= this._dx;
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return Heart;
    }(objects.GameObject));
    objects.Heart = Heart;
})(objects || (objects = {}));
//# sourceMappingURL=treasure.js.map