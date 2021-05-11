class WeaponEnemy {
    constructor(bomber) {
        this.bomber = bomber
        this.bombs = []

        this.tick = 0
        
        
    } 

    draw() {
        this.tick++

        this.clearBombs()
        if(this.tick === 50) {
            
            this.addBomb()
            this.tick = 0
        }

        this.bombs.forEach(b => b.draw())
   }

    move() {
        this.bombs.forEach(b => b.move())
    }
    
    addBomb() {
        const bomb = new Bomb(
                    this.bomber.ctx,
                    this.bomber.x + this.bomber.w /2,
                    this.bomber.y + this.bomber.h    
                  )
                  this.bombs.push(bomb)        
    }
        

    clearBombs() {
        this.bombs = this.bombs.filter(b => b.isVisible())
    }
    

    
}