const ctx = document.getElementById('canvas').getContext('2d')

const game = new Game(ctx)



  
  // const starBtn =document.getElementById('start-btn');
  // starBtn.addEventListener('click',() => {
   game.start()
  // })
  

  



document.addEventListener('keydown',(event) => {
    game.onKeyEvent(event)
  })
  
document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })




