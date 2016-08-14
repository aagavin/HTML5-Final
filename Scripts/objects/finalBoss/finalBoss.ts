module objects{

	/**
	 * This class will control the Final Boss
	 * 
	 * @class FinalBoss
	 * @extends {objects.GameObject}
	 */
	class FinalBoss extends objects.GameObject{


		// CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
		/**
		 * Creates an instance of FinalBoss.
		 * 
		 * @param {string} imgString
		 */
		constructor(imgString:string){
			super(imgString);
		}

		// PRIVATE PROPERTIES +++++++++++++++++++++++++++++++++++++++
		/**
		 *  This method checks if the object has reached its boundaries
		 * 
		 * @private
		 * @returns {void}
		 */
		private _checkBounds():void{

		}

		// PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

		public start():void{
			
		}


		
	}
}