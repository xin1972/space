class Weapon {
    constructor(shooter) {
        this.shooter = shooter
        this.bullets = []
        this.canShoot = true

    }

    shoot() {
        if( this.canShoot ) {
            const bullet = new Bullet(
                this.shooter.ctx,
                this.shooter.x + this.shooter.w /2,
                this.shooter.y     
              ) 
      
              this.bullets.push(bullet)
              this.canShoot = false
              setTimeout(()=>{
                  this.canShoot = true
              },200)
        }
        
        
    }

    clearBullets() {
        this.bullets = this.bullets.filter(b => b.isVisible())
    }

    draw() {
        this.clearBullets()
        this.bullets.forEach(b => b.draw())
    }

    move() {
        this.bullets.forEach(b => b.move())
    }

    
}