/**
 * @file Metal Snake (for Last Call BBS)
 * @version 0.1
 *
 */
let gameStart = false;
let xCollision = false;
let yCollision = false; 
let gameoverBoolean = false; 
let snakeMoveSpeed = 1;
let snakeCounter = 0; 
let snakeCounterTimescale = .5; 
let snakeLength = 0; 
let score = 0;
let moveSnake = true; 
let pickupinWall = false;
let pickupinWallonce = false;
let pickup = {Character: "♦", y: 7, x: 30} 
let player = {Character: "☺",brightness: 17, y: 7, x: 22, Direction: 2} 
let wallArray = [wall1 = {Character: "╔", brightness: 17, y: 8, x: 26}, wall2 = {Character: "╗", brightness: 17, y: 8, x: 27},
wall3 = {Character: "╝", brightness: 17, y: 9, x: 27}, wall4 = {Character: "╚", brightness: 17, y: 9, x: 26}, 
wallnwCorner = {Character: "╔", brightness: 17, y: 4, x: 18}, wallnwCornereastpiece = {Character: "═", brightness: 17, y: 4, x: 19}, wallnwCornersouthpiece = {Character: "║", brightness: 17, y: 5, x: 18}, 
wallswCorner = {Character: "╚", brightness: 17, y: 14, x: 18}, wallswCornereastpiece = {Character: "═", brightness: 17, y: 14, x: 19}, wallswCornernorthpiece = {Character: "║", brightness: 17, y: 13, x: 18},
wallneCorner = {Character: "╗", brightness: 17, y: 4, x: 35}, wallneCornerwestpiece = {Character: "═", brightness: 17, y: 4, x: 34}, wallneCornersouthpiece = {Character: "║", brightness: 17, y: 5, x: 35}, 
wallseCorner = {Character: "╝", brightness: 17, y: 14, x: 35}, wallseCornerwestpiece = {Character: "═", brightness: 17, y: 14, x: 34}, wallseCornernorthpiece = {Character: "║", brightness: 17, y: 13, x: 35},

walleast = {Character: "╔", brightness: 17, y: 1, x: 15}, walleast1 = {Character: "═", brightness: 17, y: 1, x: 16}, walleast2 = {Character: "═", brightness: 17, y: 1, x: 17}, walleast3 = {Character: "═", brightness: 17, y: 1, x: 18},
walleast4 = {Character: "═", brightness: 17, y: 1, x: 19},walleast5 = {Character: "═", brightness: 17, y: 1, x: 20},walleast6 = {Character: "═", brightness: 17, y: 1, x: 21},walleast7 = {Character: "═", brightness: 17, y: 1, x: 22},
walleast8 = {Character: "═", brightness: 17, y: 1, x: 23},walleast9 = {Character: "═", brightness: 17, y: 1, x: 24},walleast10 = {Character: "═", brightness: 17, y: 1, x: 25},walleast11 = {Character: "═", brightness: 17, y: 1, x: 26},
walleast12 = {Character: "═", brightness: 17, y: 1, x: 27},walleast13 = {Character: "═", brightness: 17, y: 1, x: 28},walleast14 = {Character: "═", brightness: 17, y: 1, x: 29},walleast15 = {Character: "═", brightness: 17, y: 1, x: 30},
walleast16 = {Character: "═", brightness: 17, y: 1, x: 31},walleast17 = {Character: "═", brightness: 17, y: 1, x: 32},walleast18 = {Character: "═", brightness: 17, y: 1, x: 33},walleast19 = {Character: "═", brightness: 17, y: 1, x: 34},
walleast20 = {Character: "═", brightness: 17, y: 1, x: 35},walleast23 = {Character: "╗", brightness: 17, y: 1, x: 38}, walleast22 = {Character: "═", brightness: 17, y: 1, x: 37}, walleast21 = {Character: "═", brightness: 17, y: 1, x: 36},

wallsoutheast = {Character: "║", brightness: 17, y: 2, x: 38},wallsoutheast1 = {Character: "║", brightness: 17, y: 3, x: 38},
wallsoutheast2 = {Character: "║", brightness: 17, y: 4, x: 38},wallsoutheast3 = {Character: "║", brightness: 17, y: 5, x: 38},wallsoutheast4 = {Character: "║", brightness: 17, y: 6, x: 38},
wallsoutheast5 = {Character: "║", brightness: 17, y: 7, x: 38},wallsoutheast6 = {Character: "║", brightness: 17, y: 8, x: 38},wallsoutheast7 = {Character: "║", brightness: 17, y: 9, x: 38}, 
wallsoutheast8 = {Character: "║", brightness: 17, y: 10, x: 38}, wallsoutheast9 = {Character: "║", brightness: 17, y: 11, x: 38}, wallsoutheast10 = {Character: "║", brightness: 17, y: 12, x: 38},
wallsoutheast11 = {Character: "║", brightness: 17, y: 13, x: 38}, wallsoutheast12 = {Character: "║", brightness: 17, y: 14, x: 38},wallsoutheast13 = {Character: "║", brightness: 17, y: 15, x: 38},
wallsoutheast14 = {Character: "║", brightness: 17, y: 16, x: 38},

wallsouthwest = {Character: "║", brightness: 17, y: 2, x: 15},
wallsouthwest1 = {Character: "║", brightness: 17, y: 3, x: 15},wallsouthwest2 = {Character: "║", brightness: 17, y: 4, x: 15},wallsouthwest3 = {Character: "║", brightness: 17, y: 5, x: 15},
wallsouthwest4 = {Character: "║", brightness: 17, y: 6, x: 15},
wallsouthwest5 = {Character: "║", brightness: 17, y: 7, x: 15},wallsouthwest6 = {Character: "║", brightness: 17, y: 8, x: 15},wallsouthwest7 = {Character: "║", brightness: 17, y: 9, x: 15}, 
wallsouthwest8 = {Character: "║", brightness: 17, y: 10, x: 15}, wallsouthwest9 = {Character: "║", brightness: 17, y: 11, x: 15}, wallsouthwest10 = {Character: "║", brightness: 17, y: 12, x: 15},
wallsouthwest11 = {Character: "║", brightness: 17, y: 13, x: 15}, wallsouthwest12 = {Character: "║", brightness: 17, y: 14, x: 15},wallsouthwest13 = {Character: "║", brightness: 17, y: 15, x: 15}, 
wallsouthwest14 = {Character: "║", brightness: 17, y: 16, x: 15},

wallsouth = {Character: "╚", brightness: 17, y: 17, x: 15}, wallsouth1 = {Character: "═", brightness: 17, y: 17, x: 16}, wallsouth2 = {Character: "═", brightness: 17, y: 17, x: 17}, wallsouth3 = {Character: "═", brightness: 17, y: 17, x: 18},
wallsouth4 = {Character: "═", brightness: 17, y: 17, x: 19},wallsouth5 = {Character: "═", brightness: 17, y: 17, x: 20},wallsouth6 = {Character: "═", brightness: 17, y: 17, x: 21},wallsouth7 = {Character: "═", brightness: 17, y: 17, x: 22},
wallsouth8 = {Character: "═", brightness: 17, y: 17, x: 23},walleast9 = {Character: "═", brightness: 17, y: 17, x: 24},wallsouth10 = {Character: "═", brightness: 17, y: 17, x: 25},wallsouth11 = {Character: "═", brightness: 17, y: 17, x: 26},
wallsouth12 = {Character: "═", brightness: 17, y: 17, x: 27},wallsouth13 = {Character: "═", brightness: 17, y: 17, x: 28},wallsouth14 = {Character: "═", brightness: 17, y: 17, x: 29},wallsouth15 = {Character: "═", brightness: 17, y: 17, x: 30},
wallsouth16 = {Character: "═", brightness: 17, y: 17, x: 31},wallsouth17 = {Character: "═", brightness: 17, y: 17, x: 32},wallsouth18 = {Character: "═", brightness: 17, y: 17, x: 33},wallsouth19 = {Character: "═", brightness: 17, y: 17, x: 34},
wallsouth20 = {Character: "═", brightness: 17, y: 17, x: 35},wallsouth21 = {Character: "═", brightness: 17, y: 17, x: 36},wallsouth22 = {Character: "═", brightness: 17, y: 17, x: 37},wallsouth24 = {Character: "╝", brightness: 17, y: 17, x: 38},
]
let snakebodyTemplate = {Character: "☻",brightness: 2, y: 99, x: 99}

let snakeArray = [player]; 
let pastsnakeArray = [snakebodyTemplate, snakebodyTemplate, snakebodyTemplate];  
// █▟▙▜▛▀▄▐▌▝▘▗▖─═║╔╗╚╝╠╣╦╩╬><▲▼☺☻⚉ ™ ♦ ♣ ♠ ♥
function getName() {
    return "Metal Snake";
}

function onConnect() {
    // Title Screen 
    drawText("Metal Snake™", 17,20,2);
}

function startGame() {
    //load screen 1/level 1 
    gameStart = true; 
}
function onUpdate() 
{
    drawObjects();
    snakeArray.forEach(drawsnakearrayFunction);
    wallArray.forEach(drawwallarrayFunction);
    scoreCalculation();
    drawValues();
    if (gameStart == true && gameoverBoolean == false) 
    {
        clearScreen();
        startGame();
        snakeTimer();
        snakeFalse(); 
        snakeTimerSubtract();
        snakeMove();
        pickupCollision();

        scoreCalculation();
        drawObjects();
        snakeArray.forEach(drawsnakearrayFunction); 
        wallArray.forEach(drawwallarrayFunction);
        
        drawValues();

    } else if (gameoverBoolean == true) 
    {
        clearScreen();
    
        drawText("Game Over", 15,22,3);
        drawText("Press F1 to restart", 15,17,5)
        drawText("Your score was " + snakeLength, 17,18,7)
    }
}

function snakecollisionCheck(pastsnakeArray, wallArray)
{
    if (player.x == pastsnakeArray.x && player.y == pastsnakeArray.y || player.x == wallArray.x && player.y == wallArray.y) 
    {
        gameoverBoolean = true;
        gameStart = false; 
    }
}
function drawsnakearrayFunction(snakeArray) 
{
    drawText(snakeArray.Character, snakeArray.brightness, snakeArray.x, snakeArray.y);
}
function drawwallarrayFunction(wallArray) 
{
    drawText(wallArray.Character, wallArray.brightness, wallArray.x, wallArray.y);
}


function snakeTimer() 
{
    snakeCounter += snakeCounterTimescale;
    if (snakeCounter >= .5) 
    {
        moveSnake = true; 
    } 
} 
function snakeTimerSubtract() 
{
    if (snakeCounter >= 1) 
    {
        snakeCounter -= 1;
    }
}
function snakeFalse()
{
    if (snakeCounter >= 1)
    {
        moveSnake = false; 
        pastsnakeArray.forEach(snakecollisionCheck); //Checks if player (the snakes head) is colliding with itself
        wallArray.forEach(snakecollisionCheck); //Checks if player (the snakes head) is colliding with walls. 
        pastsnakeArray = JSON.parse(JSON.stringify(snakeArray)); // Creates hard copy of snakeArray and puts it in pastsnakeArray (it updates pastsnakeArray each time its called)
    }
}

{
    snakeArray
}
function snakeMove() 
{
    if (moveSnake == true) 
    {
        setPlayerDirection();

        for(let step = 1, step2 = 0; step2 < snakeLength; step++, step2++)
        {
            snakeArray[step] = pastsnakeArray[step2];
        }

    } 
}

function drawObjects() 
{
    drawText(pickup.Character, 17,pickup.x, pickup.y); 

}
function pickupCollision() {
    if (player.x == pickup.x) 
    {
        xCollision = true;       
    } else {
        xCollision = false; 
    }
    if (player.y == pickup.y) 
    {
        yCollision = true;       
    } else {
        yCollision = false; 
    }

    if (xCollision == true && yCollision == true) {
        snakeLength += 1; 

        snakeArray.push(snakebodyTemplate)
        pickuplocationGeneration(); 
    }
}

function pickuplocationGeneration() 
{
    pickup.x = getRandomArbitrary(17,36); // RNG for pickup x coordinate boxed in area is 17-36 for x
    pickup.y = getRandomArbitrary(3,15); // RNG for pickup y coordinate boxed in area is 3-15 for Y
    for (let step = 0; step < 38; step++) 
{
    if (pickup.x == wallArray[step].x && pickup.y == wallArray[step].y || pickup.x == pastsnakeArray.x && pickup.y == pastsnakeArray.y) 
    {
        pickupinWall = true;
        pickupinWallonce = true;
        pickup.x = getRandomArbitrary(17,36); // RNG for pickup x coordinate boxed in area is 17-36 for x
        pickup.y = getRandomArbitrary(3,15); // RNG for pickup y coordinate boxed in area is 3-15 for Y
        step = 0; 
    }  else {pickupinWall = false;}
}
}

function setPlayerDirection() 
{ 
    if (player.Direction == 1) {
        player.x -= snakeMoveSpeed; 
    }
    if (player.Direction == 2) {
        player.x += snakeMoveSpeed;
    }
    if (player.Direction == 3) {
        player.y += snakeMoveSpeed; 
    }
    if (player.Direction == 4) {
        player.y -= snakeMoveSpeed; 
    }
}
function onInput(key)  
{
    if (key == 17 || key == 119) 
    {
        startGame();
        // Set DirectionMove player up
        player.Direction = 4; 
    }
    if (key == 18 || key == 115) {
        startGame();
        // Move player down
        player.Direction = 3
    }
    if (key == 19 || key == 97) {
        startGame();
        // Set DirectionMove player left
        player.Direction = 1; 
    }
    if (key == 20 || key == 100) {
        startGame();
        // Move player right
        player.Direction = 2
    }
}
function scoreCalculation()
{
    score = snakeLength;
    toString(score)
    {
        drawText("SCORE : " + score , 17, 3, 1);
    }
}
function drawValues() 
{

    toString(pickup.x) 
    {
        drawText("Press WASD", 17, 41, 1); 
        drawText("or Arrow Keys", 17, 40, 2)
        drawText("to move", 17, 42, 3)
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
