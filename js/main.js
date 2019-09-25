console.log("Wazzzzzup Frontend!!")
/* ----------- Global References ---------- */
let movementDisplay = document.getElementById('movement')
let game = document.getElementById('game')
let ctx = game.getContext('2d')

console.log(getComputedStyle(game)["width"])
console.log(game.width)

game.setAttribute("height", getComputedStyle(game)["height"])
game.setAttribute("width", getComputedStyle(game)["width"])

// Fill Color
ctx.fillStyle = 'white';
// Line Color
ctx.strokeStyle = 'red';
// Line width
ctx.lineWidth = 10;


ctx.fillRect(10, 10, 100, 100);
ctx.strokeRect(10, 10, 100, 100);

function drawRectangle(ctx, x, y) {
  // these rectangles will be 50x50px squares
  var size = 50;

  ctx.fillStyle = 'purple';
  ctx.stokeStyle = 'yellow';
  ctx.lineWidth = 5;

  ctx.fillRect(x, y, size, size);
  ctx.strokeRect(x, y, size, size);
}

game.addEventListener("click", function(event) {
  drawRectangle(ctx, event.offsetX, event.offsetY);
});