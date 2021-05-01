class Weaponenemy {
    constructor(enemy1) {
        this.enemy1 = enemy1
        this.bombs = []
        this.canShoot = true

    }

    clearBullets() {
        this.bullets = this.bullets.filter(b => b.isVisible())
    }

    draw() {
        this.clearBullets()        
        setTimeout(()=>{
            this.enemyBomb.forEach(b => b.draw())
        },200)
   }
    

    move() {
        this.bullets.forEach(b => b.move())
    }

    
}