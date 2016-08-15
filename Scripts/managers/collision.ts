module managers{
	export class Collision{
		constructor(){
			this.start();
		}


		public start():void{

		}


		public update():void{

		}

		public check(prime:objects.GameObject, other:objects.GameObject):void{
		
			
			if (objects.Vector2.distance(prime.position, other.position) < (prime.halfHeight+other.halfHeight)){
				if (!other.isColliding) {
					other.isColliding=true;

					if (other.name==='shark') {
						createjs.Sound.play('comic-bite');
						core.lives-=1;
					}

					if (other.name==='treasure') {
						createjs.Sound.play('coin');
						if(core.lives < 10){
							core.lives += 1;
						}
					}

					if(other.name==='bullet'){
						createjs.Sound.play("bulletHit");
						prime.Reset();
						other.Reset();
						core.score += 10;

						createjs.Sound.play("death");
						prime.Reset();
						other.Reset();
						core.score += 10;

					}

					if (other.name==='finalBoss'){core.lives-=1;}

					if (other.name==='star') {
						core.lives-=1;
					}


				}
			}
			else{
				other.isColliding=false;
			}
		}

	}
}