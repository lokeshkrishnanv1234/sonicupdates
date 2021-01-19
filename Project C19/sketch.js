var back,back_image1,back_image2,back_image3,back_image4,back_image5,
back_image6,back_image7,back_image8,back_image9,back_image10,moving_back,moving;
var ring,Rings,ring_rotate;
var sonic,sonic_run;
var enemy,enemy_image1,enemy_image2,enemy_image3,enemy_image4,enemy_image5,
enemy_image6,enemy_image7,enemy_image8,enemy_image9,enemy_image10,enemies,EnemyGroup;
var chaos_emerald,emerald1,emerald2,emerald3,emerald4,emerald5,emerald6,emerald7;
var line1,line2,line3;
var gameState;
var gameState = PLAY;
var PLAY;
var END;
var rings = 0;
var score = 0;
var emeralds_collected = 0;
var gameover
var youwin

function preload(){
   ring_rotate = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png"
   ,"8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png")

   sonic_run = loadAnimation("soni.png")
   sonic_high = loadAnimation("gold soni.png");
   
   back_image1 = loadAnimation("back 1.png");
   back_image2 = loadAnimation("back 2.png");
   back_image3 = loadAnimation("back 3.png");
   back_image4 = loadAnimation("back 4.png");
   back_image5 = loadAnimation("back 5.png");
   back_image6 = loadAnimation("back 6.png");
   back_image7 = loadAnimation("back 7.png");
   back_image8 = loadAnimation("back 8.png");
   back_image9 = loadAnimation("back 9.png");
   back_image10 = loadAnimation("back 10.png");

   emerald1 = loadAnimation("indigo.png");
   emerald2 = loadAnimation("green.png");
   emerald3 = loadAnimation("blue.png");
   emerald4 = loadAnimation("pink.png");
   emerald5 = loadAnimation("red.png");
   emerald6 = loadAnimation("yellow.png");
   emerald7 = loadAnimation("white.png");

   enemy_image1 = loadImage("eggman.png");
   enemy_image2 = loadImage("gold shadow.png");
   enemy_image3 = loadImage("infinite.png");
   enemy_image4 = loadImage("mepi.png");
   enemy_image5 = loadImage("metal soni.png");
   enemy_image6 = loadImage("monster.png");
   enemy_image7 = loadImage("robot.png");
   enemy_image8 = loadImage("rouge.png");
   enemy_image9 = loadImage("shadow.png");
   enemy_image10 = loadImage("zazz.png");

   gameover_image = loadImage("gameover.jpg");
   youwin_image = loadImage("youwin.jpg");

   moving = loadAnimation("moving background.png");


   chaos = loadAnimation("chaos emeralds.png")

   rings = 0;
   score = 0;
   emeralds_collected = 0;
}

function setup() {
    createCanvas(700,700)

    back = createSprite(350,350,10,10);
    
    back.addAnimation("back_image1",back_image1);
    back.addAnimation("back_image2",back_image2);
    back.addAnimation("back_image3",back_image3);
    back.addAnimation("back_image4",back_image4);
    back.addAnimation("back_image5",back_image5);
    back.addAnimation("back_image6",back_image6);
    back.addAnimation("back_image7",back_image7);
    back.addAnimation("back_image8",back_image8);
    back.addAnimation("back_image9",back_image9);
    back.addAnimation("back_image10",back_image10);
    
    back.scale = 0.7;
   
    ringGroup = new Group();
    emeraldGroup = new Group();
    EnemyGroup = new Group();

    chaos_emerald = createSprite(605,25,10,10);
    chaos_emerald.addAnimation("chaos",chaos);
    chaos_emerald.scale = 0.1;
    
    ring = createSprite(30,25,30,30);
    ring.addAnimation("ring_rotate", ring_rotate);
    ring.scale = 0.25;



    sonic = createSprite(50,380,10,10);
    sonic.addAnimation("sonic_run",sonic_run);
    sonic.addAnimation("sonic_high",sonic_high);
    sonic.scale = 0.4;

    line1 = createSprite(350,50,700,1);
    line2 = createSprite(350,700,700,1);
    line3 = createSprite(350,625,700,1);
    line3.visible = false;

    gameover = createSprite(350,350,10,10);
    gameover.addImage(gameover_image);
    gameover.scale = 4;
    gameover.visible = false;

    youwin = createSprite(350,350,10,10);
    youwin.addImage(youwin_image);
    youwin.scale = 4;
    youwin.visible = false;

}

function draw() {
    background("black") 
    
    if(gameState === PLAY){
        score = score + Math.round(getFrameRate()/60); 
    if(score === 2000){
        back.changeAnimation("back_image2",back_image2);
        back.scale = 1;
    }
    if(score === 4000){
        back.changeAnimation("back_image3",back_image3);
        back.scale = 0.25;
    }
    if(score === 6000){
        back.changeAnimation("back_image4",back_image4);
        back.scale = 0.8;
    }
    if(score === 8000){
        back.changeAnimation("back_image5",back_image5);
        back.scale = 1.6;
    }
    if(score === 10000){
        back.changeAnimation("back_image6",back_image6);
        back.scale = 4.3;
    }
    if(score === 12000){
        back.changeAnimation("back_image7",back_image7);
        back.scale = 4.2;
    }
    if(score === 14000){
        back.changeAnimation("back_image8",back_image8);
        back.scale = 1.5;
    }
    if(score === 16000){
        back.changeAnimation("back_image9",back_image9);
        back.scale = 4.2;
    }

    if(score === 18000){
        back.changeAnimation("back_image10",back_image10);
        back.scale = 3.7;
    }
    if(score === 20000){
        back.changeAnimation("back_image1",back_image1);
        back.scale = 0.7;
    }


   if(keyWentDown("up")){
      sonic.velocityY = -5;
   }else if(keyWentUp("up")){
      sonic.velocityY = 0;
 }
    if(keyWentDown("down")){
      sonic.velocityY = 5;
    }else if(keyWentUp("down")){
      sonic.velocityY = 0;
    }

    if(sonic.isTouching(ringGroup)){
      ringGroup.destroyEach();  
      rings = rings + 1;
    }
   
    if(rings === 25){
        sonic.changeAnimation("sonic_high",sonic_high);
        sonic.scale = 0.03;
        rings = 0;

        if(EnemyGroup.isTouching(sonic) && gameState === PLAY){
            sonic.changeAnimation("sonic_run",sonic_run);
        }
    }

    if(emeralds_collected === 7){
        sonic.changeAnimation("sonic_high",sonic_high);
        sonic.scale = 0.03;
        emeralds_collected = 0;
    }

    if(sonic.isTouching(emeraldGroup)){
        emeraldGroup.destroyEach();
        emeralds_collected = emeralds_collected + 1;
    }

    if(score === 20000){
        youwin.visible = true;
        win();
    }

    Rings(); 
    enemies();
    emeralds();
   
    if(EnemyGroup.isTouching(sonic) && sonic.addAnimation("sonic_run",sonic_run)){
        END();
    }
}  
  

   sonic.bounceOff(line1);
   sonic.collide(line3);

   drawSprites();
    textSize(20);
    stroke("gold");
    strokeWeight(5);
    fill("white");
    text(": " + rings, 50,30);
 
    stroke("lightblue");
    
    text("Score: " + score,300,30);

    text(": " + emeralds_collected,670,30)
    fill("black");
    text(" Want to play again even in the middle of your game. Press CTRL + R",50,680)
    text("Get 25 rings or 7 chaos emralds for Gold Sonic",55,650)
}

function Rings(){
    if(frameCount % 80 === 0){

        var ring = createSprite(800,200,30,30);
        ring.addAnimation("ring_rotate", ring_rotate);
        ring.scale = 0.25;
        ring.velocityX = (random(-25,-1));
        
    
        ring.y = Math.round(random(70,610));
        ringGroup.add(ring);
    
   }
}

function enemies(){
   if(frameCount % 50 === 0){
       enemy = createSprite(700,Math.round(random(90,600)),10,10)
       enemy.velocityX = -(5 + score/1000);
       

       var rand = Math.round(random(1,10))
       switch(rand){
           case 1: enemy.addImage(enemy_image1);
           enemy.scale = 0.04;
           break;
           case 2: enemy.addImage(enemy_image2);
           enemy.scale = 0.08;
           break;
           case 3: enemy.addImage(enemy_image3);
           enemy.scale = 0.04;
           break;
           case 4: enemy.addImage(enemy_image4);
           enemy.scale = 0.04;
           break;
           case 5: enemy.addImage(enemy_image5);
           enemy.scale = 0.07;
           break;
           case 6: enemy.addImage(enemy_image6);
           enemy.scale = 0.03;
           break;
           case 7: enemy.addImage(enemy_image7);
           enemy.scale = 0.5;
           break;
           case 8: enemy.addImage(enemy_image8);
           enemy.scale = 0.5;
           break;
           case 9: enemy.addImage(enemy_image9);
           enemy.scale = 0.08;
           break;
           case 10: enemy.addImage(enemy_image10);
           enemy.scale = 0.02;
           break
           default: break;
       }
           enemy.lifetime = 150;
           EnemyGroup.add(enemy);
           enemy.debug = false;
   }
}

function emeralds(){
    if(score === 1000 || score === 8000 || score === 15000){
    var chaos_emerald = createSprite(700,444,10,10);
    chaos_emerald.addAnimation("emerald1",emerald1);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    } 
    if(score === 2000 || score === 9000 || score === 16000){
    var chaos_emerald = createSprite(700,600,10,10);
    chaos_emerald.addAnimation("emerald2",emerald2);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    }
    if(score === 3000 || score === 10000 || score === 17000){
    var chaos_emerald = createSprite(700,222,10,10);
    chaos_emerald.addAnimation("emerald3",emerald3);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    } 
    if(score === 4000 || score === 11000 || score === 18000){
    var chaos_emerald = createSprite(700,555,10,10);
    chaos_emerald.addAnimation("emerald4",emerald4);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    }
    if(score === 5000 || score === 12000 || score === 19000){
    var chaos_emerald = createSprite(700,333,10,10);
    chaos_emerald.addAnimation("emerald5",emerald5);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
    } 
    if(score === 6000 || score === 13000){
    var chaos_emerald = createSprite(700,550,10,10);
    chaos_emerald.addAnimation("emerald6",emerald6);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
   }
   if(score === 7000 || score === 14000 || score === 20000){
    var chaos_emerald = createSprite(700,111,10,10);
    chaos_emerald.addAnimation("emerald7",emerald7);
    chaos_emerald.scale = 0.3;
    chaos_emerald.velocityX = -5;
    emeraldGroup.add(chaos_emerald);
   }
}

function END() {
    rings.visible = false;
    EnemyGroup.visible = false;
    gameover.visible = true;
    score = 0;
    sonic.velocityY = 0;
    enemy.velocityX = 0;
    EnemyGroup.setVelocityEach(0);
    score.visible = false;
    rings = 0;
    emeralds_collected = 0;
    gameState = END;
}

function win(){
    score = 0;
    sonic.velocityY = 0;
    EnemyGroup.setVelocityEach(0);
    score.visible = false;
    rings = 0;
    emeralds_collected = 0;
    rings.visible = false;
    EnemyGroup.visible = false;
}