var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var config;
(function (config) {
    (function (Scene) {
        Scene[Scene["MENU"] = 0] = "MENU";
        Scene[Scene["LEVEL1"] = 1] = "LEVEL1";
        Scene[Scene["LEVEL2"] = 2] = "LEVEL2";
        Scene[Scene["LEVEL3"] = 3] = "LEVEL3";
        Scene[Scene["OVER"] = 4] = "OVER";
        Scene[Scene["INSTRUCTIONS"] = 5] = "INSTRUCTIONS";
        Scene[Scene["WIN"] = 6] = "WIN";
        Scene[Scene["L1TOL2"] = 7] = "L1TOL2";
        Scene[Scene["L2TOL3"] = 8] = "L2TOL3";
    })(config.Scene || (config.Scene = {}));
    var Scene = config.Scene;
})(config || (config = {}));
var config;
(function (config) {
    (function (Screen) {
        Screen[Screen["WIDTH"] = 850] = "WIDTH";
        Screen[Screen["HEIGHT"] = 550] = "HEIGHT";
        Screen[Screen["HALF_WIDTH"] = 425] = "HALF_WIDTH";
        Screen[Screen["HALF_HEIGHT"] = 275] = "HALF_HEIGHT";
    })(config.Screen || (config.Screen = {}));
    var Screen = config.Screen;
})(config || (config = {}));
/**
 * @author Tom Tsiliopoulos ttsliop@my.centennialcollege.ca
 * @studentID 300818577
 * @date July 4, 2016
 * @version 0.01 - Initial version of the button class
 */
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * This is the generic objects namespace
 *
 * @module objects
 */
var objects;
(function (objects) {
    /**
     * This simple Button class extends the createjs.Bitmap object.
     * It includes two private methods to handle mouseover and mouseout events.
     *
     * @export
     * @class Button
     * @extends {createjs.Bitmap}
     */
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Button.
         *
         * @constructor
         * @param {string} pathString
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         */
        function Button(imageString, x, y, isCentered) {
            _super.call(this, core.assets.getResult(imageString));
            // Check if user wants to change regX and regY values to the center 
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            // binds the mouseover and mouseout events to the button object
            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this);
        }
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is an event handler for the mouseover event
         *
         * @private
         * @method _mouseOver
         * @param {createjs.MouseEvent} event
         */
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
            document.body.style.cursor = "pointer";
        };
        /**
         * This is an event handler for the mouseout event
         *
         * @private
         * @method _mouseOut
         * @param {createjs.MouseEvent} event
         */
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
            document.body.style.cursor = "inherit";
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
var objects;
(function (objects) {
    /**
     * This is a generic Label class for the Game BoilerPlate
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(labelString, fontSize, fontFamily, fontColour, x, y) {
            _super.call(this, labelString, (fontSize + " " + fontFamily), fontColour);
            this.labelString = labelString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColour = fontColour;
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            // assign label coordinates
            this.x = x;
            this.y = y;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
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
var objects;
(function (objects) {
    /**
     * This class extends the CreateJS Point class
     *
     * @export
     * @class Vector2
     * @extends {createjs.Point}
     */
    var Vector2 = (function (_super) {
        __extends(Vector2, _super);
        function Vector2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            _super.call(this, x, y);
        }
        /**
         * This method returns the distance between two Vector2 objects (a and b)
         *
         * @static
         * @method distance
         * @param {Vector2} a
         * @param {Vector2} b
         * @returns {number}
         */
        Vector2.distance = function (a, b) {
            return Math.floor(Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2)));
        };
        return Vector2;
    }(createjs.Point));
    objects.Vector2 = Vector2;
})(objects || (objects = {}));
var objects;
(function (objects) {
    /**
     * This class represents a generic Game Object used in the game
     *
     * @export
     * @class GameObject
     * @extends {createjs.Bitmap}
     */
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of the GameObject.
         *
         * @constructor
         * @param {string} imageString
         */
        function GameObject(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this._initialize(imageString);
            this.start();
        }
        Object.defineProperty(GameObject.prototype, "width", {
            // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "halfWidth", {
            get: function () {
                return this._width * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "halfHeight", {
            get: function () {
                return this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "isColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newState) {
                this._isColliding = newState;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype._initialize = function (imageString) {
            this.name = imageString;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new objects.Vector2(this.x, this.y);
            this.isColliding = false;
        };
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        GameObject.prototype.start = function () {
        };
        /**
     * This method updates the object's properties
     * every time it's called
     *
     * @public
     * @method update
     * @returns {void}
     */
        GameObject.prototype.update = function () {
        };
        GameObject.prototype.Reset = function () {
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
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
                this.Reset();
            }
            if (this.y < (this.halfHeight)) {
                this._dy = (-1) * this._dy;
            }
            if (this.y > config.Screen.HEIGHT) {
                this._dy = (-1) * this._dy;
            }
        };
        Star.prototype.Reset = function () {
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
            this.Reset();
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
/// <reference path="_reference.ts"/>
/**
 * @author Aaron Fernandes, Arlina Ramrattan, Neil Reading & Omid Khataee
 * @studentID
 * @date []
 * @description This file is the entry point for the game
 * @version 1.0 - Shark attack game
 *
 *
 * @credits:
 * Music: http://www.bensound.com
 * Sound Effects: https://www.freesound.org
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    // Score and lives
    core.score = 0;
    core.lives = 10;
    core.bossLives = 20;
    core.highScore = 0;
    core.peopleSaved = 0;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
    var over;
    var level1;
    var level2;
    var level3;
    var instruction;
    var win;
    var l1tol2;
    var l2tol3;
    // asset manifest for images and sounds
    var assetData = [
        { id: "instructionsBtn", src: "../../Assets/images/instructions.png" },
        { id: "bgPlayImg", src: "../../Assets/images/bg.jpg" },
        { id: "bgPlayImgL2", src: "../../Assets/images/spaceshipinterior.jpg" },
        { id: "diver", src: "../../Assets/images/spaceship.png" },
        { id: "player_level3", src: "../../Assets/images/player_level3.png" },
        { id: "shark", src: "../../Assets/images/shark.png" },
        { id: "startBtn", src: "../../Assets/images/startBtn.png" },
        { id: "level2Btn", src: "../../Assets/images/L2Btn.png" },
        { id: "exitButton", src: "../../Assets/images/exitButton.png" },
        { id: "treasure", src: "../../Assets/images/treasure.png" },
        { id: "injured", src: "../../Assets/images/injured.png" },
        { id: "bullet", src: "../../Assets/images/bullet.png" },
        { id: "bulletPlayer", src: "../../Assets/images/bulletPlayer.png" },
        { id: "laser", src: "../../Assets/audio/laser.wav" },
        { id: "playagain", src: "../../Assets/images/playagain.png" },
        { id: "menu", src: "../../Assets/images/menu.png" },
        { id: "player_level3", src: "../../Assets/images/player_level3.png" },
        { id: "finalBoss", src: "../../Assets/images/finalBoss.png" },
        { id: "star", src: "../../Assets/images/star.png" },
        { id: "bulletPlayer", src: "../../Assets/images/bulletPlayer.gif" },
        { id: "level1_music", src: "../../Assets/audio/level1_music.mp3" },
        { id: "thanks", src: "../../Assets/audio/thankyou.mp3" },
        { id: "theduel", src: "../../Assets/audio/theduel.ogg" },
        { id: "epic", src: "../../Assets/audio/epic.mp3" },
        { id: "comic-bite", src: "../../Assets/audio/comic-bite.ogg" },
        { id: "coin", src: "../../Assets/audio/lifeup.wav" },
        { id: "death", src: "../../Assets/audio/death.wav" },
        { id: "gameover", src: "../../Assets/audio/gameover.ogg" },
        { id: "level3_music", src: "../../Assets/audio/level3_music.ogg" }
    ];
    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        // call the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage
    }
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Level 1
            case config.Scene.LEVEL1:
                core.stage.removeAllChildren();
                level1 = new scenes.Level1();
                currentScene = level1;
                break;
            // Level 2
            case config.Scene.LEVEL2:
                core.stage.removeAllChildren();
                level2 = new scenes.Level2();
                currentScene = level2;
                break;
            // Level 3
            case config.Scene.LEVEL3:
                core.stage.removeAllChildren();
                level3 = new scenes.Level3();
                currentScene = level3;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
            case config.Scene.INSTRUCTIONS:
                core.stage.removeAllChildren();
                instruction = new scenes.Instructions();
                currentScene = instruction;
                break;
            case config.Scene.WIN:
                core.stage.removeAllChildren();
                win = new scenes.Win();
                currentScene = win;
                break;
            case config.Scene.L1TOL2:
                core.stage.removeAllChildren();
                l1tol2 = new scenes.L1toL2();
                currentScene = l1tol2;
                break;
            case config.Scene.L2TOL3:
                core.stage.removeAllChildren();
                l2tol3 = new scenes.L2toL3();
                currentScene = l2tol3;
                break;
        }
    }
    core.changeScene = changeScene;
    /**
     * Event handler
     */
    document.addEventListener("keyup", checkKeyPressed, false);
    /**
     * Checks what key is pressed. This method will also stop the sound of the scene
     *
     * @param {KeyboardEvent} key
     * @returns void
     */
    function checkKeyPressed(key) {
        switch (key.keyCode) {
            case 49:
                createjs.Sound.stop();
                core.stage.removeAllChildren();
                level1 = new scenes.Level1();
                currentScene = level1;
                break;
            case 50:
                createjs.Sound.stop();
                core.stage.removeAllChildren();
                level2 = new scenes.Level2();
                currentScene = level2;
                break;
            case 51:
                createjs.Sound.stop();
                core.stage.removeAllChildren();
                level3 = new scenes.Level3();
                currentScene = level3;
                break;
        }
    }
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
/// <reference path="../../core/game.ts"/>
var objects;
(function (objects) {
    /**
     * This abstract scene class is used to create individual scenes
     *
     * @export
     * @abstract
     * @class Scene
     * @extends {createjs.Container}
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
            this.Start();
        }
        /**
         * Add game objects to the scene in this method
         *
         * @method Start
         * @returns {void}
         */
        Scene.prototype.Start = function () {
            core.stage.addChild(this);
        };
        /**
         * Updates Game objects in the Scene
         *
         * @method Update
         * @returns {void}
         */
        Scene.prototype.Update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
var objects;
(function (objects) {
    /**
     * This is the Player object used in the game
     *
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    var Player = (function (_super) {
        __extends(Player, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Player(imageString) {
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
        Player.prototype._checkBounds = function () {
            // checkbounds to stop player from going outside
            // check right bounds
            if (this.y >= (550 - (this.height * 0.5))) {
                this.y = (550 - (this.height * 0.5));
            }
            // check left bounds
            if (this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
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
        Player.prototype.start = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            //this.y = 1000;
            this.x = this.width * 0.8;
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Player.prototype.update = function () {
            // player to follow mouse
            this.position = new objects.Vector2(this.x, this.y);
            this.y = core.stage.mouseY;
            this._checkBounds();
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
var objects;
(function (objects) {
    /**
     * This is the Shark object used in the game
     *
     * @export
     * @class Shark
     * @extends {objects.GameObject}
     */
    var Shark = (function (_super) {
        __extends(Shark, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Shark(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         * and sets the x and y locations
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Shark.prototype.Reset = function () {
            this._dx = Math.floor((Math.random() * 5) + 3); // vertical speed
            this._dy = Math.floor((Math.random() * 4) - 2); // horizontal drift
            this.x = 800 + this.width;
            // get a random y location
            this.y = Math.floor((Math.random() * (480 - (this.height * 0.5))) + (this.height * 0.5));
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Shark.prototype._checkBounds = function () {
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
        Shark.prototype.start = function () {
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
        Shark.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return Shark;
    }(objects.GameObject));
    objects.Shark = Shark;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         *
         * @constructor
         * @param {string} imageString
         */
        function Bullet(imageString) {
            _super.call(this, imageString);
            this.start();
        }
        Object.defineProperty(Bullet.prototype, "Speed", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._speed;
            },
            set: function (newSpeed) {
                this._speed = newSpeed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bullet.prototype, "InFlight", {
            get: function () {
                return this._inFlight;
            },
            set: function (newState) {
                this._inFlight = newState;
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        /**
         * This method resets the bullet object
         *
         * @public
         * @method _reset
         * @return {void}
         */
        Bullet.prototype.Reset = function () {
            this.position = this._defaultPosition;
            this.x = this.position.x;
            this.y = this.position.y;
            this.InFlight = false;
        };
        /**
         * Evaluates if the bullet has left the screen then calls reset
         *
         * @private
         * @method _checkBounds
         * @return {void}
         */
        Bullet.prototype._checkBounds = function () {
            //console.log(this.position.x + ", " + this.width);
            if (this.position.x >= 900 - this.width) {
                this.Reset();
            }
        };
        // PUBLIC METHODS
        /**
         * This method triggers the bullet being fired
         *
         * @method Fire
         * @param {Vector2} newPosition
         * @return {void}
         */
        Bullet.prototype.Fire = function (newPosition) {
            this.x = newPosition.x + 60;
            this.y = newPosition.y;
            this.position = newPosition;
            this.InFlight = true;
            createjs.Sound.play("laser");
        };
        Bullet.prototype.start = function () {
            this._defaultPosition = new objects.Vector2(1000, 1000);
            this.Speed = -10;
            this.Reset();
        };
        Bullet.prototype.update = function () {
            if (this.InFlight) {
                this.x -= this.Speed;
            }
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
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
                    if (other.name === 'bullet' || other.name === 'bulletPlayer') {
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
                    if (other.name === 'injured') {
                        createjs.Sound.play("thanks");
                        prime.Reset();
                        other.Reset();
                        core.score += 10;
                        core.peopleSaved += 1;
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
var objects;
(function (objects) {
    /**
     * This is the treasure object used in the game
     *
     * @class Treasure
     * @extends {objects.GameObject}
     */
    var InjuredPeople = (function (_super) {
        __extends(InjuredPeople, _super);
        /**
         * Creates an instance of Treasure.
         * @constructor
         */
        function InjuredPeople() {
            _super.call(this, 'injured');
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @returns {void}
         */
        InjuredPeople.prototype.Reset = function () {
            this._dx = Math.floor(Math.random() * 8) + 3;
            this.x = 800 + this.width;
            this.y = Math.floor(Math.random() * ((480 - this.width) - 200 + 1) + 200);
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        InjuredPeople.prototype._checkBounds = function () {
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
        InjuredPeople.prototype.start = function () {
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
        InjuredPeople.prototype.update = function () {
            // this.y += this._dx;
            this.x -= this._dx;
            this.position = new objects.Vector2(this.x, this.y);
            this._checkBounds();
        };
        return InjuredPeople;
    }(objects.GameObject));
    objects.InjuredPeople = InjuredPeople;
})(objects || (objects = {}));
var scenes;
(function (scenes) {
    var Over = (function (_super) {
        __extends(Over, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Over() {
            _super.call(this);
        }
        /**
         *
         */
        Over.prototype.Start = function () {
            this._bgImg = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImg);
            this._gameoversound = createjs.Sound.play('gameover');
            // Add Menu Label
            this._gameOverLabel = new objects.Label("Too many shark bites", "bold 45px", "Consolas", "#ee0", 400, 100);
            this.addChild(this._gameOverLabel);
            // add the start button
            this._restartButton = new objects.Button("playagain", 250, 400, true);
            this.addChild(this._restartButton);
            this._menuButton = new objects.Button("menu", 600, 400, true);
            this.addChild(this._menuButton);
            /**
             * Score
             */
            if (core.score > core.highScore) {
                core.highScore = core.score;
            }
            this.addChild(new objects.Label('Score: ' + core.score, '35px', 'Tahoma, Geneva, sans-serif', '#ddd', 250, 200));
            this.addChild(new objects.Label('High Score: ' + core.highScore, '35px', 'Tahoma, Geneva, sans-serif', '#ddd', 600, 200));
            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            this._menuButton.on('click', this._menuButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Over.prototype.Update = function () {
            // scene updates happen here...
            this._bgImg.x -= 5;
            this.checkBounds();
        };
        Over.prototype.checkBounds = function () {
            // if (this._bgImg.x<(-(this._bgImg.getBounds().width-640))) {
            if (this._bgImg.x < (-1060)) {
                this._bgImg.x = 0;
            }
        };
        Over.prototype._stopSound = function () {
            this._gameoversound.stop();
        };
        // EVENT HANDLERS ++++++++++++++++
        Over.prototype._restartButtonClick = function (event) {
            this._stopSound();
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        Over.prototype._menuButtonClick = function (event) {
            this._stopSound();
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Over;
    }(objects.Scene));
    scenes.Over = Over;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    /**
     * This is the Level 1 Scene object used in the game
     *
     * @class Level1
     * @extends {objects.Scene}
     */
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        /**
         * Creates an instance of Level1.
         *
         */
        function Level1() {
            _super.call(this);
        }
        // Public methods
        /**
         * Start method for Level1
         */
        Level1.prototype.Start = function () {
            var _this = this;
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            //creates and adds shark/ship objects
            this._player = new objects.Player("diver");
            this._sharks = [
                new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
            ];
            // add background object to scene
            this.addChild(this._bgImage);
            // this._bubbles.forEach(bubble => {
            // 	this.addChild(bubble);
            // });
            // add player to scene
            this.addChild(this._player);
            // add shark to scene
            //add Sharks with foreach loop (3 sharks)
            this._sharks.forEach(function (shark) {
                _this.addChild(shark);
            });
            //Add and create heart icon
            this._heart = new objects.Heart();
            this.addChild(this._heart);
            //create and add bullet objects (10)
            this._bullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.Bullet("bullet"));
                this.addChild(this._bullets[bullet]);
            }
            // add score and lives manager
            core.lives = 10;
            core.score = 0;
            core.peopleSaved = 0;
            core.bossLives = 20;
            this._livesLbl = new objects.Label("Lives: " + core.lives, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 100, 45);
            this.addChild(this._livesLbl);
            this._scoreLbl = new objects.Label("Score: " + core.score, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
            this.addChild(this._scoreLbl);
            // add a collision managers
            this._collision = new managers.Collision();
            // add scene to stage
            core.stage.addChild(this);
            // start sound
            this._themeSound = createjs.Sound.play('level1_music');
            this._themeSound.loop = -1;
            //Shoot with mouseclick function
            this.on('click', function () {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            });
        };
        Level1.prototype.Update = function () {
            var _this = this;
            this._bgImage.x -= .5;
            this._bullets.forEach(function (bullet) {
                // update each bullet
                bullet.update();
            });
            // update player	
            this._player.update();
            // update shark + player
            this._sharks.forEach(function (shark) {
                shark.update();
                _this._collision.check(_this._player, shark);
            });
            //update shark + bullet
            this._sharks.forEach(function (shark) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(shark, bullet);
                });
            });
            // update treasure
            this._heart.update();
            this._collision.check(this._player, this._heart);
            //Death condition
            if (core.lives < 1) {
                this._themeSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            //Level 2 condition
            if (core.score > 290) {
                this._themeSound.stop();
                core.scene = config.Scene.L1TOL2;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            // update score and lives
            this._livesLbl.text = "Lives: " + core.lives;
            this._scoreLbl.text = "Score: " + core.score;
            this.checkBounds();
        };
        /**
         *
         *
         * @private
         */
        Level1.prototype.checkBounds = function () {
            // if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
            if (this._bgImage.x < (-1060)) {
                this._bgImage.x = 0;
            }
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    /**
     * The scene between 1 and 2
     *
     * @export scenes
     * @class L1toL2
     * @extends {objects.Scene}
     */
    var L1toL2 = (function (_super) {
        __extends(L1toL2, _super);
        /**
         * Creates an instance of L1toL2.
         *
         */
        function L1toL2() {
            _super.call(this);
        }
        /**
         * Starts the scene
         */
        L1toL2.prototype.Start = function () {
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
            this._startButton.on('click', this._startButtonClick, this);
            // instructions button even listener
            this._instruction.on('click', this._instructionButtonClick, this);
            // End button event listener
            this._exitButton.on('click', this._endButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * scene updates happen here...
         */
        L1toL2.prototype.Update = function () {
            this._bgImage.x -= .5;
            this.checkBounds();
        };
        L1toL2.prototype.checkBounds = function () {
            // if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
            if (this._bgImage.x < (-1060)) {
                this._bgImage.x = 0;
            }
        };
        // EVENT HANDLERS ++++++++++++++++
        L1toL2.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.LEVEL2;
            core.changeScene();
        };
        L1toL2.prototype._endButtonClick = function (event) {
            core.scene = config.Scene.WIN;
            core.changeScene();
        };
        L1toL2.prototype._instructionButtonClick = function (event) {
            core.scene = config.Scene.INSTRUCTIONS;
            core.changeScene();
        };
        return L1toL2;
    }(objects.Scene));
    scenes.L1toL2 = L1toL2;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        /**
         * Creates an instance of Play.
         *
         */
        function Level2() {
            _super.call(this);
        }
        // Public methods
        /**
         * Start method
         */
        Level2.prototype.Start = function () {
            var _this = this;
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImgL2"));
            this._player = new objects.Player("player_level3");
            this._sharks = [
                new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
            ];
            // add objects to scent
            this.addChild(this._bgImage);
            // add player to scene
            this.addChild(this._player);
            // add shark to scene
            this._sharks.forEach(function (shark) {
                _this.addChild(shark);
            });
            this._injuredPeople = new objects.InjuredPeople();
            this.addChild(this._injuredPeople);
            this._bullets = new Array();
            for (var bullet = 0; bullet < 10; bullet++) {
                this._bullets.push(new objects.Bullet("bulletPlayer"));
                this.addChild(this._bullets[bullet]);
            }
            this._livesLbl = new objects.Label("Lives: " + core.lives, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 100, 45);
            this.addChild(this._livesLbl);
            this._scoreLbl = new objects.Label("Score: " + core.score, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
            this.addChild(this._scoreLbl);
            this._peopleSavedLbl = new objects.Label("People Saved: " + core.peopleSaved, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 400, 45);
            this.addChild(this._peopleSavedLbl);
            // add a collision managers
            this._collision = new managers.Collision();
            // add scene to stage
            core.stage.addChild(this);
            // start sound
            this._themeSound = createjs.Sound.play('epic');
            // this._themeSound.volume = 0.2;
            this._themeSound.loop = -1;
            this.on('click', function () {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            });
        };
        Level2.prototype.Update = function () {
            var _this = this;
            this._bgImage.x -= .5;
            this._bullets.forEach(function (bullet) {
                // update each bullet
                bullet.update();
            });
            // update player	
            this._player.update();
            // update shark + player
            this._sharks.forEach(function (shark) {
                shark.update();
                _this._collision.check(_this._player, shark);
            });
            //update shark + bullet
            this._sharks.forEach(function (shark) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(shark, bullet);
                });
            });
            // update treasure
            this._injuredPeople.update();
            this._collision.check(this._player, this._injuredPeople);
            if (core.lives < 1) {
                this._themeSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            if (core.peopleSaved > 9) {
                this._themeSound.stop();
                core.scene = config.Scene.L2TOL3;
                core.changeScene();
                this.off('click', null); // Remove event handler
            }
            // update score and lives
            this._livesLbl.text = "Lives: " + core.lives;
            this._scoreLbl.text = "Score: " + core.score;
            this._peopleSavedLbl.text = "People Saved: " + core.peopleSaved;
            this.checkBounds();
        };
        /**
         * Allowing for bounds checking
         *
         * @private
         */
        Level2.prototype.checkBounds = function () {
            // if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
            if (this._bgImage.x < (-2433)) {
                this._bgImage.x = 0;
            }
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Win() {
            _super.call(this);
        }
        /**
         *
         */
        Win.prototype.Start = function () {
            this._bgImg = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImg);
            this._gameoversound = createjs.Sound.play('gameover');
            // Add Menu Label
            this._gameOverLabel = new objects.Label("Congratulations you killed the Sharkmada", "bold 30px", "Consolas", "#ee0", config.Screen.WIDTH - 420, 100);
            this._gameOverLabel2 = new objects.Label("and saved the galaxy!", "bold 30px", "Consolas", "#ee0", config.Screen.WIDTH - 420, 120);
            this.addChild(this._gameOverLabel);
            this.addChild(this._gameOverLabel2);
            // add the start button
            this._restartButton = new objects.Button("playagain", 250, 400, true);
            this.addChild(this._restartButton);
            this._menuButton = new objects.Button("menu", 600, 400, true);
            this.addChild(this._menuButton);
            /**
             * Score
             */
            if (core.score > core.highScore) {
                core.highScore = core.score;
            }
            this.addChild(new objects.Label('Score: ' + core.score, '35px', 'Tahoma, Geneva, sans-serif', '#ddd', 250, 200));
            this.addChild(new objects.Label('High Score: ' + core.highScore, '35px', 'Tahoma, Geneva, sans-serif', '#ddd', 600, 200));
            // Start button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            this._menuButton.on('click', this._menuButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Win.prototype.Update = function () {
            // scene updates happen here...
            this._bgImg.x -= 5;
            this.checkBounds();
        };
        Win.prototype.checkBounds = function () {
            // if (this._bgImg.x<(-(this._bgImg.getBounds().width-640))) {
            if (this._bgImg.x < (-1060)) {
                this._bgImg.x = 0;
            }
        };
        Win.prototype._stopSound = function () {
            this._gameoversound.stop();
        };
        // EVENT HANDLERS ++++++++++++++++
        Win.prototype._restartButtonClick = function (event) {
            this._stopSound();
            // Switch the scene
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        Win.prototype._menuButtonClick = function (event) {
            this._stopSound();
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));
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
            // drop shadow
            this._textShadow = new createjs.Shadow('#000', 0, 0, 3);
            this._bgImage = new createjs.Bitmap(core.assets.getResult('bgPlayImgL2'));
            this.addChild(this._bgImage);
            this._player = new objects.Player('player_level3');
            this.addChild(this._player);
            this._bullets = new Array();
            for (var bullet = 0; bullet < 5; bullet++) {
                this._bullets.push(new objects.Bullet('bulletPlayer'));
                this.addChild(this._bullets[bullet]);
            }
            this._finalBoss = new objects.FinalBoss('finalBoss');
            this.addChild(this._finalBoss);
            this._lblBossLives = new objects.Label('Boss Lives: ' + core.bossLives, '35px', "Tahoma, Geneva, sans-serif", "#ff0", 150, 45);
            this._lblBossLives.shadow = this._textShadow;
            this.addChild(this._lblBossLives);
            this._lblLives = new objects.Label('Your Lives: ' + core.lives, '34px', "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
            this._lblLives.shadow = this._textShadow;
            this.addChild(this._lblLives);
            this._stars = new Array();
            for (var i = 0; i < 3; i++) {
                var star = new objects.Star('star');
                this._stars.push(star);
                this.addChild(star);
            }
            // Collision manager
            this._collision = new managers.Collision();
            this._themeSound = createjs.Sound.play('level3_music');
            this._themeSound.loop = -1;
            core.stage.addChild(this);
            this.on('click', function () {
                for (var bullet in this._bullets) {
                    if (!this._bullets[bullet].InFlight) {
                        this._bullets[bullet].Fire(this._player.position);
                        break;
                    }
                }
            });
        };
        /**
         * Update method
         *
         * @returns voids
         */
        Level3.prototype.Update = function () {
            var _this = this;
            // Update background image
            this._bgImage.x -= 2;
            // update player
            this._player.update();
            // update final boss
            this._finalBoss.update();
            // lives lbl
            this._lblLives.text = 'Lives: ' + core.lives;
            // boss lives lbl
            this._lblBossLives.text = 'Boss Lives: ' + core.bossLives;
            // _collision star and player
            this._stars.forEach(function (star) {
                _this._collision.check(_this._player, star);
                star.update();
            });
            // Collision between star and bullet
            this._stars.forEach(function (star) {
                _this._bullets.forEach(function (bullet) {
                    _this._collision.check(star, bullet);
                });
            });
            // Collision between bullet and boss
            this._bullets.forEach(function (bullet) {
                _this._collision.check(_this._finalBoss, bullet);
            });
            // update bullets
            this._bullets.forEach(function (bullet) {
                bullet.update();
            });
            // Collision check between player and boss
            this._collision.check(this._player, this._finalBoss);
            //this._collision.check(this._player)
            if (core.lives < 1) {
                core.scene = config.Scene.OVER;
                core.changeScene();
                this._themeSound.stop();
            }
            if (core.bossLives < 1) {
                core.scene = config.Scene.WIN;
                core.changeScene();
                this._themeSound.stop();
            }
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
            // add background image
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImage);
            // Add Menu Label
            this._menuLabel = new objects.Label("Shark Attack 3: In Space", "60px", "Tahoma, Geneva, sans-serif", "#eee", config.Screen.HALF_WIDTH, 140);
            this._menuLabel.shadow = new createjs.Shadow("#fff", 0, 0, 15);
            this.addChild(new objects.Label("The sharks are back but now in space", "30px", "Tahoma, Geneva, sans-serif", "#ff0", config.Screen.HALF_WIDTH, 250));
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startBtn", 250, 400, true);
            this.addChild(this._startButton);
            this._instruction = new objects.Button("instructionsBtn", 600, 400, true);
            this.addChild(this._instruction);
            // end Button
            this._exitButton = new objects.Button("exitButton", config.Screen.HALF_WIDTH, config.Screen.HEIGHT - 35, true);
            this.addChild(this._exitButton);
            // Start button event listener
            this._startButton.on('click', this._startButtonClick, this);
            // instructions button even listener
            this._instruction.on('click', this._instructionButtonClick, this);
            // End button event listener
            this._exitButton.on('click', this._endButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        /**
         * scene updates happen here...
         */
        Menu.prototype.Update = function () {
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
        Menu.prototype._endButtonClick = function (event) {
            core.scene = config.Scene.WIN;
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
var scenes;
(function (scenes) {
    /**
     * This scene show the user
     * how to play this game
     *
     * @export
     * @class Instructions
     * @extends {objects.Scene}
     */
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        function Instructions() {
            _super.call(this);
        }
        // Public methods
        /**
         * Start method
         */
        Instructions.prototype.Start = function () {
            // background image
            this._bgImg = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImg);
            // title Label
            this.addChild(new objects.Label('Instructions', 'bold 45px', 'Tahoma, Geneva, sans-serif', '#fd0', config.Screen.HALF_WIDTH, 50));
            // add diver iamge 
            this._diver = new createjs.Bitmap(core.assets.getResult('diver'));
            this._diver.x = 20;
            this._diver.y = 100;
            this.addChild(this._diver);
            this._person = new createjs.Bitmap(core.assets.getResult('player_level3'));
            this._person.x = 150;
            this._person.y = 100;
            this.addChild(this._person);
            // diver infor Label
            this.addChild(new objects.Label('These are your players.\nUse your mouse to move the player', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 590, 125));
            // add shark images
            this._shark = new createjs.Bitmap(core.assets.getResult('shark'));
            this._shark.x = 20;
            this._shark.y = 200;
            this.addChild(this._shark);
            // add shark info
            this.addChild(new objects.Label('Watch out for these sharks.\nSome can more really fast', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 565, 225));
            // add treasure image
            this._treasure = new createjs.Bitmap(core.assets.getResult('treasure'));
            this._treasure.x = 25;
            this._treasure.y = 300;
            this.addChild(this._treasure);
            // add treasure info
            this.addChild(new objects.Label('For extra lives, collect hearts.\nThere are many in the first level', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 605, 325));
            // buttons
            // start game
            this._startButton = new objects.Button("startBtn", 250, 425, true);
            this._startButton.on('click', this._startButtonClick, this);
            this.addChild(this._startButton);
            // menu
            this._menuButton = new objects.Button('menu', 635, 425, true);
            this._menuButton.on('click', this._menuButtonClick, this);
            this.addChild(this._menuButton);
            // add scene to stage
            core.stage.addChild(this);
        };
        /**
         * Starts the game
         *
         * @private
         * @param {createjs.MouseEvent} event
         * @returns void
         */
        Instructions.prototype._startButtonClick = function (event) {
            core.scene = config.Scene.LEVEL1;
            core.changeScene();
        };
        /**
         * Takes user back to the menu scene
         *
         * @private
         * @param {createjs.MouseEvent} even
         * @returns void
         */
        Instructions.prototype._menuButtonClick = function (even) {
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../config/scene.ts"/>
/// <reference path="../config/screen.ts"/>
/// <reference path="../objects/asset/asset.ts"/>
/// <reference path="../objects/button/button.ts"/>
/// <reference path="../objects/label/label.ts"/>
/// <reference path="../objects/bubbles/bubble.ts" />
/// <reference path="../objects/vector2/vector2.ts" />
/// <reference path="../objects/gameobject/gameobject.ts" />
/// <reference path="../objects/star/star.ts" />
/// <reference path="../objects/scene/scene.ts"/>
/// <reference path="../objects/player/player.ts"/>
/// <reference path="../objects/shark/shark.ts"/>
/// <reference path="../objects/bullet/bullet.ts"/>
/// <reference path="../managers/collision.ts" />
/// <reference path="../objects/treasure/treasure.ts" />
/// <reference path="../objects/treasure/injuredpeople.ts" />
/// <reference path="../scenes/over/over.ts"/>
/// <reference path="../scenes/level1/level1.ts"/>
/// <reference path="../scenes/level1to2transition/level1to2.ts"/>
/// <reference path="../scenes/level2/level2.ts"/>
/// <reference path="../scenes/win/win.ts"/>
/// <reference path="../scenes/level3/level3.ts"/>
/// <reference path="../scenes/menu/menu.ts"/>
/// <reference path="../scenes/instructions/instructions.ts"/> 
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
        /**
         * Init of final boss
         *
         * @public
         * @returns {void}
         */
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
//# sourceMappingURL=game.js.map