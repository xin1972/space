class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.intervalId = null

        this.background = new Background(ctx)
        this.spaceship = new Spaceship(ctx)
        this.enemiesBasics = []
        this.enemiePlatillos = []

        this.tick = 0
    }

    start() {
        this.intervalId = setInterval(() => {
          this.clear();
          this.draw();
          this.move();
          this.addEnemies()
          if(this.tick ++ > 10000) {
              this.thick = 0;
          }

        }, 1000 /60)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw() {
        this.background.draw()
        this.spaceship.draw()
        this.enemiesBasics.forEach(ob => ob.draw())
        this.enemiePlatillos.forEach(ob => ob.draw())
        this.checkcollision()
        this.checkCollisionBullet()
        
    }

    

    move() {
        this.background.move()
        this.spaceship.move()
        this.enemiesBasics.forEach(ob => ob.move())
        this.enemiePlatillos.forEach(ob => ob.move())
      

    }

    onKeyEvent() {
        this.spaceship.onKeyEvent(event)
    }

    checkcollision() {
        const collision1 = this.enemiesBasics.some(ob => ob.collide(this.spaceship))
        const collision2 = this.enemiePlatillos.some(ob => ob.collide(this.spaceship))
        
   }

   checkCollisionBullet() {
        const bulletEnemy = this.spaceship.weapon.bullets.some(bullet => this.enemies.some(enemy => enemy.collide(bullet)))

        if(bulletEnemy) {
            console.log('ha chocado BALA')
          
        }
       
        
        
   }

   addEnemies() {
        if (this.tick % 100) {
          return
       }
       this.enemiesBasics.push(new Enemy1(this.ctx))
       this.enemiePlatillos.push(new Enemy2(this.ctx))
   }

   clearEnemy() {
    this.enemiesBasics = this.enemy.filter(b => b.isVisible())
    this.enemiePlatillos = this.enemy.filter(b => b.isVisible())
   }
}   

