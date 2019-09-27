/* ----------- Context and Game Setup ---------- */
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let ctx = game.getContext('2d')

// console.log(getComputedStyle(game)["width"])
// console.log(game.width)

game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])


/* ----------- Game Assets ---------- */

// // Fill Color
// ctx.fillStyle = 'white';
// // Line Color
// ctx.strokeStyle = 'red';
// // Line width
// ctx.lineWidth = 10;


// ctx.fillRect(10, 10, 100, 100);
// ctx.strokeRect(10, 10, 100, 100);

// function drawSquare(x, y, size) { drawPurpleSquare
//   // these rectangles will be 50x50px squares
//   // var size = 50;

//   ctx.fillStyle = 'purple';
//   ctx.stokeStyle = 'yellow';
//   ctx.lineWidth = 5;

//   ctx.fillRect(x, y, size, size);
//   ctx.strokeRect(x, y, size, size);
// }

var ogreStart = {
  x: 400,
  y:150,
  width: 100, 
  height: 100,
  color: '#BADA55',
  alive: true,
  velocity: 10,
  render: function(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

var heroStart = {
  x: 10,
  y: 50,
  width: 50,
  height: 50,
  color: "hotpink",
  alive: true,
  render: function(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

let ogre = {...ogreStart } //ogre becomes an object with all the qualities of ogreStart
let hero = {...heroStart }

/* ----------- Game Functions ---------- */
function reset() {
  ogre = {...ogreStart }
  hero = {...heroStart} 
}

//collision detection 
function detectHit (){
  // check hero's corners 
    //top-left(hero.x, hero.y)
    //top-right(hero.x + hero.width, hero.y)
    //bottom-left(hero.x, hero.y + hero.hegith)
    //bottom-right(hero.x + hero.width, hero.y + hero.height)
  if(hero.x <= ogre.x + ogre.width 
    && hero.x + hero.width >= ogre.x
    && hero.y <= ogre.y + ogre.height 
    && hero.y + hero.height >= ogre.y) {
        //TODO: End Game function
        ogre.alive = false
        hero.color = "#BADA55"
        document.getElementById("status").textContent = "You Win! ...But at what cost? 🤨"
  }
}

//Moving the hero
function movementHandler(e){
  // console.log(e)
  switch (e.keyCode){
    case (87): // w = 87; up = y - 1
      if(hero.y > 0){
        hero.y -= 10 // hero.y = hero.y - 10
      }
      break
    case (65): // a = 65; left = x - 1 
      if(hero.x > 0){
        hero.x -= 10 
      }
      break
    case (83):  // s = 83; down = y + 1 
      if (hero.y < game.height - hero.height) {
        hero.y += 10
      }
      break
    case (68):   // d = 68; right = x + 1
      if (hero.x < game.width - hero.width) {
        hero.x += 10 
      }
      break
  }
}

//Ogre pacing
function ogreDrift() {
  //keep it in bound
  if (ogre.x > game.width - ogre.width || ogre.x < 0 ){
    ogre.velocity *= -1 //negates orgre velocity
  } 
    ogre.x += ogre.velocity
  }

// Game Loop is what draws everything 
function gameLoop() {
  //Push status of game to display 
  movementDisplay.textContent = `X: ${hero.x} Y: ${hero.y}`
  ctx.clearRect(0, 0, game.width, game.height)
  if(ogre.alive){
    ogre.render()
    detectHit()
    ogreDrift()
  }
  hero.render()
}


// game.addEventListener("click", function(event) {
//   // drawRectangle(event.offsetX, event.offsetY, 50)
//   ctx.clearRect(0, 0, game.width, game.height)
//   ogre.x = event.offsetX
//   ogre.y = event.offsetY
//   ogre.render()
// });

document.addEventListener("keydown", movementHandler)
document.getElementById("reset", ).addEventListener('click', reset)

var runGame = setInterval(gameLoop, 60)