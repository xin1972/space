class Enemy1 {
    constructor(ctx) {
        this.ctx = ctx

        this.x = 350
        this.y = 30

        this.w = 60
        this.h =40
        this.vx = 1

        this.g = 1

        this.img = new Image()      
        this.img.src = './images/images/enemigo1.png'

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