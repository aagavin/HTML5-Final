module scenes{
	/**
	 * This is level3
	 * 
	 * @export
	 * @class Level3
	 * @extends {objects.Scene}
	 */
	export class Level3 extends objects.Scene{
		private _bgImage:createjs.Bitmap;
		private _player:objects.Player;
		private _lblScore:objects.Label;
		private _lblLives:objects.Label;
		private _finalBoss:objects.FinalBoss;

		/**
		 * Creates an instance of Level3.
		 * 
		 */
		constructor(){
			super();
		}

		//***************** public methods *****************// 

		/**
		 * Start method
		 * 
		 * @returns voids
		 */
		public Start():void{

			this._bgImage = new createjs.Bitmap(core.assets.getResult('bgPlayImgL2'));
			this.addChild(this._bgImage);

			this._player = new objects.Player('player_level3');
			this.addChild(this._player);			

			this._finalBoss = new objects.FinalBoss('finalBoss');
			this.addChild(this._finalBoss);

			this._lblScore = new objects.Label('Score: '+core.score,'35px', "Tahoma, Geneva, sans-serif","#fff",150,45);
			this.addChild(this._lblScore);

			this._lblLives = new objects.Label('Lives: '+core.lives, '34px',"Tahoma, Geneva, sans-serif","#fff",700,45);
			this.addChild(this._lblLives);

			core.stage.addChild(this);
		}

		/**
		 * Update method
		 * 
		 * @returns voids
		 */
		public Update():void{
			// Update background image
			this._bgImage.x-=2;

			// update player
			this._player.update();			
			
			// update final boss
			this._finalBoss.update();
			

			this.checkBounds();
		}

		//***************** private methods *****************//

		/**
		 * check bounds of elements
		 * 
		 * @private
		 * @returns void
		 */
		private checkBounds():void {
			if (this._bgImage.x<(-2433)) {
				this._bgImage.x=0;
			}

		}

	}
}