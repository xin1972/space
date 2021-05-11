class Explosion {
    constructor(ctx,x,y) {
        this.ctx = ctx 
        this.x = x
        this.y = y
        this.w = 70
        this.h = 70

        this.img = new Image() 
        
        this.img.frames = 4
        this.img.frameIndex = 1
        this.visible = false

        this.img.src = './images/images/explosion.png'

        
        
    }

    draw() {
        
        this.ctx.drawImage(
        this.img,
        0,
        0,
        this.img.width / 4 ,
        this.img.height / 4,
        this.x,
        this.y,
        this.w,
        this.h
        )
        
       
                
    }

    
}
