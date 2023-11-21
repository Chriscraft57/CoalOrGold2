// Create a Pixi.js application
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x1099bb,
  autoResize: true, // Allow automatic resizing
  resolution: window.devicePixelRatio,
});
document.body.appendChild(app.view);



// Create a trigger zone area
const shoptexture = PIXI.Texture.from('Assets/shop.png');
const triggerZone = new PIXI.Sprite(shoptexture);
triggerZone.anchor.set(0.5); // Adjust anchor point as needed
triggerZone.x = app.screen.width / 3.95;
triggerZone.y = app.screen.height / 1.565;

app.stage.addChild(triggerZone);


// Create a player
const playerSprite = PIXI.Texture.from('Assets/player.png')
const player = new PIXI.Sprite(playerSprite);
player.x = app.screen.width / 2 - player.width / 2;
player.y = app.screen.height / 1.5 - player.height / 1.5;
app.stage.addChild(player);

// Create a button (initially hidden)
const button = new PIXI.Graphics();
button.beginFill(0x00FF00);
button.drawRect(300, 300, 50, 30); // Adjust these values for your button position and size
button.endFill();
button.visible = false;
app.stage.addChild(button);

// Define movement speed
const playerSpeed = 5;

// Define player velocity
let playerVx = 0;

// Listen for keyboard events
const left = keyboard("KeyA");
const right = keyboard("KeyD");
const leftARROW = keyboard("ArrowLeft");
const rightARROW = keyboard("ArrowRight");


// Handle key press and release events
left.press = () => {
  playerVx = -playerSpeed;
};

left.release = () => {
  if (!right.isDown) {
    playerVx = 0;
  }
};

right.press = () => {
  playerVx = playerSpeed;
};

right.release = () => {
  if (!left.isDown) {
    playerVx = 0;
  }
};

leftARROW.press = () => {
  playerVx = -playerSpeed;
};

leftARROW.release = () => {
  if (!right.isDown) {
    playerVx = 0;
  }
};

rightARROW.press = () => {
  playerVx = playerSpeed;
};

rightARROW.release = () => {
  if (!left.isDown) {
    playerVx = 0;
  }
};

// Game loop
app.ticker.add(() => {
  // Update player position based on velocity
  player.x += playerVx;


  
  // Keep player within bounds
  const minX = 0;
  const maxX = app.screen.width - player.width;

  if (player.x < minX) {
    player.x = minX;
  } else if (player.x > maxX) {
    player.x = maxX;
  }

  // Logging message on each app update
  console.log("App updated");
});


// Keyboard input handler
function keyboard(keyCode) {
  const key = {};
  key.code = keyCode;
  key.isDown = false;

  key.press = undefined;
  key.release = undefined;

  key.downHandler = (event) => {
    if (event.code === key.code) {
      if (!key.isDown && key.press) key.press();
      key.isDown = true;
      event.preventDefault();
    }
  };

  key.upHandler = (event) => {
    if (event.code === key.code) {
      if (key.isDown && key.release) key.release();
      key.isDown = false;
      event.preventDefault();
    }
  };

  window.addEventListener("keydown", key.downHandler.bind(key), false);
  window.addEventListener("keyup", key.upHandler.bind(key), false);

  return key;
}