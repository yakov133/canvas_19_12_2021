// import { player } from "./Player";

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const context = canvas.getContext("2d");

// context.fillStyle = "blue";
// context.fillRect(0, canvas.height - 50, 50, 50);

// context.fillStyle="red"
// context.fillRect(50,50,130,130);

//! pingpong game
// let x = 0,
//   y = 50;
// let dirct = true;
// let jump = setInterval(() => {

//     context.clearRect(x, canvas.height - y, 50, 50);
//   if (x < canvas.width - 100 && dirct === true) {
//     x += 100;
//     y += 50;
//     context.fillStyle = "blue";
//     context.fillRect(x, canvas.height - y, 50, 50);
//   } else {
//     dirct = false;
//     // console.log(`${x}, ${canvas.height + y}, 50, 50`);
//     context.clearRect(x, canvas.height - y, 50, 50);
//     x -= 100;
//     y -= 50;
//     context.fillStyle = "red";
//     if (x === 0)
//         dirct = true;

// }
// context.fillRect(x, canvas.height - y, 50, 50);

// }, 100);

// todo make a floor object
const floor = {
  x: 0,
  y: canvas.height - 50,
  width: canvas.width,
  height: 50,
};

context.fillStyle = "red";
context.fillRect(floor.x, floor.y, floor.width, floor.height);

const player = {
  x: 200,
  y: floor.y - 40,
  width: 50,
  height: 40,
};

context.fillStyle = "black";
context.fillRect(player.x, player.y, player.width, player.height);
// requestAnimationFrame()
setInterval(() => {
  context.clearRect(player.x, player.y, player.width, player.height);
  player.x += 100;
  context.fillStyle = "black";
  context.fillRect(player.x, player.y, player.width, player.height);
  
},500);
