var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     *
     * @export objects
     * @class Bubble
     * @extends {createjs.Bitmap}
     */
    var Bubble = (function (_super) {
        __extends(Bubble, _super);
        /**
         * Creates an instance of Buble.
         *
         */
        function Bubble(moveleft) {
            if (moveleft === void 0) { moveleft = true; }
            _super.call(this, core.assets.getResult('bubble'));
            this._moveleft = moveleft;
            this.start();
        }
        Object.defineProperty(Bubble.prototype, "height", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bubble.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * This resets the object outsite of the vieport
         * and sets the y locations
         *
         * @private
         * @methmod _reset
         * @returns {void}
         */
        Bubble.prototype._reset = function () {
            this.x = Math.floor(Math.random() * 480) + 1;
            650;
            this.y = 490;
        };
        /**
         * This methmod will reset the
         *
         * @private
         */
        Bubble.prototype._checkBounds = function () {
            if ((this.y < (-1 * this.height)) || (this.x < (-1 * this.width))) {
                this._reset();
            }
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        Bubble.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.alpha = .08;
            this.regX = this.width * .5;
            this.regY = this.height * .5;
            this.x = 650;
            this.y = Math.floor(Math.random() * 480) + 1;
            // this._reset();
        };
        Bubble.prototype.update = function () {
            if (this._moveleft) {
                this.x -= 1;
            }
            this.y -= 2;
            this._checkBounds();
        };
        return Bubble;
    }(createjs.Bitmap));
    objects.Bubble = Bubble;
})(objects || (objects = {}));
//# sourceMappingURL=bubble.js.map