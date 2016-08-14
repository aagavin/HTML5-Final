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
				 private _playerLoction:Vector2;
				 private _bossLocation:Vector2;

        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString:string) {
            super(imageString)

            this.start();
        }

         /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        private _checkBounds():void {

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
					this.rotation+=5;
        }


				/**
				 * This sets the players location
				 * 
				 * @public
				 * @param {Vector2} player Location
				 */
				public setLoc(playerLocation:Vector2, bossLocation:Vector2):void{
					this._playerLoction=playerLocation;
					this._bossLocation=bossLocation;
				}

        /**
         * This method updates the objects properties every time it's called
				 * 
         * @public
         * @param {Vector2} playerLoc
				 * @returns {void}
         */
        public update():void {
            // // player to follow mouse
            // this.position=new objects.Vector2(this.x,this.y);
            
            // this.y=core.stage.mouseY;
            this._checkBounds();
        }
    }
}