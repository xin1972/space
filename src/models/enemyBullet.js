class Bomb {
    constructor(ctx,x,y) {
        this.ctx = ctx 
        this.x = x
        this.y = y
        this.h = 5
        this.w = 5
        this.r = 5
        this.vy = 5

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
        this.ctx.fillStyle = 'red'
        this.ctx.fill()
        this.ctx.closePath()
    }

    move() {
        this.y += this.vy
    }

    isVisible() {
        return this.y > this.ctx.canvas.height

        // Is inside canvas?
    }
}