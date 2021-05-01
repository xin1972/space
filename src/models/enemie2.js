class Enemy2 {
    constructor(ctx) {
        this.ctx = ctx
        
        this.render = Math.random() *100 + 100
        //this.x = Math.random() > 0.5 ? 0 - this.render : this.render + 400
        this.x = 0
        this.y = 0

        this.w = 60
        this.h =40
        this.vx = 2

        this.g = 1

        this.img = new Image()      
        this.img.src = './images/images/enemigo2.png'

    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
    }

    move() {
        this.y += this.g
        this.x += this.vx
        if ( this.x +  this.width >= this.ctx.canvas.width ) {
            this.vx = -2
        }
        // if ( this.x < this.ctx.canvas.width ) {
        //     this.x -= this.vx
        // }
        
        
        
        
        
        
          
    }

    collide(el) {
        
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
        
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y;

        if (collideX && collideY) {
            console.log( "he chocado")
        }
        return collideX && collideY

    }

    
}    