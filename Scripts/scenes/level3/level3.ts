module scenes{
	/**
	 * This is level3
	 * 
	 * @export
	 * @class Level3
	 * @extends {objects.Scene}
	 */
	export class Level3 extends objects.Scene{
		//***************** PRIVATE INSTANCE VARIABLES *****************// 

		private _bgImage:createjs.Bitmap;
		private _player:objects.Player;
		private _lblBossLives:objects.Label;
		private _lblLives:objects.Label;
		private _finalBoss:objects.FinalBoss;
		private _textShadow:createjs.Shadow;
		private _collision:managers.Collision;
		private _stars:Array<objects.Star>;
		private _bullets:objects.Bullet[];


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
			// drop shadow
			this._textShadow=new createjs.Shadow("#000", 0, 0, 3);


			this._bgImage = new createjs.Bitmap(core.assets.getResult('bgPlayImgL2'));
			this.addChild(this._bgImage);

			this._player = new objects.Player('player_level3');
			this.addChild(this._player);

			this._bullets=new Array<objects.Bullet>();
			for (var bullet = 0; bullet < 5; bullet++) {
				this._bullets.push(new objects.Bullet('bulletPlayer'));
				this.addChild(this._bullets[bullet]);
			}

			this._finalBoss = new objects.FinalBoss('finalBoss');
			this.addChild(this._finalBoss);

			this._lblBossLives = new objects.Label('Boss Lives: '+core.bossLives,'35px', "Tahoma, Geneva, sans-serif","#fff",150,45);
			this._lblBossLives.shadow=this._textShadow
			this.addChild(this._lblBossLives);

			this._lblLives = new objects.Label('Your Lives: '+core.lives, '34px',"Tahoma, Geneva, sans-serif","#fff",700,45);
			this._lblLives.shadow=this._textShadow;
			this.addChild(this._lblLives);

			this._stars=new Array<objects.Star>();
			
			for (let i = 0; i < 3; i++) {
				let star = new objects.Star('star');
				this._stars.push(star);
				this.addChild(star);				
			}

			// Collision manager
			this._collision=new managers.Collision();

			core.stage.addChild(this);

			this.on('click', function(){
				for (var bullet in this._bullets) {
					if (!this._bullets[bullet].InFlight) {
						this._bullets[bullet].Fire(this._player.position);
						break;
					}
				}
			});
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
			
			// update final boss
			this._finalBoss.update();

			// lives lbl
			this._lblLives.text='Lives: '+core.lives;
			// boss lives lbl
			this._lblBossLives.text='Boss Lives: '+core.bossLives;

			// update star
			this._stars.forEach(star => {
				star.update();
				this._collision.check(this._player,star);
			});

			// update bullets
			this._bullets.forEach(bullet => {
				bullet.update();
			});

			// Collision check between player and boss
			this._collision.check(this._player,this._finalBoss);
			//this._collision.check(this._player)

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