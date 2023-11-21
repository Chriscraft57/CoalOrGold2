// Create a Pixi.js application
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x1099bb,
  autoResize: true, // Allow automatic resizing
  resolution: window.devicePixelRatio,
});
document.body.appendChild(app.view);

PIXI.Loader.shared.add('background', 'Assets/background.png').load((loader, resources) => {
  // Create a sprite using the loaded image
  const background = new PIXI.Sprite(resources.background.texture);

  // Set the position to cover the entire screen
  background.width = app.screen.width;
  background.y = app.screen.height / 4.5 - background.height / 2;

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


// Load the spritesheet image and create a PIXI.BaseTexture
const baseTexture = PIXI.BaseTexture.from(shopanim.meta.image);

// Create an array to hold the textures from the frames
const textures = [];
for (const frameName in shopanim.frames) {
  if (Object.hasOwnProperty.call(shopanim.frames, frameName)) {
    const frame = shopanim.frames[frameName];
    const texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(frame.frame.x, frame.frame.y, frame.frame.w, frame.frame.h));
    textures.push(texture);
  }
}

// Create an AnimatedSprite using the generated textures
const shopSpritesheet = new PIXI.AnimatedSprite(textures);
shopSpritesheet.anchor.set(0.5); // Adjust anchor point as needed
shopSpritesheet.x = app.screen.width / 3.95;
shopSpritesheet.y = app.screen.height / 1.565;
shopSpritesheet.animationSpeed = 0.1666/8;
shopSpritesheet.play();

app.stage.addChild(shopSpritesheet);

const minetexture = PIXI.Texture.from('Assets/mines.png')
const mines = new PIXI.Sprite(minetexture)
mines.x = app.screen.width / 1.4
mines.y = app.screen.height / 1.93
app.stage.addChild(mines)





// Create a player
const playerSprite = PIXI.Texture.from('Assets/player.png')
const player = new PIXI.Sprite(playerSprite);
player.x = app.screen.width / 2 - player.width / 2;
player.y = app.screen.height / 1.5 - player.height / 1.5;
app.stage.addChild(player);




// Define movement speed
const playerSpeed = 3

// Define player velocity
let playerVx = 0;



const spaceText = PIXI.Texture.from('Assets/space.png')
const space = new PIXI.Sprite(spaceText);
app.stage.addChild(space)
foreground.y = app.screen.height / 1.23 - foreground.height / 1.5;
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
crate1.x = app.screen.width / 2;
crate1.y = app.screen.height / 3.5;
crate1.visible = false
crate1.scale.set(0.2)
app.stage.addChild(crate1);

const crate2 = new PIXI.Sprite(CrateTex);
crate2.anchor.set(0.5); // Adjust anchor point as needed
crate2.x = app.screen.width / 2-150;
crate2.y = app.screen.height / 3.5;
crate2.visible = false
crate2.scale.set(0.2)
app.stage.addChild(crate2);

const crate3 = new PIXI.Sprite(CrateTex);
crate3.anchor.set(0.5); // Adjust anchor point as needed
crate3.x = app.screen.width / 2+150;
crate3.y = app.screen.height / 3.5;
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

space.x = player.x

  if (110 <= player.x && player.x <= 160) {
    space.visible = true
    const SpaceKey = keyboard("Space");
    SpaceKey.press = () => {
      if (110 <= player.x && player.x <= 160)
      CoinText.visible = true
    }
  }
  else 
  if(!530 <= player.x && !player.x <= 606)



  if (530 <= player.x && player.x <= 606) {
    space.visible = true
    const SpaceKey = keyboard("Space");
    SpaceKey.press = () => {
      if (530 <= player.x && player.x <= 606){
        crate1.visible = true
        crate2.visible = true
        crate3.visible = true

        crate1 = true
        crate2.visible = true
        crate3.visible = true
        
       // 1 -> Gold
       // 2 & 3 -> Kohle
       // 4 -> Diamant


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

  else{
    space.visible = false
    CoinText.visible = false
    crate1.visible = false
    crate2.visible = false
    crate3.visible = false
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