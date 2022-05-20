var gameChar_x = 0;
var gameChar_y = 0;
var origin_x = 45;
var origin_y = 90;


function setup() {
  
  

  createCanvas(400, 400);
}

function draw() {
  background(225);
  
  stroke(100);
  noFill();
  rect(20,16,50,80);
  noStroke();
  fill(0);
  text("1. standing front facing", 20,120);
  
  gameChar_x = origin_x;
  gameChar_y = origin_y;
  //Add code here 
  
  //head
  ellipse(gameChar_x, gameChar_y,5,5);
  
  ellipse(gameChar_x,gameChar_y-62, 20,20);
  
  //torso
  fill(255,0,0);
  rect(gameChar_x-9.5, gameChar_y-52,20,23,5,5);
  fill(0);
  rect(gameChar_x-9.5, gameChar_y-40,20,15,0,0);
  
  //right leg
  fill(0,0,255);
  rect(gameChar_x-9.5, gameChar_y-25,8,20);
  //left leg
  fill(0,0,255);
  rect(gameChar_x+2.5, gameChar_y-25,8,20);
  
  
  //right hand
  rect(gameChar_x-25, gameChar_y-50,16,5);
  //left hand
  rect(gameChar_x+10, gameChar_y-50,16,5);
  
  
  
  //////////////////////////////////////////////////////////////////
  //walking left 
  
  stroke(100);
  noFill();
  rect(270,16,50,80);
  noStroke();
  fill(0);
  text("2 walking left", 264,120);
  //add code
  
  //head
  ellipse(gameChar_x+248,gameChar_y-62,15,20);
  //torso
  fill(255,0,0);
  rect(gameChar_x+239, gameChar_y-52,18,23,5,5);
  fill(0);
  rect(gameChar_x+239, gameChar_y-35,18,15);
  
  //hands
  stroke(10);
  fill(0,0,255);
  
  beginShape();
  vertex(gameChar_x+244, gameChar_y-47);
  vertex(gameChar_x+225, gameChar_y-28);
  vertex(gameChar_x+230, gameChar_y-26);
  vertex(gameChar_x+246, gameChar_y-41);
  endShape();
  
  beginShape();
  vertex(gameChar_x+257, gameChar_y-46);
  vertex(gameChar_x+265, gameChar_y-36);
  vertex(gameChar_x+261, gameChar_y-34);
  vertex(gameChar_x+256, gameChar_y-39);
  endShape();
  
  //Legs
  beginShape();
  vertex(gameChar_x+239, gameChar_y-22);
  vertex(gameChar_x+225, gameChar_y-3);
  vertex(gameChar_x+233, gameChar_y-3);
  vertex(gameChar_x+246, gameChar_y-20);
  endShape();
  
  beginShape();
  vertex(gameChar_x+250, gameChar_y-21);
  vertex(gameChar_x+257, gameChar_y-3);
  vertex(gameChar_x+264, gameChar_y-3);
  vertex(gameChar_x+257, gameChar_y-21);
  endShape();
  
  
  
///////////////////////////////////////////////////////
//Jumping face forward
  noFill();
  rect(18,155,50,80);
  noStroke();
  fill(0);
  text("3. Jumping Face Forward", 19,250);
  
  //face
  ellipse(gameChar_x-4, gameChar_y+82, 20, 20);
  //torso
  fill(255,0,0);
  rect(gameChar_x-14, gameChar_y+92, 20,23,5,5);
  //shorts
  fill(0);
  rect(gameChar_x-14, gameChar_y+100,20,15);
  //legs
  fill(0,0,255);
  rect(gameChar_x-14, gameChar_y+115,8,8);
  rect(gameChar_x-2.1, gameChar_y+115,8,8);
  //Arms
  rect(gameChar_x-26, gameChar_y+94,12.3,5);
  rect(gameChar_x-26, gameChar_y+94,12.3,5);
  rect(gameChar_x+5.5, gameChar_y+93.5,12.3,5);
  
//////////////////////////////////////////////////////////
// walking right
  stroke(10);
  noFill();
  rect(272,153,50,80);
  noStroke();
  fill(0);
  text("4. Walking Right", 269, 250);
  
  //head
  ellipse(gameChar_x+248,gameChar_y+80,15,20);
  //torso
  fill(255,0,0);
  rect(gameChar_x+239, gameChar_y+90,18,23,5,5);
  fill(0);
  rect(gameChar_x+239, gameChar_y+103,18,15);
  
  
  stroke(10);
  fill(0,0,255);
  
  //Hands
  beginShape();
  vertex(gameChar_x+247, gameChar_y+95);
  vertex(gameChar_x+266, gameChar_y+105);
  vertex(gameChar_x+264, gameChar_y+111);
  vertex(gameChar_x+247, gameChar_y+102);
  endShape();
  
    
  /*beginShape();
  vertex(gameChar_x+239, gameChar_y+95);
  vertex(gameChar_x+232, gameChar_y+101);
  vertex(gameChar_x+234, gameChar_y+105);
  vertex(gameChar_x+239, gameChar_y+100);
  endShape();*/
  
  
  //legs
  beginShape();
  vertex(gameChar_x+256, gameChar_y+118);
  vertex(gameChar_x+268, gameChar_y+137);
  vertex(gameChar_x+261, gameChar_y+137);
  vertex(gameChar_x+250, gameChar_y+118);
  endShape();
  
  beginShape();
  vertex(gameChar_x+245, gameChar_y+116);
  vertex(gameChar_x+237, gameChar_y+136);
  vertex(gameChar_x+230, gameChar_y+136);
  vertex(gameChar_x+239, gameChar_y+117);
  endShape();
  


///////////////////////////////////////////////////////////
//jumping left 
  stroke(10);
  noFill();
  rect(18,270,50,80);
  noStroke();
  fill(0);
  text("5. Jumping Left", 18,365);
  
  //head
  ellipse(gameChar_x-2,gameChar_y+193,15,20);
  //torso
  fill(255,0,0);
  rect(gameChar_x-11, gameChar_y+202.5,18,23,5,5);
  fill(0);
  rect(gameChar_x-11, gameChar_y+217,18,15);
  
  //hand
  stroke(10);
  fill(0,0,255);
  beginShape();
  vertex(gameChar_x-2, gameChar_y+211);
  vertex(gameChar_x-20, gameChar_y+218);
  vertex(gameChar_x-21, gameChar_y+213);
  vertex(gameChar_x-5, gameChar_y+209);
  endShape();
  
  
  //legs
  rect(gameChar_x-10, gameChar_y+232, 6,5);
  rect(gameChar_x, gameChar_y+232, 6,5);
  
  
  
  
  
  
  
///////////////////////////////////////////////////////////
//jumping right
  stroke(10);
  noFill();
  rect(272,270,50,80);
  noStroke();
  fill(0);
  text("6. Jumping Right", 269, 365);
  
  //head
  ellipse(gameChar_x+252,gameChar_y+193,15,20);
  //torso
  fill(255,0,0);
  rect(gameChar_x+243, gameChar_y+202.5,18,23,5,5);
  fill(0);
  rect(gameChar_x+243, gameChar_y+217,18,15);
  
  //Right Hand
  fill(0,0,255);
  beginShape();
  vertex(gameChar_x+254, gameChar_y+206);
  vertex(gameChar_x+269, gameChar_y+216);
  vertex(gameChar_x+269, gameChar_y+223);
  vertex(gameChar_x+254, gameChar_y+211);
  endShape();
  
  //legs
  rect(gameChar_x+243, gameChar_y+231, 6,5);
  rect(gameChar_x+255, gameChar_y+231, 6,5);
  
  
  
  

  
  
  
  
  
  
  
  /////////////////////////////////////////////////////////////////
  //
  stroke(10);
  fill(255,255,255);
  text("("+mouseX+","+mouseY+")", mouseX, mouseY);
  
}

