module objects{

	/**
	 * This is the Treasure object used in the game
	 * Update: It shows a heart icon
	 * @class Treasure
	 * @extends {objects.GameObject}
	 */
	export class Heart extends objects.GameObject{
		// prvate instand varables
		private _dx:number;

		/**
		 * Creates an instance of Treasure.
		 * @constructor
		 */
		constructor() {
			super('treasure');
			this.start();
		}

		// PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
	
		/**
		 * This method checks if the object has reached its boundaries
		 * 
		 * @private
		 * @returns {void}
		 */
		 public Reset():void{
			this._dx = Math.floor(Math.random() * 3) + 2;

			this.x=5000+this.width;
			this.y= Math.floor(Math.random()*((480-this.width)-200+1)+200);
		}

		/**
		 * This method checks if the object has reached its boundaries
		 *
		 * @private
		 * @method _checkBounds
		 * @returns {void}
		 */
		private _checkBounds():void {
			if(this.x <= -(this.width*2)) {
				this.Reset();
			}
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
		public start():void {
			this.width=this.getBounds().width;
			this.height=this.getBounds().height;
			this.regX = this.width * 0.5;
			this.regY = this.height * 0.5;

			this.Reset();
		}

		/**
		 * This method updates the object's properties
		 * every time it's called
		 *
		 * @public
		 * @method update
		 * @returns {void}
		 */
		public update():void{
			// this.y += this._dx;
			this.x -= this._dx;
			this.position=new Vector2(this.x, this.y);
			this._checkBounds();
		}

		


	}
} 