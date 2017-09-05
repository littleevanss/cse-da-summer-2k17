var r, g, b, pressed, sleep;
function setup() { 
  createCanvas(500, 500);
  r = random(255); 
  g = random(255);
  b = random(255);
  sleep = false;
} 

function draw() { 
  background('pink');
  drawCookieMonster();
}

function drawCookieMonster(){
  body(); 
  head();
  arms();
  legs();
  tehCookies();
}

function body(){
  if(pressed)
    fill(r,g,b);
  else
  	fill('blue');
  ellipse(250, 295, 180, 190);
}

function head(){
  //head
  if(pressed)
    fill(r,g,b);
  else
    fill('blue');
  ellipse(250, 150, 150, 150);
  
  //eyes
  if(sleep == true){
    fill(r,g,b); //eye wrong color when start
		ellipse(210, 97, 35, 35);
  	ellipse(290, 93, 35, 35);
  }
  else {
    fill('white');
    ellipse(210, 97, 35, 35);
    ellipse(290, 93, 35, 35);

    //iris
    fill('black');
    ellipse(215, 99, 15, 15);
    ellipse(285, 90, 15, 15);
  }
  //mouth
  fill('black');
  arc(250, 135, 120, 120, TWO_PI, PI, PIE);
}

function arms(){
  if(pressed)
    fill(r,g,b);
  else
    fill('blue');
  //right arm
  quad(338, 290, 390, 260, 365, 220, 335, 260);
  
  //left arm
  quad(110, 260, 162, 285, 165, 170, 124, 190); 
}

function legs(){
  if(pressed)
    fill(r,g,b);
  else
    fill('blue');
  ellipse(202, 432, 50, 120);
  ellipse(297, 432, 50, 120);
}

function tehCookies(){
  //cookie
  fill('#925800');
  ellipse(395, 225, 50, 50);
  //chocolate chips
  fill('#52280b');
  ellipse(405, 230, 10, 10);
  ellipse(385, 215, 10, 10);
  ellipse(389, 236, 10, 10);
  ellipse(402, 213, 10, 10);
  
}

function keyPressed() {
  pressed = true;
  r = random(255);
  g = random(255);
  b = random(255); 
}

function mousePressed(){
  sleep = !sleep;
}
  
