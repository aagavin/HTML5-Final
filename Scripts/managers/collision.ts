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
						other.Reset();
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

					// 
					if (other.name==='star') {
						core.lives-=1;
						other.Reset();
					}
					if(other.name==='injured'){
						createjs.Sound.play("thanks");
					    prime.Reset();
                        other.Reset();
                        core.score += 10;
						core.peopleSaved += 1;
						console.log(core.peopleSaved);
					}

					// bulletPlayer
					if (prime.name==='star' && other.name==='bulletPlayer') {
						prime.Reset();
						other.Reset();
					}

					// boss and bullet
					if (prime.name==='finalBoss' && other.name==='bulletPlayer') {
						core.bossLives-=1;
						other.Reset();
						createjs.Sound.play('death');
					}


				}
			}
			else{
				other.isColliding=false;
			}
		}

	}
}