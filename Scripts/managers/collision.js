var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
            this.start();
        }
        Collision.prototype.start = function () {
        };
        Collision.prototype.update = function () {
        };
        Collision.prototype.check = function (prime, other) {
            if (objects.Vector2.distance(prime.position, other.position) < (prime.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;
                    if (other.name === 'shark') {
                        createjs.Sound.play('comic-bite');
                        core.lives -= 1;
                    }
                    if (other.name === 'treasure') {
                        createjs.Sound.play('coin');
                        other.Reset();
                        if (core.lives < 10) {
                            core.lives += 1;
                        }
                    }
                    if (other.name === 'bullet') {
                        createjs.Sound.play("death");
                        prime.Reset();
                        other.Reset();
                        core.score += 10;
                    }
                    if (other.name === 'injured') {
                        createjs.Sound.play("thanks");
                        prime.Reset();
                        other.Reset();
                        core.score += 10;
                        core.peopleSaved += 1;
                        console.log(core.peopleSaved);
                    }
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map