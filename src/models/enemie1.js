class Enemy {
    constructor(ctx) {
        this.ctx = ctx
        
        this.render= Math.random()* 800
        this.x = Math.random()*10 + this.render
        this.y = 0

        this.w = 60
        this.h = 40

        this.vx = Math.random() * 2

        this.toBoom = false
        this.inGame = true



        this.g = 1

        

        this.img = new Image()      
        this.img.src = './images/images/enemigo2.png'

        this.weapon = new WeaponEnemy(this)

        this.aleatorio = 0
        

    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
        this.aleatorio = Math.random() * 10
        if(this.aleatorio > 5)    
        this.weapon.draw()
        
        
    }

    move() {
        
        this.y += this.g
        this.x += this.vx
        if ( this.x +  this.w >= this.ctx.canvas.width ) {
            this.vx = -2
        } 
        
        if ( this.x < 0) {
            this.vx = 2
        }
        this.weapon.move()
    }

    collide(el) {
        const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
        const collideY = el.y < this.y + this.h && el.y + el.h > this.y;
        
        
        return collideX && collideY

    }

    boom () {
        this.toBoom = true
    }

    



    isVisibleEnemy() {
        return this.y < this.ctx.canvas.height
    }    
}    