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

namespace core {

	// Variable Declarations

	// declare a reference to the Preloader
	export let assets: createjs.LoadQueue;
	// make a reference to the canvas element
	let canvas: HTMLElement = document.getElementById("canvas");
	// create a reference to a stage container
	export let stage: createjs.Stage;

	// Score and lives
	export let score: number = 0;
	export let lives: number = 10;
	export let bossLives: number = 20;
	export let highScore: number = 0;
	export let peopleSaved: number = 0;




	let startButton: objects.Button; // reference to our button class

	// declare scene variables
	let currentScene: objects.Scene;
	export let scene: number;

	let menu: scenes.Menu;
	let over: scenes.Over;
	let level1: scenes.Level1;
	let level2: scenes.Level2;
	let level3: scenes.Level3;
	let instruction: scenes.Instructions;
	let win: scenes.Win;
	let l1tol2: scenes.L1toL2;
	let l2tol3: scenes.L2toL3;



	// asset manifest for images and sounds
	let assetData: objects.Asset[] = [
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
	function preload(): void {
		assets = new createjs.LoadQueue(); // instantiates the loader
		assets.installPlugin(createjs.Sound);
		assets.on("complete", init, this);
		assets.loadManifest(assetData);
	}


	/**
	 * This method is the entry point for the application
	 *
	 * @method init
	 * @return {void}
	 */
	function init(): void {
		stage = new createjs.Stage(canvas); // instatiate the stage container
		stage.enableMouseOver(20);

		// setup the default scene
		scene = config.Scene.MENU;
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
	function gameLoop(event: createjs.Event): void {

		// call the scenes's update
		currentScene.Update();

		stage.update(); // refreshes the stage
	}


	export function changeScene(): void {
		//Launch Various Scenes
		switch (scene) {
			// Show the MENU Scene
			case config.Scene.MENU:
				stage.removeAllChildren();
				menu = new scenes.Menu();
				currentScene = menu;
				break;
			// Level 1
			case config.Scene.LEVEL1:
				stage.removeAllChildren();
				level1 = new scenes.Level1();
				currentScene = level1;
				break;
			// Level 2
			case config.Scene.LEVEL2:
				stage.removeAllChildren();
				level2 = new scenes.Level2();
				currentScene = level2;
				break;
			// Level 3
			case config.Scene.LEVEL3:
				stage.removeAllChildren();
				level3 = new scenes.Level3();
				currentScene = level3;
				break;
			// Show the GAME OVER Scene
			case config.Scene.OVER:
				stage.removeAllChildren();
				over = new scenes.Over();
				currentScene = over;
				break;
			case config.Scene.INSTRUCTIONS:
				stage.removeAllChildren();
				instruction = new scenes.Instructions();
				currentScene = instruction;
				break;
			case config.Scene.WIN:
				stage.removeAllChildren();
				win = new scenes.Win();
				currentScene = win;
				break;
			case config.Scene.L1TOL2:
				stage.removeAllChildren();
				l1tol2 = new scenes.L1toL2();
				currentScene = l1tol2;
				break;
			case config.Scene.L2TOL3:
				stage.removeAllChildren();
				l2tol3 = new scenes.L2toL3();
				currentScene = l2tol3;
				break;
		}
	}


	document.addEventListener("keyup", checkKeyPressed, false);

	function checkKeyPressed(key) {

		switch(key.keyCode){
			case '49':
				scene = config.Scene.LEVEL1;
				changeScene();
				break;
			case '50':
				scene = config.Scene.LEVEL2;
				changeScene();
				break;
			case '51':
				scene = config.Scene.LEVEL3;
				changeScene();
				break;
		}

	}


	//wait until the window object is finished loading then call the init method
	window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++