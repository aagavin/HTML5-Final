module managers{
	export class Collision{
		constructor(){
			this.start();
		}


		public start():void{

		}


		public update():void{

		}

		public check(player:objects.GameObject, other:objects.GameObject):void{
			
			if (
					objects.Vector2.distance(player.position, other.position) < (player.halfHeight+other.halfHeight)
				) {
				if (!other.isColliding) {
					other.isColliding=true;

					if (other.name==='shark') {
						createjs.Sound.play('comic-bite');
						core.lives-=1;
					}

					if (other.name==='treasure') {
						createjs.Sound.play('coin');
						core.score+=10;
					}

				}
			}
			else{
				other.isColliding=false;
			}
		}

	}
}