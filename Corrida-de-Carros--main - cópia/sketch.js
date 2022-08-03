var bg;
var player;


function preload() {
    //bg = loadImage("./assests/bg.jpeg");
}

function setup() {
    createCanvas(824, 768);
    player = createSprite(250, 350, 10, 10);
    player.shapeColor = "red"
   
}

function draw() {
    background("black");



    console.log("player: " + player.x, player.y)
    // console.log(camera.position.x, camera.position.y)


    drawSprites();
    controls();
}

function controls() {
    if (keyDown(LEFT_ARROW)) {
        player.x -= 10;
    }
    if (keyDown(RIGHT_ARROW)) {
        player.x += 10;
    }
    if (keyDown(UP_ARROW)) {
        player.y -= 10;
    }
    if (keyDown(DOWN_ARROW)) {
        player.y += 10;
    }
}

