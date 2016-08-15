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
	export let score:number = 0;
	export let lives:number = 0;
	export let highScore:number = 0;

 


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



	// asset manifest for images and sounds
	let assetData:objects.Asset[] = [
		{ id: "instructionsBtn", src: "../../Assets/images/instructions.png" },
		{ id: "bgPlayImg", src: "../../Assets/images/bg.jpg"},
		{ id: "bgPlayImgL2", src: "../../Assets/images/spaceshipinterior.jpg"},
		{ id: "bubble", src: "../../Assets/images/bubble2.png"},
		{ id: "diver", src: "../../Assets/images/spaceship.png"},
		{ id: "shark", src: "../../Assets/images/shark.png"},
   		{ id: "startBtn", src: "../../Assets/images/startBtn.png"},
		{ id: "treasure", src: "../../Assets/images/treasure.png"},
		{ id: "bullet", src: "../../Assets/images/bullet.png"},
		{ id: "laser", src: "../../Assets/audio/laser.wav"},
		{ id: "playagain", src: "../../Assets/images/playagain.png"},
		{ id: "menu", src: "../../Assets/images/menu.png"},
		{ id: "shipEngine", src: "../../Assets/audio/spaceshipEngineShor.mp3"},
		{ id: "theduel", src: "../../Assets/audio/theduel.ogg"},
		{ id: "comic-bite", src: "../../Assets/audio/comic-bite.ogg"},
		{ id: "coin", src: "../../Assets/audio/lifeup.wav"},
		{ id: "death", src: "../../Assets/audio/death.wav"},
		{ id: "gameover", src: "../../Assets/audio/gameover.ogg"}
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
		}
	}



	//wait until the window object is finished loading then call the init method
	window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++