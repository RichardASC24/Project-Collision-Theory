let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let score = 0;




let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function preload() {
    blockyImage1 = loadImage("images/blocky1.png");
    blockyImage2 = loadImage("images/blocky2.png");
}

function setup() {
   createCanvas(500, 500);
   noStroke();

   imageMode(CENTER);

}


function draw() {
   background(0);

   image(blockyImage1, myXPos, myYPos, 100, 100);
   image(blockyImage2, enemyXPos, enemyYPos, 100, 100);

   // Display the Score
   fill(255);
   textSize(30);
   text("Score: " + score, 10, 40);



   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }


   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;


   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;

   // Detects NON COLLISION
   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {


   }


   else {
    // these functions change the position of the blue square if it collides with the red square
    enemyXPos = int(random(25, 375));
    enemyYPos = int(random(25, 375));

    score = score += 1;
    
   }
}
