module scenes{
	export class Level2 extends objects.Scene{
	
		// Private instance varables
		private _bgImage:createjs.Bitmap;
		private _bubbles:Array<objects.Bubble>;
		private _player:objects.Player;
		private _sharks:Array<objects.Shark>;
		private _collision: managers.Collision;
		private _treasure: objects.Treasure;
		private _themeSound: createjs.AbstractSoundInstance;
		private _scoreLbl:objects.Label;
		private _livesLbl:objects.Label;

		/**
		 * Creates an instance of Play.
		 * 
		 */
		constructor(){
			super();
		}

		// Public methods
		/**
		 * Start method
		 */
		public Start():void{
			// create play objects
			this._bgImage=new createjs.Bitmap(core.assets.getResult("bgPlayImgL2"));

			this._player=new objects.Player("diver");
			this._sharks=[
				new objects.Shark("shark"),new objects.Shark("shark"),new objects.Shark("shark")
			];
			

			// add objects to scent
			this.addChild(this._bgImage);
			// this._bubbles.forEach(bubble => {
			// 	this.addChild(bubble);
			// });

			// add player to scene
			this.addChild(this._player);
			// add shark to scene
			this._sharks.forEach(shark => {
				this.addChild(shark);
			});

			this._treasure=new objects.Treasure();
			this.addChild(this._treasure);

			// add score and lives manager
			core.lives=10;
			core.score=0;
			this._livesLbl=new objects.Label("Lives: "+core.lives,"35px","Tahoma, Geneva, sans-serif","#ff0",100,45);
			this.addChild(this._livesLbl);
			this._scoreLbl=new objects.Label("Score: "+core.score, "35px","Tahoma, Geneva, sans-serif", "#ff0",520,45);
			this.addChild(this._scoreLbl);

			// add a collision managers
			this._collision=new managers.Collision();

			// add scene to stage
			core.stage.addChild(this);
			// start sound
			this._themeSound=createjs.Sound.play('theduel');
			this._themeSound.loop=-1;

		}

		public Update():void {
			// 
			this._bgImage.x-=.75;
			console.log(this._bgImage.getBounds.length);
			


			// update player
			this._player.update();

			// update shark
			this._sharks.forEach(shark => {
				shark.update();
				this._collision.check(this._player, shark);
			});

			// update treasure
			this._treasure.update();
			this._collision.check(this._player, this._treasure);

			if (core.lives<1) {
				this._themeSound.stop();
				core.scene=config.Scene.OVER;
				core.changeScene();
			}

			// update score and lives
			this._livesLbl.text="Lives: "+core.lives;
			this._scoreLbl.text="Score: "+core.score;

			this.checkBounds();
		}

		private checkBounds() {
			// if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
			if (this._bgImage.x<(-2433)) {
				this._bgImage.x=0;
			}
		}
	}

}
