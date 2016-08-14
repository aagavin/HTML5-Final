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
        // PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++
        /**
         *  This method checks if the object has reached its boundaries
         *
         * @private
         * @returns {void}
         */
        FinalBoss.prototype._checkBounds = function () {
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        FinalBoss.prototype.start = function () {
        };
        return FinalBoss;
    }(objects.GameObject));
})(objects || (objects = {}));
//# sourceMappingURL=finalBoss.js.map