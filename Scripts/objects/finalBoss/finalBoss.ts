module objects{

	/**
	 * This class will control the Final Boss
	 * 
	 * @export
	 * @class FinalBoss
	 * @extends {objects.GameObject}
	 */
	export class FinalBoss extends objects.GameObject{
		// PRIVATE VARABLES +++++++++++++++++++++++++++++++++++++++
		private _dy:number;
		private _dx:number;


		// CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
		/**
		 * Creates an instance of FinalBoss.
		 * 
		 * @param {string} imgString
		 */
		constructor(imgString:string){
			super(imgString);
		}

		// PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++
		/**
		 *  This method checks if the object has reached its boundaries
		 * 
		 * @private
		 * @returns {void}
		 */
		private _checkBounds():void{

			// left wall
			if(this.x < (0+this.halfWidth)){
				this._dx=(-1)*this._dx;
			}

			// right wall
			if((this.x+this.width) > (config.Screen.WIDTH)){
				this._dx=(-1)*this._dx;
			}

			// top wall
			if (this.y < (0+this.halfHeight)) {
				this._dy=(-1)*this._dy;
			}

			// bottom wall
			if (this.y > (config.Screen.HEIGHT-this.height)) {
				this._dy=(-1)*this._dy;
			}

		}

		private _reset():void {
			this._dx=Math.floor(Math.random() * (6 - 1)) + 1;
			this._dy=Math.floor(Math.random() * (6 - 1)) + 1;
		}

		// PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

		public start():void{
			this._reset();

			this.x=config.Screen.HALF_WIDTH;
			this.y=config.Screen.HALF_HEIGHT;
		}

		public update():void{
			this.x-=this._dx;
			this.y-=this._dy;
			this._checkBounds();
		}


		
	}
}