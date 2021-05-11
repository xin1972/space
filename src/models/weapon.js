class Weapon {
    constructor(shooter) {
        this.shooter = shooter
        this.bullets = []
        this.canShoot = true
        this.super = false



    }

    shoot() {
        if( this.canShoot && !this.super ) {
            const bullet = new Bullet(
                this.shooter.ctx,
                this.shooter.x + this.shooter.w /2,
                this.shooter.y     
              ) 
      
              this.bullets.push(bullet)
              this.canShoot = false
              setTimeout(()=>{
                  this.canShoot = true
              },500)
        } else if (this.canShoot && this.super) {
            const bullet1 = new Bullet(
                this.shooter.ctx,
                this.shooter.x -10 + this.shooter.w /2,
                this.shooter.y     
              ) 
            const bullet2 = new Bullet(
                this.shooter.ctx,
                this.shooter.x + 10 + this.shooter.w /2,
                this.shooter.y     
              ) 
      
              this.bullets.push(bullet1)
              this.bullets.push(bullet2)
              this.canShoot = false
              setTimeout(()=>{
                  this.canShoot = true
              },500)
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