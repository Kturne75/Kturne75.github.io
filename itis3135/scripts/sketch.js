function setup() {
    createCanvas(710, 400);
      //sky background
    background(0);
    
    //width of lines
    strokeWeight(10);
    
    colorMode(HSB, 360, 100, 100);
    
    describe('a blank canvas where the user can use pastel colored lines to draw (dragging the mouse)');
  }
  
  
    
  
  function mouseDragged(){
    
    let lineHue = (mouseX - mouseY +360)%360;
    
    let pastelSat = 30;
    
    let pastelBri= 90;
    
    stroke(lineHue, pastelSat, pastelBri);
    
    line(pmouseX, pmouseY, mouseX, mouseY);
    
  }