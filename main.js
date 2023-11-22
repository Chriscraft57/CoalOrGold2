// Create a Pixi.js application
const app = new PIXI.Application({
  width: 1280,
  height: 720,
  backgroundColor: 0x1099bb,
  autoResize: true, // Allow automatic resizing
  antialias: false
});
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
document.body.appendChild(app.view);

c1content = null
c2content = null
c3content = null



PIXI.Loader.shared.add('background', 'Assets/background.png').load((loader, resources) => {
  // Create a sprite using the loaded image
  const background = new PIXI.Sprite(resources.background.texture);

  // Set the position to cover the entire screen
  background.width = app.screen.width;
  background.y = -200;
  background.scale.set(2)

  // Add the background to the stage as the first element
  app.stage.addChildAt(background, 0); // Add at index 0 to render at the bottom
});

  const foregroundTexture = PIXI.Texture.from('Assets/foreground.png')
  const foreground = new PIXI.Sprite(foregroundTexture);
  foreground.width = app.screen.width;
  app.stage.addChild(foreground)
  foreground.y = app.screen.height / 1.23 - foreground.height / 1.5;


const shopanim = {"frames": {

  "shop.png":
  {
    "frame": {"x":0,"y":0,"w":216,"h":180},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":216,"h":180},
    "sourceSize": {"w":216,"h":180}
  },
  "shop2.png":
  {
    "frame": {"x":216,"y":0,"w":216,"h":180},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":216,"h":180},
    "sourceSize": {"w":216,"h":180}
  }},
  "meta": {
    "app": "https://www.codeandweb.com/texturepacker",
    "version": "1.1",
    "image": "shop.png",
    "format": "RGBA8888",
    "size": {"w":432,"h":180},
    "scale": "1",
    "smartupdate": "$TexturePacker:SmartUpdate:8cb6324d7bfecae8abf916239f0520a4:ad732ebe5993abcc36065d6b49fc4111:9b474ecad0a68c8690698c029d1f12b5$"
  }
}

const playerRight = {"frames": {

  "player1.png":
  {
    "frame": {"x":0,"y":0,"w":60,"h":60},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
    "sourceSize": {"w":60,"h":60}
  },
  "player2.png":
  {
    "frame": {"x":60,"y":0,"w":60,"h":60},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
    "sourceSize": {"w":60,"h":60}
  },
  "player3.png":
  {
    "frame": {"x":120,"y":0,"w":60,"h":60},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
    "sourceSize": {"w":60,"h":60}
  },
  "player4.png":
  {
    "frame": {"x":180,"y":0,"w":60,"h":60},
    "rotated": false,
    "trimmed": false,
    "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
    "sourceSize": {"w":60,"h":60}
  }},
  "animations": {
    "player": ["player1.png","player2.png","player3.png","player4.png"]
  },
  "meta": {
    "app": "https://www.codeandweb.com/texturepacker",
    "version": "1.1",
    "image": "playerRight.png",
    "format": "RGBA8888",
    "size": {"w":240,"h":60},
    "scale": "1",
    "smartupdate": "$TexturePacker:SmartUpdate:4b2923caf912d5972a5feced4a7edff8:87cb5f17025811a4fa7789147f26cb4c:60b476dfcd4a3b95b14ca7ae816fa69a$"
  }
  }
  
  const playerLeft = {"frames": {

    "player1.png":
    {
      "frame": {"x":0,"y":0,"w":60,"h":60},
      "rotated": false,
      "trimmed": false,
      "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
      "sourceSize": {"w":60,"h":60}
    },
    "player2.png":
    {
      "frame": {"x":60,"y":0,"w":60,"h":60},
      "rotated": false,
      "trimmed": false,
      "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
      "sourceSize": {"w":60,"h":60}
    },
    "player3.png":
    {
      "frame": {"x":120,"y":0,"w":60,"h":60},
      "rotated": false,
      "trimmed": false,
      "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
      "sourceSize": {"w":60,"h":60}
    },
    "player4.png":
    {
      "frame": {"x":180,"y":0,"w":60,"h":60},
      "rotated": false,
      "trimmed": false,
      "spriteSourceSize": {"x":0,"y":0,"w":60,"h":60},
      "sourceSize": {"w":60,"h":60}
    }},
    "animations": {
      "player": ["player1.png","player2.png","player3.png","player4.png"]
    },
    "meta": {
      "app": "https://www.codeandweb.com/texturepacker",
      "version": "1.1",
      "image": "playerLeft.png",
      "format": "RGBA8888",
      "size": {"w":240,"h":60},
      "scale": "1",
      "smartupdate": "$TexturePacker:SmartUpdate:b2464f6ff37cadd1146902f5ddac8f38:efcc179696ecb9d11ad0468af43069b2:60b476dfcd4a3b95b14ca7ae816fa69a$"
    }
    }
    ;



// Load the spritesheet image and create a PIXI.BaseTexture
const baseTextureShop = PIXI.BaseTexture.from(shopanim.meta.image);

// Create an array to hold the textures from the frames
const texturesShop = [];
for (const frameName in shopanim.frames) {
  if (Object.hasOwnProperty.call(shopanim.frames, frameName)) {
    const frameShop = shopanim.frames[frameName];
    const textureShop = new PIXI.Texture(baseTextureShop, new PIXI.Rectangle(frameShop.frame.x, frameShop.frame.y, frameShop.frame.w, frameShop.frame.h));
    texturesShop.push(textureShop);
  }
}

// Create an AnimatedSprite using the generated textures
const shopSpritesheet = new PIXI.AnimatedSprite(texturesShop);
shopSpritesheet.anchor.set(0.5); // Adjust anchor point as needed
shopSpritesheet.x = 380;
shopSpritesheet.y = 465;
shopSpritesheet.animationSpeed = 0.01666;
shopSpritesheet.play();

app.stage.addChild(shopSpritesheet);



// Create a player
const playerSprite = PIXI.Texture.from('Assets/player.png')
const player = new PIXI.Sprite(playerSprite);
player.x = app.screen.width / 2 - player.width / 2;
player.y = 479;

const minetexture = PIXI.Texture.from('Assets/mines.png')
const mines = new PIXI.Sprite(minetexture)
mines.x = 1070;
mines.y = 420;
app.stage.addChild(mines)




app.stage.addChild(player);



// Load the spritesheet image and create a PIXI.BaseTexture
const baseTexturePlayerRight = PIXI.BaseTexture.from(playerRight.meta.image);

// Create an array to hold the textures from the frames
const texturesPlayerRight = [];
for (const frameName in playerRight.frames) {
  if (Object.hasOwnProperty.call(playerRight.frames, frameName)) {
    const framePlayerRight = playerRight.frames[frameName];
    const texturePlayerRight = new PIXI.Texture(baseTexturePlayerRight, new PIXI.Rectangle(framePlayerRight.frame.x, framePlayerRight.frame.y, framePlayerRight.frame.w, framePlayerRight.frame.h));
    texturesPlayerRight.push(texturePlayerRight);
  }
}

// Create an AnimatedSprite using the generated textures
const playerRightSpritesheet = new PIXI.AnimatedSprite(texturesPlayerRight);
playerRightSpritesheet.anchor.set(0.5); // Adjust anchor point as needed
playerRightSpritesheet.x = player.x
playerRightSpritesheet.y = player.y
playerRightSpritesheet.animationSpeed = 0.1666;
playerRightSpritesheet.play();

app.stage.addChild(playerRightSpritesheet);

// Load the spritesheet image and create a PIXI.BaseTexture for the left movement
const baseTexturePlayerLeft = PIXI.BaseTexture.from(playerLeft.meta.image);

// Create an array to hold the textures from the frames for left movement
const texturesPlayerLeft = [];
for (const frameName in playerLeft.frames) {
  if (Object.hasOwnProperty.call(playerLeft.frames, frameName)) {
    const framePlayerLeft = playerLeft.frames[frameName];
    const texturePlayerLeft = new PIXI.Texture(baseTexturePlayerLeft, new PIXI.Rectangle(framePlayerLeft.frame.x, framePlayerLeft.frame.y, framePlayerLeft.frame.w, framePlayerLeft.frame.h));
    texturesPlayerLeft.push(texturePlayerLeft);
  }
}

// Create an AnimatedSprite using the generated textures for left movement
const playerLeftSpritesheet = new PIXI.AnimatedSprite(texturesPlayerLeft);
playerLeftSpritesheet.anchor.set(0.5); // Adjust anchor point as needed
playerLeftSpritesheet.x = player.x;
playerLeftSpritesheet.y = player.y;
playerLeftSpritesheet.animationSpeed = 0.1666;
playerLeftSpritesheet.play();

app.stage.addChild(playerLeftSpritesheet);





// Define movement speed
const playerSpeed = 3

// Define player velocity
let playerVx = 0;



const spaceText = PIXI.Texture.from('Assets/space.png')
const space = new PIXI.Sprite(spaceText);
app.stage.addChild(space)
foreground.y = player.y+55;
space.x = player.x
space.scale.set(0.2)
space.y = player.y - 15
space.visible = false


const CoinTextTex = PIXI.Texture.from('Assets/CoinText.png');
const CoinText = new PIXI.Sprite(CoinTextTex);
CoinText.anchor.set(0.5); // Adjust anchor point as needed
CoinText.x = app.screen.width / 2;
CoinText.y = app.screen.height / 4;
CoinText.scale.set(0.5)
CoinText.visible = false
app.stage.addChild(CoinText);

const CrateTex = PIXI.Texture.from('Assets/crate.png');
const crate1 = new PIXI.Sprite(CrateTex);
crate1.anchor.set(0.5); // Adjust anchor point as needed
crate1.x = 1280 / 2 - crate1.width / 2 - 200;
crate1.y = 250;
crate1.visible = false
crate1.scale.set(0.2)
app.stage.addChild(crate1);

const crate2 = new PIXI.Sprite(CrateTex);
crate2.anchor.set(0.5); // Adjust anchor point as needed
crate2.x = 1280 / 2 - crate2.width / 2;
crate2.y = 250;
crate2.visible = false
crate2.scale.set(0.2)
app.stage.addChild(crate2);

const crate3 = new PIXI.Sprite(CrateTex);
crate3.anchor.set(0.5); // Adjust anchor point as needed
crate3.x = crate2.x + 200;
crate3.y = 250;
crate3.visible = false
crate3.scale.set(0.2)
app.stage.addChild(crate3);





score = 0;
const shadow = new PIXI.Text("Score: " + score, { fill: 0x000000, fontSize:20 });
  shadow.anchor.set(0.5);
  shadow.position.set(50, 20);
  shadow.style.stroke = '#000000';
  shadow.style.strokeThickness = 4; // Adjust the thickness of the outline
  app.stage.addChild(shadow);

  const mainText = new PIXI.Text(shadow.text, { fill: 0xffffff, fontSize:20 });
  mainText.anchor.set(0.5);
  mainText.position.set(shadow.x, shadow.y);
  app.stage.addChild(mainText);



// Listen for keyboard events
const left = keyboard("KeyA");
const right = keyboard("KeyD");
const leftARROW = keyboard("ArrowLeft");
const rightARROW = keyboard("ArrowRight");

function leftPress()
{
  if (left.isDown || leftARROW.isDown)
    return true;
}

function rightPress()
{
  if (right.isDown || rightARROW.isDown)
    return true;
}
// Game loop
app.ticker.add(() => {

  // Controls
  if (leftPress()) {
    playerVx = -playerSpeed;
  }
  if (rightPress()) {
    playerVx = playerSpeed;
  }
  if (!leftPress() && !rightPress() || leftPress() && rightPress()) {
    playerVx = 0;
  }
  

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

space.x = player.x

 // Check if the player is moving right and update the sprite accordingly
if (playerVx > 0) {
  // Show and update the animated sprite for moving right
  playerRightSpritesheet.visible = true;
  playerRightSpritesheet.x = player.x + 30;
  playerRightSpritesheet.y = player.y+30;
  playerRightSpritesheet.play();

  // Hide other sprites
  player.visible = false;
  playerLeftSpritesheet.visible = false;
  playerLeftSpritesheet.stop();
} else if (playerVx < 0) { // Check if the player is moving left
  // Show and update the animated sprite for moving left
  playerLeftSpritesheet.visible = true;
  playerLeftSpritesheet.x = player.x + 30; // Adjust position accordingly
  playerLeftSpritesheet.y = player.y+30; // Adjust y position as needed
  playerLeftSpritesheet.play();

  // Hide other sprites
  player.visible = false;
  playerRightSpritesheet.visible = false;
  playerRightSpritesheet.stop();
} else {
  // Show the default player sprite when not moving
  player.visible = true;

  // Hide both animated sprites when not moving
  playerRightSpritesheet.visible = false;
  playerRightSpritesheet.stop();
  playerLeftSpritesheet.visible = false;
  playerLeftSpritesheet.stop();
}



  if (285 <= player.x && player.x <= 360) {
    space.visible = true
    const SpaceKey = keyboard("Space");
    SpaceKey.press = () => {
      if (285 <= player.x && player.x <= 360)
      CoinText.visible = true
    }
  }
  else 
  if(!1060 <= player.x && !player.x <= 1140)



  if (1060 <= player.x && player.x <= 1140) {
    space.visible = true
    const SpaceKey = keyboard("Space");
    SpaceKey.press = () => {
      if (1060 <= player.x && player.x <= 1140){
        crate1.visible = true
        crate2.visible = true
        crate3.visible = true

        crate1.visible = true
        crate2.visible = true
        crate3.visible = true
        
       // 1 -> Gold
       // 2 & 3 -> Kohle
       // 4 -> Diamant

if (c1content == null){



        c1content = randomIntFromInterval(1,3)
        c2content = randomIntFromInterval(1,3)
        c3content = randomIntFromInterval(1,3)
        
        if(c1content == 1){
          if (randomIntFromInterval(1,10) == 1)
          c1content = 4
        }
        if(c2content == 1){
          if (randomIntFromInterval(1,10) == 1)
          c2content = 4
        }
        if(c3content == 1){
          if (randomIntFromInterval(1,10) == 1)
          c3content = 4
        }

        console.log(c1content + ", " + c2content + ", " + c3content)



      }
      }
      
    }

  }

  else{
    space.visible = false
    CoinText.visible = false
    crate1.visible = false
    crate2.visible = false
    crate3.visible = false

    c1content = null
    c2content = null
    c3content = null
  }

});




const kKey = keyboard("KeyK");
kKey.press = () => {
  score++;
  updateScore();
  console.log(`Player coordinates: x = ${player.x}, y = ${player.y}`);
};

function keyboard(keyCode) {
  const key = {};
  key.code = keyCode;
  key.isDown = false;
}

  // Keydown event listener
  const downHandler = (event) => {
    if (event.code === key.code) {
      if (!key.isDown) {
        key.isDown = true;
        event.preventDefault();
        if (key.press) key.press();
      }
    }
  };




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

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function RevealC1(){

}
function RevealC2(){

}
function RevealC3(){

}

async function loadAnim(){
  await shopSpritesheet.parse();
}
function updateScore(){
  mainText.text = "Score: "+score
  shadow.text = mainText.text
}