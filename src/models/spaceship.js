class Spaceship {
    constructor() {
        this.ctx = ctx

        this.x =300
        this.y =500
        this.y0 = this.y

        this.w = 75
        this.h = 75

        this.vx = 0
        this.vy = 0


        this.actions = {
            right: false,
            left: false,
            up: false,
            down: false,
            shoot: false
        }

        this.img = new Image()
        this.img.src = './images/images/spaceship.png'

        this.weapon = new Weapon(this)

        this.setListeners()
    }

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.w,
            this.h
        )
        this.weapon.draw()
    }

    move() {
        this.applyActions()
        this.weapon.move()
        if (this.x >= this.ctx.canvas.width - 75) {
            this.x = this.x -10 
        }
        if ( this.x <= 10) {
            this.x = this.x + 10
        }
        if (this.y >= this.ctx.canvas.height - 75) {
            this.y = this.y -10 
        }
        if ( this.y < 0) {
            this.y = this.y +10
        }    

    }

    onKeyEvent(keyCode,action) {
        switch (keyCode) {
            case LEFT:
              this.actions.left = action
              break;
                
            case RIGHT:
              this.actions.right = action
              break;
      
            case UP:
              this.actions.up = action
              break;
            
            case DOWN:
                this.actions.down = action
      
            case SPACE:
              this.actions.shoot = action
              break;
          }
    }

    

    setListeners() {
        document.onkeydown = e => this.onKeyEvent(e.keyCode,true)
        document.onkeyup = e => this.onKeyEvent(e.keyCode,false)
    }

    applyActions() {
        if (this.actions.right) {   
                this.x += 5
            }

        if (this.actions.left) {
            this.x -= 5
         }

        if (this.actions.up) {
            this.y -= 5
         } 

        if (this.actions.down) {            
            this.y += 5             
        }

        if (this.actions.shoot) {
            this.weapon.shoot()
        }
    }
}