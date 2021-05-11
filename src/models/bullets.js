class Bullet {
    constructor(ctx,x,y) {
        this.ctx = ctx 
        this.x = x
        this.y = y
        this.h = 5
        this.w = 5
        this.r = 5
        this.vy = 5

        this.toDelete = false

        

    }

    draw() {
        
        this.ctx.beginPath()
        this.ctx.arc(
            this.x,
            this.y,
            this.r,
            0,
            2*Math.PI
        )
        this.ctx.fillStyle = 'white'
        this.ctx.fill()
        this.ctx.closePath()

        
        
    }

    move() {
        this.y -= this.vy
    }

    evaporate() {
        this.toDelete = true
    }

    isVisible() {
        return this.y > 0

        // Is inside canvas?
    }
}