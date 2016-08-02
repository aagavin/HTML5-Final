module scenes {
	export class Menu extends objects.Scene {
		//  PRIVATE INSTANCE VARIABLES
		private _menuLabel: objects.Label;
		private _startButton: objects.Button;
		private _instruction: objects.Button;
		private _bgImage:createjs.Bitmap;
		private _bubbles:Array<objects.Bubble>;

		/**
		 * Creates an instance of Menu.
		 * 
		 */
		constructor() {
			super();
		}

		/**
		 * Starts the scene
		 */
		public Start():void {
			// add background image
			this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
			this.addChild(this._bgImage);

			// add bubble effect
			this._bubbles = [
				new objects.Bubble(false),new objects.Bubble(false),new objects.Bubble(false),
				new objects.Bubble(false),new objects.Bubble(false),new objects.Bubble(false)
			];
			this._bubbles.forEach(bubble => {
				this.addChild(bubble);
			});


			// Add Menu Label
			this._menuLabel = new objects.Label(
				"Space Shark Attack 3", "60px","Tahoma, Geneva, sans-serif", "#eee",
				400, 140
			);
			this.addChild(new objects.Label(
				"Space Shark Attack 3", "60px","Tahoma, Geneva, sans-serif", "#000",
				403, 143
			));

			this.addChild(new objects.Label(
				"The sharks are back but now in space", "30px","Tahoma, Geneva, sans-serif", "#ff0",
				403, 250
			));

			

			this.addChild(this._menuLabel);


			// add the start button
			this._startButton = new objects.Button(
				"startBtn", 150, 400, true
			);
			this.addChild(this._startButton);

			this._instruction= new objects.Button(
				"instructionsBtn", 475,400,true
			);
			this.addChild(this._instruction);

			// Start button event listener
			this._startButton.on("click", this._startButtonClick, this);
			// instructions button even listener
			this._instruction.on('click', this._instructionButtonClick, this);

			// add this scene to the global scene container
			core.stage.addChild(this);
		}

		/**
		 * scene updates happen here...
		 */
		public Update():void {
			this._bubbles.forEach(bubble => {
				bubble.update();
			});

			this._bgImage.x-=.5;
			this.checkBounds();
		}

		private checkBounds():void {
			// if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
			if (this._bgImage.x<(-1060)) {
				this._bgImage.x=0;
			}
		}

		// EVENT HANDLERS ++++++++++++++++

		private _startButtonClick(event:createjs.MouseEvent):void {
			// Switch the scene
			core.scene = config.Scene.LEVEL1;
			core.changeScene();
		}

		private _instructionButtonClick(event:createjs.MouseEvent):void {
			core.scene=config.Scene.INSTRUCTIONS;
			core.changeScene();
		}
	}
}