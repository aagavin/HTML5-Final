module objects {

	/**
	 * This is the Player object used in the game
	 * 
	 * @export
	 * @class Player
	 * @extends {objects.GameObject}
	 */
	export class Star extends objects.GameObject {
		// PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
		private _dx:number;
		private _dy:number;
		private _spinNumber:number;

		// CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
		/**
		 * Creates an instance of Island.
		 * 
		 * @constructor
		 * @param {string} imageString
		 */
		constructor(imageString: string) {
			super(imageString);

			this.start();
		}

		/**
		* This method checks if the object has reached its boundaries
		* 
		* @private
		* @method _checkBounds
		* @returns {void}
		*/
		private _checkBounds(): void {
			if((this.x+this.halfWidth)<0){
				this._reset();
			}

			if (this.y<(this.halfHeight)) {
				this._dy=(-1)*this._dy;
			}

			if(this.y>config.Screen.HEIGHT){
				this._dy=(-1)*this._dy;
			}
		}

		private _reset():void {
			this._dx=Math.floor(Math.random() * (7 - 2)) + 2;
			this._dy=Math.floor(Math.random() * (7 - 2)) + 2;

			this.x = config.Screen.WIDTH+this.width;
			this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - 15)) + 15;
		}

		// PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

		/**
		 * This method is used to initialize public properties 
		 * and private instance variables
		 * 
		 * @public 
		 * @method start
		 * @returns {void}
		 */

		public start(): void {

			this.width=this.getBounds().width;
			this.height=this.getBounds().height;
			
			this.regX = this.width * 0.5;
			this.regY = this.height * 0.5;
			
			this._spinNumber=Math.floor(Math.random() * (15 - 5)) + 5;
			this._reset()
		}

		/**
		 * This method updates the objects properties every time it's called
		 * 
		 * @public
		 * @param {Vector2} playerLoc
		 * @returns {void}
		 */
		public update(): void {
			this.x -= this._dx;
			this.y -= this._dy;
			
			this.position=new objects.Vector2(this.x,this.y);

			this.rotation += this._spinNumber;
			// this.y=core.stage.mouseY;
			this._checkBounds();
		}
	}
}