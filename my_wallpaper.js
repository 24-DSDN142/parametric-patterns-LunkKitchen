//your parameter variables go here!
let headX = 100;
let headY = 100;
var headScale = 1;
var ellipseHeight = 200;
var eyeLength = 50;
var eyeWidth = 10;
var eyeColor = random(255);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  DrawSmiley();
}

function DrawSmiley(){
  strokeWeight(2);
  stroke(0,0,0);
  fill(random(255),random(255),random(255));
  ellipse(headX,headY,headScale*ellipseHeight,headScale*ellipseHeight);

  fill(random(255));
  ellipse(75,75,headScale*eyeWidth,headScale*eyeLength);
  ellipse(125,75,headScale*eyeWidth,headScale*eyeLength);
  
  fill(random(255));
  curve(75, 75, 50, 150, 150, 150, 125, 75);
};