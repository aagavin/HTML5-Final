module scenes {
	/**
	 * This is the Level 1 Scene object used in the game
	 * 
	 * @class Level1
	 * @extends {objects.Scene}
	 */

	export class Level1 extends objects.Scene {
		// Private instance varables
		private _bgImage: createjs.Bitmap;

		private _player: objects.Player;
		private _sharks: Array<objects.Shark>;
		private _collision: managers.Collision;
		private _heart: objects.Heart;
		private _themeSound: createjs.AbstractSoundInstance;
		private _scoreLbl: objects.Label;
		private _livesLbl: objects.Label;
		private _bullets: objects.Bullet[];

		/**
		 * Creates an instance of Level1.
		 * 
		 */
		constructor() {
			super();
		}

		// Public methods
		/**
		 * Start method for Level1
		 */
		public Start(): void {
			// create play objects
			this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));

			//creates and adds shark/ship objects
			this._player = new objects.Player("diver");
			this._sharks = [
				new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
			];

			// add background object to scene
			this.addChild(this._bgImage);
			// this._bubbles.forEach(bubble => {
			// 	this.addChild(bubble);
			// });


			// add player to scene
			this.addChild(this._player);
			// add shark to scene

			//add Sharks with foreach loop (3 sharks)
			this._sharks.forEach(shark => {
				this.addChild(shark);
			});

			//Add and create heart icon
			this._heart = new objects.Heart();
			this.addChild(this._heart);

			//create and add bullet objects (10)
			this._bullets = new Array<objects.Bullet>();

			for (let bullet = 0; bullet < 10; bullet++) {
				this._bullets.push(new objects.Bullet("bullet"));
				this.addChild(this._bullets[bullet]);
			}

			// add score and lives manager
			core.lives = 10;
			core.score = 0;
			core.peopleSaved = 0;
			core.bossLives = 20;


			this._livesLbl = new objects.Label("Lives: " + core.lives, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 100, 45);
			this.addChild(this._livesLbl);
			this._scoreLbl = new objects.Label("Score: " + core.score, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 700, 45);
			this.addChild(this._scoreLbl);

			// add a collision managers
			this._collision = new managers.Collision();

			// add scene to stage
			core.stage.addChild(this);
			// start sound
			this._themeSound = createjs.Sound.play('level1_music');
			this._themeSound.loop = -1;

			//Shoot with mouseclick function
			this.on('click', function () {
				for (var bullet in this._bullets) {
					if (!this._bullets[bullet].InFlight) {
						this._bullets[bullet].Fire(this._player.position);
						break;
					}
				}
			});
		}

		public Update(): void {

			this._bgImage.x -= .5;

			this._bullets.forEach(bullet => {
				// update each bullet
				bullet.update();
			});

			// update player	
			this._player.update();

			// update shark + player
			this._sharks.forEach(shark => {
				shark.update();
				this._collision.check(this._player, shark);
			});

			//update shark + bullet
			this._sharks.forEach(shark => {
				this._bullets.forEach(bullet => {
					this._collision.check(shark, bullet);
				});
			});

			// update treasure
			this._heart.update();
			this._collision.check(this._player, this._heart);

			//Death condition
			if (core.lives < 1) {
				this._themeSound.stop();
				core.scene = config.Scene.OVER;
				core.changeScene();

				this.off('click', null);// Remove event handler
			}

			//Level 2 condition
			if (core.score > 290) {
				this._themeSound.stop();
				core.scene = config.Scene.L1TOL2;
				core.changeScene();

				this.off('click', null);// Remove event handler
			}

			// update score and lives
			this._livesLbl.text = "Lives: " + core.lives;
			this._scoreLbl.text = "Score: " + core.score;

			this.checkBounds();
		}

		/**
		 * 
		 * 
		 * @private
		 */
		private checkBounds() {
			// if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
			if (this._bgImage.x < (-1060)) {
				this._bgImage.x = 0;
			}
		}


	}

}