/// <reference path="_reference.ts"/>
/**
 * @author Aaron Fernandes & Arlina Ramrattan
 * @studentID 300773526 & 300799246
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
    core.lives = 0;
    core.highScore = 0;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
    var over;
    var level1;
    var level2;
    var level3;
    var instruction;
    // asset manifest for images and sounds
    var assetData = [
        { id: "instructionsBtn", src: "../../Assets/images/instructions.png" },
        { id: "bgPlayImg", src: "../../Assets/images/bg.jpg" },
        { id: "bubble", src: "../../Assets/images/bubble2.png" },
        { id: "diver", src: "../../Assets/images/diver.png" },
        { id: "shark", src: "../../Assets/images/shark.png" },
        { id: "startBtn", src: "../../Assets/images/startBtn.png" },
        { id: "treasure", src: "../../Assets/images/treasure.png" },
        { id: "playagain", src: "../../Assets/images/playagain.png" },
        { id: "menu", src: "../../Assets/images/menu.png" },
        { id: "theduel", src: "../../Assets/audio/theduel.ogg" },
        { id: "comic-bite", src: "../../Assets/audio/comic-bite.ogg" },
        { id: "coin", src: "../../Assets/audio/coin.ogg" },
        { id: "gameover", src: "../../Assets/audio/gameover.ogg" }
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
                level2 = new scenes.Level1();
                currentScene = level2;
                break;
            // Level 3
            case config.Scene.LEVEL3:
                core.stage.removeAllChildren();
                level1 = new scenes.Level1();
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
        }
    }
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map