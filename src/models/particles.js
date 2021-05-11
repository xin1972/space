class Particle {
    constructor() {
        this.x = this.x
        this.y = this.y
        this.size = Math.random() *7 + 3
        this.vx = (Math.random() +1) - 0.5
        this.color = 'red'
    }

    update() {
        this.y -= this.background.vy
        this.x -= this.vx
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
             Math.PI *2)
        this.ctx.fill()
        this.ctx.closePath()

    }

    
}