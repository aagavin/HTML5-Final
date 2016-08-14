module scenes {
	export class Level1 extends objects.Scene{
		// Private instance varables
		private _bgImage:createjs.Bitmap;
		// private _bubbles:Array<objects.Bubble>;
		private _player:objects.Player;
		private _sharks:Array<objects.Shark>;
		private _collision: managers.Collision;
		private _treasure: objects.Treasure;
		private _themeSound: createjs.AbstractSoundInstance;
		private _scoreLbl:objects.Label;
		private _livesLbl:objects.Label;
		private _bullets:objects.Bullet[];
		//private _amfiring:boolean;

		//private _keyboardControls: objects.KeyboardControls;
		private _frameCount: number = 0;
		//private _nextLevelBtn: objects.Button;

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
			this._bgImage=new createjs.Bitmap(core.assets.getResult("bgPlayImg"));

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

			this._bullets = new Array<objects.Bullet>();

			for (let bullet = 0; bullet < 10; bullet++){
				this._bullets.push(new objects.Bullet("bullet"));
				this.addChild(this._bullets[bullet]);
			}

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

		public Test():boolean{
			console.log("Fire");
				/*for (var bullet in this._bullets) {
						if (!this._bullets[bullet].InFlight) {
							this._bullets[bullet].Fire(this._player.position);
							break;	
						}
					}*/
				return  true;
		}

		public Update():void {
			//this._amfiring = false;
			// 
			this._frameCount++
			this._bgImage.x-=.5;

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

			/*if (this._frameCount % 10 == 0){
				this.addEventListener('click', function () {
					console.log("fire");
					for (var bullet in this._bullets) {
						if (!this._bullets[bullet].InFlight) {
							this._bullets[bullet].Fire(this._player.position);
							break;
						}
					}
				});
			}*/

			this.addEventListener('click', function(){			
				if (this._frameCount % 10 == 0) {
					console.log("fire");
					for (var bullet in this._bullets) {
						if (!this._bullets[bullet].InFlight) {
							this._bullets[bullet].Fire(this._player.position);
							break;
						}
					}
            }})


			// update treasure
			this._treasure.update();
			this._collision.check(this._player, this._treasure);

			if (core.lives<1) {
				this._themeSound.stop();
				core.scene=config.Scene.OVER;
				core.changeScene();
			}

			if (core.score > 500){
				this._themeSound.stop();
				core.scene = config.Scene.LEVEL2;
				core.changeScene();
				//Fix this later if it can be fixed
				//Remove the player, sharks, treasure, background.dx = 0, add button and on button click switch scenes
				/*this._nextLevelBtn = new objects.Button("nextLevelBtn", 300, 400, true);
				this.addChild(this._nextLevelBtn);
				this._nextLevelBtn.on('click', this._nextLevelBtnClick, this);*/
			}





			// update score and lives
			this._livesLbl.text="Lives: "+core.lives;
			this._scoreLbl.text="Score: "+core.score;

			this.checkBounds();
		}

		private _nextLevelBtnClick(event:createjs.MouseEvent):void {
			
		}

		private checkBounds() {
			// if (this._bgImage.x<(-(this._bgImage.getBounds().width-640))) {
			if (this._bgImage.x<(-1060)) {
				this._bgImage.x=0;
			}
		}
	}

}