//your parameter variables go here!


let headX = 100; //x location for head
let headY = 100; //y location for head
var headScale = 1; //scale multiplier for whole head size
var ellipseHeight = 200; //Face circle height and width
var eyeLength = 80; //changes eye shape
var eyeWidth = 10; //changes eye shape
var backgroundColour = 1; //set to 1 or 2 for different background colours
var backgroundVariation = 1; //set to 1 or 2 for different background patterns

//FYI the face colour and smile changes depending on X and Y location of mouse on webpage :)

//other variables that are changed elsewhere
var smile
let faceColour; 
let eyeColour1, eyeColour2, smileColour;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
  

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;

  noLoop(); //this no loop is just to set the mouse/moving smile command off to begin with and is later updated through the functions mousereleased/dragged
}

function wallpaper_background() {
  //this function sets the background colour 
  if (backgroundColour<2) {
    background(253,140,255); 
  } else if (backgroundColour>=2) {
    background(205,255,194); 
  }
}

//Function for background pattern changing
function DrawStripes() {
  if (backgroundVariation<2) {
    stroke(255,242,0);
    strokeWeight(5);
    line(0,50,200,50);
    line(0,150,200,150);
  } else if(backgroundVariation=>2) {
    stroke(15,251,255);
    strokeWeight(12);
    line(50,0,100,40);
    line(100,40, 80,70);
    line(80,70, 100,100);
    line(100,100,90,130);
    line(90,130,100,200);
    line(0,0,200,0)
    
    stroke(255);
    line(60,10,110,50);
    line(110,50,90,80);
    line(90,80,110,110);
    line(110,110,100,140);
    line(100,140,110,210);
    line(10,10,210,10);
  }
}

function updateFaceColour() { //this function is to make the face change colour depending on the x and y coordinates of your mouse
  let r = map(mouseX,0,width,0,255);
  let g = map(mouseY,0,height,0,255);
  let b = map((mouseX+mouseY)/2,0,(width+height)/2,0,255);
  faceColour = color(r,g,b);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //below are set colours for eyes and mouth, as well as the call function for the changing face colour
  updateFaceColour();
  eyeColour1 = color(0,0,0); 
  eyeColour2 = color(0,0,0); 
  smileColour = color(255,0,0);
  DrawStripes();
  DrawSmiley();
}


//Below is the function for drawing the smiley face
function DrawSmiley(){
  //Face!
  strokeWeight(2);
  stroke(0,0,0);
  fill(faceColour);
  ellipse(headX,headY,headScale*ellipseHeight,headScale*ellipseHeight);

  //Eyes!
  fill(eyeColour1);
  ellipse(headX-25*headScale,headY-25*headScale,headScale*eyeWidth,headScale*eyeLength);
  ellipse(headX+25*headScale,headY-25*headScale,headScale*eyeWidth,headScale*eyeLength);
  
  
  //Smile!
  //this if statement makes the mouth smile if the mouse is on the right side of the page
  if(mouseX<width/2){
    smile = -50;
  } else{
    smile = -200;
  }

  fill(smileColour);
  curve(
    headX-75*headScale,headY+(75+smile)*headScale, 
    headX-50*headScale,headY+50*headScale, 
    headX+50*headScale,headY+50*headScale, 
    headX+75*headScale,headY+(75+smile)*headScale);

  stroke(0);
  line(headX-50*headScale,headY+50*headScale,headX+50*headScale,headY+50*headScale);
}

//below functions are to keep the mouse location updated/in or out of loop so that the face colour changes as needed and doesn't if not
function mouseMoved() {
  loop(); 
}

function mouseDragged() {
  loop(); 
}

function mouseReleased() {
  noLoop(); 
}