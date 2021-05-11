class Coin {
    constructor(ctx) {

        this.ctx = ctx
        this.render= Math.random()* 800
        this.x = Math.random()*10 + this.render
        this.y = 0
        this.w = 10
        this.h = 10
        this.r = 8

        this.g = 2
        
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
        this.ctx.fillStyle = 'yellow'
        this.ctx.fill()
        this.ctx.closePath()

    }

    move() {

        this.y += this.g

    }
}