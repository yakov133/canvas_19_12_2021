// const canvas = document.getElementById("canvas");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
// const context = canvas.getContext("2d");


// // todo make a floor object
// const floor = {
//     x: 0,
//     y: canvas.height - 50,
//     width: canvas.width,
//     height: 50,
//   };
  
//   context.fillStyle = "red";
//   context.fillRect(floor.x, floor.y, floor.width, floor.height);
  
//   const player = {
//     x: 0,
//     y: floor.y - 40,
//     width: 50,
//     height: 40,
//   };
//   let dirc  = true;
//   // context.fillStyle = "black";
//   // context.fillRect(player.x, player.y, player.width, player.height);
//   // // requestAnimationFrame()
//   // setInterval(() => {
//   //   draw();
    
//   // },500);


//   function repeatOften() {
//     // Do whatever
//     requestAnimationFrame(repeatOften);
//     draw();
    
//   }
//   requestAnimationFrame(repeatOften);
  

//   function draw(){
//     context.clearRect(player.x, player.y, player.width, player.height);
//     if(dirc){
//       player.x += 4;
//     }else{
//       player.x -= 4;
//     }
//     if(player.x > canvas.width - 50)
//     {
//       dirc = false
//     }
//     if(player.x < 0){
//       dirc = true
//     }
//     context.fillStyle = "black";
//     context.fillRect(player.x, player.y, player.width, player.height);
//   }
