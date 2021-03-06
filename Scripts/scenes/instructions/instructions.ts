module scenes {

	/**
	 * This scene show the user 
	 * how to play this game
	 * 
	 * @export
	 * @class Instructions
	 * @extends {objects.Scene}
	 */
	export class Instructions extends objects.Scene {
		//  PRIVATE INSTANCE VARIABLES
		// bg image
		private _bgImg: createjs.Bitmap;
		// buttons
		private _startButton: objects.Button;
		private _menuButton: objects.Button;
		// Labels
		private _titleLbl:objects.Label;
		// Images
		private _diver:createjs.Bitmap;
		private _person: createjs.Bitmap;
		private _shark:createjs.Bitmap;
		private _treasure:createjs.Bitmap;


		constructor() {
			super();
		}

		// Public methods
		/**
		 * Start method
		 */
		public Start():void{
			// background image
			this._bgImg=new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
			this.addChild(this._bgImg);

			// title Label
			this.addChild(new objects.Label('Instructions','bold 45px','Tahoma, Geneva, sans-serif', '#fd0',config.Screen.HALF_WIDTH,50));
			// add diver iamge 
			this._diver=new createjs.Bitmap(core.assets.getResult('diver'));
			this._diver.x=20;
			this._diver.y=100;
			this.addChild(this._diver);

			this._person = new createjs.Bitmap(core.assets.getResult('player_level3'));
			this._person.x=150;
			this._person.y=100;
			this.addChild(this._person);

			// diver infor Label
			this.addChild(new objects.Label('These are your players.\nUse your mouse to move the player', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 590,125)); 

			// add shark images
			this._shark=new createjs.Bitmap(core.assets.getResult('shark'));
			this._shark.x=20;
			this._shark.y=200;
			this.addChild(this._shark);

			// add shark info
			this.addChild(new objects.Label('Watch out for these sharks.\nSome can more really fast', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 565, 225));

			// add treasure image
			this._treasure=new createjs.Bitmap(core.assets.getResult('treasure'));
			this._treasure.x=25;
			this._treasure.y=300;
			this.addChild(this._treasure);

			// add treasure info
			this.addChild(new objects.Label('For extra lives, collect hearts.\nThere are many in the first level', '25px', 'Tahoma, Geneva, sans-serif','#ddd', 605, 325));
			
			// buttons
			// start game
			this._startButton=new objects.Button("startBtn", 250, 425, true);
			this._startButton.on('click', this._startButtonClick, this);
			this.addChild(this._startButton);
			// menu
			this._menuButton=new objects.Button('menu', 635,425, true);
			this._menuButton.on('click', this._menuButtonClick, this);
			this.addChild(this._menuButton);
			
			// add scene to stage
			core.stage.addChild(this);

		}

		/**
		 * Starts the game
		 * 
		 * @private
		 * @param {createjs.MouseEvent} event
		 * @returns void
		 */
		private _startButtonClick(event:createjs.MouseEvent):void {
			core.scene=config.Scene.LEVEL1;
			core.changeScene();
		}

		/**
		 * Takes user back to the menu scene
		 * 
		 * @private
		 * @param {createjs.MouseEvent} even
		 * @returns void
		 */
		private _menuButtonClick(even:createjs.MouseEvent):void {
			core.scene=config.Scene.MENU;
			core.changeScene();
		}
	}
}