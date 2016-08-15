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
                        createjs.Sound.play("bulletHit");
                        prime.Reset();
                        other.Reset();
                        core.score += 10;
                        createjs.Sound.play("death");
                        prime.Reset();
                        other.Reset();
                        core.score += 10;
                    }
                    if (other.name === 'finalBoss') {
                        core.lives -= 1;
                    }
                    // 
                    if (other.name === 'star') {
                        core.lives -= 1;
                        other.Reset();
                    }
                    // bulletPlayer
                    if (prime.name === 'star' && other.name === 'bulletPlayer') {
                        prime.Reset();
                        other.Reset();
                    }
                    // boss and bullet
                    if (prime.name === 'finalBoss' && other.name === 'bulletPlayer') {
                        core.bossLives -= 1;
                        other.Reset();
                        createjs.Sound.play('death');
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