//Training

// console.group("User Details");
// console.log("name: Juan");
// console.log("job: Software Developer");
// console.groupEnd();

// console.group("Map function");
// console.log(`%c${mapping}`, "color:blue");
// console.groupEnd();
var app;
let player;
let keys = {};

window.onload = () => {
  app = new PIXI.Application({
    width: 500,
    height: 500,
    backgroundColor: 0x4a4f66,
    // transparent: true,
    resolution: window.devicePixelRatio || 1,
  });
  const scena = document.body.appendChild(app.view);

  //Player
  player = new PIXI.Sprite.from("images/tank.png");
  player.anchor.set(0.5);
  // player.x = app.view.width / 2;
  // player.y = app.view.height / 2;
  player.x = Math.random() * app.screen.width;
  player.y = Math.random() * app.screen.width;

  app.stage.addChild(player);
  app.stage.interactive = true;

  //controls
  window.addEventListener("keydown", keysDown);
  window.addEventListener("keyup", keysUp);

  app.ticker.add(gameLoop);
  app.stage.on("pointertap", onClick);
};
function onClick() {
  // app.backgroundColor = 0xff0000;
  console.group("Valor de referencia");
  console.log(app);

  alert("I believe in a thing call love");
}

function keysDown(e) {
  console.group("Times Down");
  console.log(e.keyCode);
  console.groupEnd();
  keys[e.keyCode] = true;
}

function keysUp(e) {
  console.group("Times Up");
  console.log(e.keyCode);
  console.groupEnd();
  keys[e.keyCode] = false;
}

function gameLoop() {
  if (keys["65"]) {
    player.x -= 5;
  }
  if (keys["40"]) {
    player.x += 5;
    app.renderer.backgroundColor = 0xff0000;
  }
}
