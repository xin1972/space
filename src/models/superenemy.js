class SuperEnemy {
    constructor(ctx) {
        this.ctx = ctx
        
        this.x = this.ctx.canvas.width / 2
        this.y = 0
        this.w = 120
        this.h = 120

        this.vx = 1
        this.vy = 1

        this.img = new Image()
        this.img.src = "./images/images/enemigo1.png"

        this.weapon = new WeaponEnemy(this)

        this.explosion = null

        this.visible = true


    }

    draw() {
        if(this.visible) {
        this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.w,
                this.h
            )
            this.weapon.draw()
         } else {
            
            this.explosion = new Explosion(this.ctx,this.x,this.y)
            this.explosion.draw()              
            this.explosion.visible = false
            
       }   

    }
    move() {
        this.x += this.vx
        if ( this.x +  this.w >= this.ctx.canvas.width ) {
            this.vx = -2
        } 
        
        if ( this.x < 0 ) {
            this.vx = 2
        }
        this.weapon.move()       
    }

    collide(el) {
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y;
        
        
        return collideX && collideY
    }

}    


    
