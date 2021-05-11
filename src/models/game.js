class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.intervalId = null

        this.background = new Background(ctx)
        this.spaceship = new Spaceship(ctx)
        this.coin = new Coin(ctx)
        this.explosion = new Explosion(ctx)
        this.superEnemy = new SuperEnemy(ctx)
        
       
        
        
        
        
        this.enemies = []
        this.coins = []
        
        this.danger = 0
        this.enemyUpdate = true
        this.superEnemyUpdate = false
        this.score = 0
        this.points = 100
        this.tick = 0
        this.tock = 0
    }

    start() {
        this.intervalId = setInterval(() => {
          this.clear();
          this.draw();
          this.move();
        //  if(this.enemyUpdate) {
        //      this.addEnemies()
        //  } 
         if(this.superEnemyUpdate) {
            this.addSuperEnemy()
         } 
          
          
          
          
          this.addCoins()
          if(this.tick ++ > 10000) {
              this.thick = 0;
          }
          this.updateGame()
          //this.updateSuperEnemy()
          this.clearEnemy()
          //this.checkcollision()
          this.checkCollisionBullet()
          //this.chexkCollisionBomb()
          this.checkCollisionCoins()
          this.chexkCollisionBombSuperEnemy()
        }, 1000 /60)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw() {
        this.background.draw()
        this.spaceship.draw()
        this.drawScore()
        this.coins.forEach(coin => coin.draw())
        this.enemies.forEach(enemy => enemy.draw())
        this.explosion.draw()
        this.superEnemy.draw()
    }

    

    move() {
        this.background.move()
        this.spaceship.move()
        this.enemies.forEach(enemy => enemy.move())
        this.coins.forEach(coin => coin.move()) 
        this.superEnemy.move() 

    }

    onKeyEvent() {
        this.spaceship.onKeyEvent(event)
    }

    updateGame() {
        setTimeout(()=>{
            this.enemyUpdate = false
          },10000)
    }

    updateSuperEnemy() {
        setTimeout(()=>{
            this.superEnemyUpdate = true
          },5000)

    }

    checkcollision() {

        const collision1 = this.enemies.some( enemy => enemy.collide(this.spaceship))
        if (collision1){
            console.log('choco')
            this.spaceship.visible = false
            this.spaceship.explosion.visible = true
            setTimeout(()=>{
              this.gameOver()
            },2000)
        }  
   }

   

    checkCollisionBullet() {
        const bulletSuperEnemy = this.spaceship.weapon.bullets
           .some(bullet => this.superEnemy.collide(bullet))

        for (let i = 0 ; i < this.spaceship.weapon.bullets.length ; i++) {
            if (this.superEnemy.collide(this.spaceship.weapon.bullets[i])) {
                
                console.log(this.danger)
                this.spaceship.weapon.bullets[i].evaporate()
            }
             
        }

        if (bulletSuperEnemy) {
            this.danger ++
        }

        if (this.danger === 10) {
            this.superEnemy.visible = false
            setTimeout(()=>{
                this.gameWin()
              },2000)
        }
        
        

        const bulletEnemy = this.spaceship.weapon.bullets
           .some(bullet => this.enemies
           .some(enemy => enemy.collide(bullet)))

        if (bulletEnemy) {
            console.log('boom')
            this.score += this.points
            
        }

        for (let i = 0 ; i < this.spaceship.weapon.bullets.length ; i++) {
            for (let j = 0; j <this.enemies.length; j++) {
                if (this.enemies[j].collide(this.spaceship.weapon.bullets[i])) {
                    this.enemies[j].boom()
                    this.spaceship.weapon.bullets[i].evaporate()
                }
            }
        }
        for (let i = 0 ; i < this.spaceship.weapon.bullets.length ; i++) {
            if (this.spaceship.weapon.bullets[i].toDelete) {
                this.spaceship.weapon.bullets.splice(i,1)
            }
        }

        for (let j = 0 ; j < this.enemies.length ; j++) {
            if (this.enemies[j].toBoom) {
                this.enemies.splice(j,1)
            }
        }   
    }

    chexkCollisionBomb() {
        const allBombs = []

        for (let i = 0; i < this.enemies.length; i++) {
            
            for( let j = 0; j < this.enemies[i].weapon.bombs.length; j++) {
                allBombs.push(this.enemies[i].weapon.bombs[j])
            }
        }

        const bombEnemy = allBombs
          .some(bomb => this.spaceship.collide(bomb))

          if(bombEnemy) {
            console.log('touch')
            this.spaceship.visible = false
            setTimeout(()=>{
              this.gameOver()
            },2000)
          }
    }

    chexkCollisionBombSuperEnemy() {
    
        const bombSuperEnemy = this.superEnemy.weapon.bombs
          .some(bomb => this.spaceship.collide(bomb))

          if(bombSuperEnemy) {
            console.log('touch')
            this.spaceship.visible = false
            setTimeout(()=>{
              this.gameOver()
            },2000)
          }

    }

    addEnemies() {
        
            if (this.tick % 100) {
                return
             }
             this.enemies.push(new Enemy(this.ctx)) 
             
    }

    addSuperEnemy() {
        
        this.superEnemy = new SuperEnemy(ctx)
            
    }

    clearEnemy() {

       this.enemies = this.enemies.filter(b => b.isVisibleEnemy()) 

    }

    addCoins() {
        if (this.tick % 2000) {
            return
        }

        this.coins.push(new Coin(this.ctx))
    }

    checkCollisionCoins() {
        const coinSpaceship = this.coins
          .some(coin => this.spaceship.collide(coin))

          if(coinSpaceship) {
            console.log('touch')
            this.spaceship.weapon.super = true
            setTimeout(()=>{
                this.spaceship.weapon.super = false
                },10000)  //// un setTImeout que ponga el super de la weapon a false otra vez 10 segundos   
      }
    }

    gameOver() {

      clearInterval(this.intervalId)
      
      this.ctx.font = "40px Comic Sans MS";
      this.ctx.textAlign = "center";
      this.ctx.fillStyle = 'white'
      this.ctx.fillText(
        "GAME OVER",
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2
        )  
     }

     gameWin() {
        clearInterval(this.intervalId)
      
        this.ctx.font = "40px Comic Sans MS";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(
          "YOU WIN",
          this.ctx.canvas.width / 2,
          this.ctx.canvas.height / 2
          )  

     }

     drawScore() {
        this.ctx.font = "16px Comic Sans MS"
        this,ctx.fillStyle = 'white'
        this.ctx.fillText("Score:"+this.score,8,20)
     }

    
    

}   

