module objects {

    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Player extends objects.GameObject {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++


        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++


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
            // checkbounds to stop player from going outside

            // check right bounds
            if(this.y >= (480 - (this.height * 0.5))) {
                this.y = (480 - (this.height * 0.5));
            }

            // check left bounds
            if(this.y <= (0 + (this.height * 0.5))) {
                this.y = (0 + (this.height * 0.5));
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
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.y = 215;
            this.x=30;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update():void {
            // player to follow mouse
            this.position=new objects.Vector2(this.x,this.y);
            
            this.y=core.stage.mouseY;
            this._checkBounds();
        }
    }
}