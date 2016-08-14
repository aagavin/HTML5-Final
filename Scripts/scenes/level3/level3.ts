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
			this.addChild(this._lblScore);

			this._lblScore = new objects.Label('Score'+core.score,'35px', "Tahoma, Geneva, sans-serif","#fff",150,45);
			this.addChild(this._player);

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
			// console.log(this._player.y);
			

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