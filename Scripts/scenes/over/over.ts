module scenes {
	export class Over extends objects.Scene {
		//  PRIVATE INSTANCE VARIABLES
		private _gameOverLabel: objects.Label;
		private _restartButton: objects.Button;
		private _menuButton: objects.Button;
		private _bgImg: createjs.Bitmap;
		private _gameoversound: createjs.AbstractSoundInstance;


		/**
		 * Creates an instance of Menu.
		 * 
		 */
		constructor() {
			super();
		}

		/**
		 * 
		 */
		public Start():void {
			this._bgImg=new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
			this.addChild(this._bgImg);
			this._gameoversound=createjs.Sound.play('gameover');
			// Add Menu Label
			this._gameOverLabel = new objects.Label(
				"Too many shark bites", "bold 45px","Consolas", "#ee0",
				320, 100
			);
			this.addChild(this._gameOverLabel);

			// add the start button
			this._restartButton = new objects.Button(
				"playagain", 200, 400, true
			);
			this.addChild(this._restartButton);

			this._menuButton = new objects.Button(
				"menu", 450, 400, true
			);
			this.addChild(this._menuButton);

			/**
			 * Score
			 */
			if (core.score>core.highScore) {
				core.highScore=core.score;
			}
			this.addChild(new objects.Label('Score: '+core.score,'35px', 'Tahoma, Geneva, sans-serif', '#ddd', 150,200));
			this.addChild(new objects.Label('High Score: '+core.highScore,'35px', 'Tahoma, Geneva, sans-serif', '#ddd', 450,200));

			// Start button event listener
			this._restartButton.on("click", this._restartButtonClick, this);
			this._menuButton.on('click', this._menuButtonClick, this);

			// add this scene to the global scene container
			core.stage.addChild(this);
		}

		public Update():void {
			// scene updates happen here...
			this._bgImg.x-=5;
			this.checkBounds();
		}

		private checkBounds() {
			// if (this._bgImg.x<(-(this._bgImg.getBounds().width-640))) {
			if (this._bgImg.x<(-1060)) {
				this._bgImg.x=0;
			}
		}
		private _stopSound(){
			this._gameoversound.stop();
		}
		// EVENT HANDLERS ++++++++++++++++

		private _restartButtonClick(event:createjs.MouseEvent):void {
			this._stopSound();
			// Switch the scene
			core.scene = config.Scene.LEVEL1;
			core.changeScene();
		}

		private _menuButtonClick(event:createjs.MouseEvent):void{
			this._stopSound();
			// Switch the scene
			core.scene = config.Scene.MENU;
			core.changeScene();
		}
	}
}