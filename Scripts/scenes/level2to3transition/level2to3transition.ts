module scenes{
	export class L2toL3 extends objects.Scene{
		//  PRIVATE INSTANCE VARIABLES
		private _menuLabel: objects.Label;
		private _menuLabel2: objects.Label;
		private _startButton: objects.Button;
		private _instruction: objects.Button;
		private _exitButton: objects.Button;
		private _bgImage:createjs.Bitmap;

		/**
		 * Creates an instance of L2toL3.
		 * 
		 */
		constructor() {
			super();
		}

		public Start():void {
			// add background image
			this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
			this.addChild(this._bgImage);

			// Add Menu Label
			this._menuLabel = new objects.Label(
				"Congratulations!", "40px","Tahoma, Geneva, sans-serif", "#eee",
				config.Screen.HALF_WIDTH, 140
			);
			this._menuLabel.shadow=new createjs.Shadow("#fff", 0,0,15);
            this._menuLabel2 = new objects.Label(
				"You made it past the frontlines to the enemy ship.", "27px","Tahoma, Geneva, sans-serif", "#ff0",
				config.Screen.HALF_WIDTH, 200
			);
			//this._menuLabel2.shadow=new createjs.Shadow("#fff", 0,0,15);

			this.addChild(new objects.Label(
				"Save all the humans you come across while", "27px","Tahoma, Geneva, sans-serif", "#ff0",
				config.Screen.HALF_WIDTH, 230
			));
            this.addChild(new objects.Label(
				"you make your way to the Shark leader.", "27px","Tahoma, Geneva, sans-serif", "#ff0",
				config.Screen.HALF_WIDTH, 260
			));

			

			this.addChild(this._menuLabel);
            this.addChild(this._menuLabel2);


			// add the start button
			this._startButton = new objects.Button(
				"level2Btn", 250, 400, true
			);
			this.addChild(this._startButton);

			this._instruction= new objects.Button(
				"instructionsBtn", 600,400,true
			);
			this.addChild(this._instruction);

			// end Button
			this._exitButton = new objects.Button("exitButton", config.Screen.HALF_WIDTH, config.Screen.HEIGHT-35,true);
			this.addChild(this._exitButton);

			// Start button event listener
			// this._startButton.on('click', this._startButtonClick, this);
			// // instructions button even listener
			// this._instruction.on('click', this._instructionButtonClick, this);
			// // End button event listener
			// this._exitButton.on('click', this._endButtonClick,this);

			// add this scene to the global scene container
			core.stage.addChild(this);
		}

		/**
		 * scene updates happen here...
		 */
		public Update():void {

			this._bgImage.x-=.5;
			this.checkBounds();
		}

		private checkBounds():void {
			if (this._bgImage.x<(-1060)) {
				this._bgImage.x=0;
			}
		}

		// EVENT HANDLERS ++++++++++++++++

	}
}