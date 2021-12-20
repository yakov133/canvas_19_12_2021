const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext("2d");

//todo: targil 1
context.fillStyle = "black";
context.fillRect(0, 0, 50, 50);

//todo: targil 2
context.fillStyle = "red";
context.fillRect(60, 10, 80, 80);

//todo: taregil 3
context.beginPath();
context.fillStyle = "red";
context.arc(140, 130, 30, 0, 2 * Math.PI);
context.fill();

//todo: taregil 4
context.beginPath();
context.fillStyle = "blue";
context.arc(240, 70, 70, 0, 2 * Math.PI);
context.fill();

//todo: targil 5
context.beginPath();
context.fillStyle = "green";
context.arc(400, 50, 40, 0, 2 * Math.PI);
context.arc(650, 50, 40, 0, 2 * Math.PI);
context.fill();

//todo: tagril 6
let x = 0,
  dirction = true;
context.beginPath();
context.fillStyle = "black";
context.fillRect(x, 200, 50, 50);
context.fillRect(x, 300, 50, 50);
context.fillRect(x, 400, 50, 50);
setInterval(() => {
  draw();
}, 500);

function draw() {
  context.fillStyle = "black";
  context.clearRect(x, 200, 50, 50);
  context.clearRect(x, 300, 50, 50);
  context.clearRect(x, 400, 50, 50);
  x = dirction ? x + 20 : x - 20;
  context.fillRect(x, 200, 50, 50);
  context.fillRect(x, 300, 50, 50);
  context.fillRect(x, 400, 50, 50);
}

//todo: tagril 7
const floor = {
  x: 0,
  y: canvas.height - 80,
  width: canvas.width,
  height: 80,
};
context.beginPath();
context.fillStyle = "pink";
context.fillRect(floor.x, floor.y, floor.width, floor.height);

//todo: tagril 8
const player = {
  x: 10,
  y: canvas.height - 180,
  width: 100,
  height: 100,
};
context.beginPath();
context.fillStyle = "orange";
context.fillRect(player.x, player.y, player.width, player.height);

//todo: targil 9
window.onkeydown = (e) => {
  if (e.keyCode == 38) {
    jump();
  }
};
function jump() {
  context.clearRect(player.x, player.y, player.width, player.height);
  context.beginPath();
  context.fillStyle = "orange";
  context.fillRect(player.x, player.y-100, player.width, player.height);
  setTimeout(()=>{
    context.clearRect(player.x, player.y-100, player.width, player.height);
    context.beginPath();
    context.fillStyle = "orange";
    context.fillRect(player.x, player.y, player.width, player.height);
  },150)
}

//todo: targil 10
let X,Y,WIDTH=150,HEIGHT=150
// for (let index = 0; index < 10; index++) {
//     X = Math.floor( Math.random() * (canvas.width -100));
//     Y = Math.floor( Math.random() * (canvas.height -150));
//     context.beginPath();
//     context.fillStyle="aqua"
//     context.fillRect(X,Y,WIDTH,HEIGHT);
// }

//todo: targil 11
let RADUS
// for (let index = 0; index < 10; index++) {
//     X = Math.floor( Math.random() * (canvas.width - 200));
//     Y = Math.floor( Math.random() * (canvas.height - 250));
//     RADUS = Math.floor( Math.random() * 100);
//     context.beginPath();
//     context.fillStyle="black"
//     context.arc(X,Y,RADUS,0,2*Math.PI);
//     context.fill();
// }

//todo: targil 12
let colors = ["grey","purpel","maroon","blue","brown","orange","yellow","pink","red","black"],i;
// for (let index = 0; index < 10; index++) {
//     X = Math.floor( Math.random() * (canvas.width -100));
//     Y = Math.floor( Math.random() * (canvas.height -150));
//     i = Math.floor( Math.random() * 11);
//     context.beginPath();
//     context.fillStyle=colors[i]
//     context.fillRect(X,Y,WIDTH,HEIGHT);
// }

//todo: targil 13
    context.beginPath();
    context.fillStyle="yellow"
    context.arc(900,500,200,0,2 * Math.PI);
    context.fill()

    context.beginPath();
    context.fillStyle="black"
    context.arc(820,410,30,0,2 * Math.PI);
    context.fill()

    context.beginPath();
    context.arc(980,410,30,0,2 * Math.PI);
    context.fill()

    
    context.beginPath();
    // context.strokeStyle="red"
    context.lineWidth = 8   ;
    context.arc(900, 500, 128, Math.PI, 0, true);
    context.stroke();


