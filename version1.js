/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
    
	background(100, 155, 255); //fill the sky blue


	noStroke();
	fill(75,150,28);
	rect(0, 432, 1024, 144); //draw some green ground
    //Muddy ground
    fill(202,103,58);
    rect(100,491,924,142);

	//1. a cloud in the sky
	//... add your code here
    fill(255,255,255);
    ellipse(200,150,80,80);
    ellipse(160,150,60,60);
    ellipse(240,150,60,60);

	noStroke();
	fill(255);
	text("cloud", 200, 100);
///////////////////////////////////////////////////////////////////////////////
	//2. a mountain in the distance
	//... add your code here
    fill(21,19,60);
    beginShape();
        vertex(275,431);
        vertex(340,392);
        vertex(390,431);
    endShape();
    
    fill(21,19,60);
     beginShape();
        vertex(348,431);
        vertex(440,313);
        vertex(511,431);
    endShape();
    
    fill(21,19,60);
     beginShape();
        vertex(410,431);
        vertex(490,307);
        vertex(551,276);
        vertex(610,431);
    endShape();
    
    fill(21,19,60);
     beginShape();
        vertex(490,431);
        vertex(620,298);
        vertex(670,349);
        vertex(700,431);
    endShape();
   
    //extra
      fill(255,190,199);
    beginShape();
        vertex(598,431);
        vertex(621,341);
        vertex(635,314);
        vertex(670,349);
        vertex(700,431);
    endShape();
    
    beginShape();
        vertex(551,276);
        vertex(576,345);
        vertex(587,331)
    endShape();
    
    beginShape();
        vertex(439,313);
        vertex(468,366);
        //vertex(462,350);
        vertex(482,428);
        vertex(502,400);
        vertex(503,373);
        vertex(478,353);
        vertex(474,333);
    endShape();
    
    beginShape();
        vertex(340,392);
        vertex(364,411);
        vertex(371,402);
    endShape();
    
    

///////////////////////////////////////////////////////////////////////////
    
    
	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here
    fill(120,100,40);
    rect(900,282,60,150);

	noStroke();
	fill(255);
	text("tree", 800, 346);
    //branches
    fill(0,155,0);
    triangle(850,332, 930,232, 1010,322);
    triangle(850, 282,930,182,1010,282);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
    fill(100,155,255);
    rect(29,431,70,169);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255,255,255);
	text("collectable item", 400, 395);
    
    //Collectable1
    fill(232,198,31);
    ellipse(391,412,15,25);
    fill(204,160,17);
    stroke(0);
    strokeWeight(2);
    ellipse(393,412,10,25);
    strokeWeight(4);
    point(392,413);
    
    //collectable2
    fill(213,166,189);
    ellipse(416,412,15,25);
    fill(204,160,17);
    stroke(0);
    strokeWeight(2);
    ellipse(418,412,10,25);
    strokeWeight(4);
    point(418,412);
    
    //collectable3
    fill(232,198,31);
    ellipse(438,410,15,25);
    fill(204,160,17);
    stroke(0);
    strokeWeight(2);
    ellipse(440,412,10,25);
    strokeWeight(4);
    point(440,412);
    
    

    
    
    text("("+mouseX+","+mouseY+")", mouseX, mouseY);
}


