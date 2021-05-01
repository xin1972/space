class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.intervalId = null

        this.background = new Background(ctx)
        this.spaceship = new Spaceship(ctx)
        this.enemy1 = new Enemy1(ctx)
        //this.enemys2 = []

        this.tick = 0
    }

    start() {
        this.intervalId = setInterval(() => {
          this.clear();
          this.draw();
          this.move();
          //this.addEnemies()
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
        this.enemy1.draw()
        //this.enemys2.forEach(en => en.draw())
        // this.checkcollision()
        // this.checkCollisionBullet()
        
    }

    

    move() {
        this.background.move()
        this.spaceship.move()
        this.enemy1.move()
        //this.enemys2.forEach(en => en.move())

    }

    onKeyEvent() {
        this.spaceship.onKeyEvent(event)
    }

//     checkcollision() {
//         //const collision1 = this.enemy1.collide(this.spaceship)
//         const collision2 = this.enemys2.some(ob => ob.collide(this.spaceship))
   
//    }

//    checkCollisionBullet() {
//         const bulletEnemy = this.spaceship.weapon.bullets.some(bullet => this.enemys2.collide(bullet))
     
//         if (bulletEnemy){
//           this.enemy2.splice(i,1)
//           //this.spaceship.weapon.bullets.splice(this.spaceship.weapon.bullets[])
//         }
//    }

//    addEnemies() {
//         if (this.tick % 100) {
//           return
//        }
//        this.enemy2.push(new Enemy2(this.ctx))
//    }
}   

