/*
    N220 Section 5946
    Antonio Townsend
    Puck Side
    5 July 2023
*/

function setup() {
    createCanvas(400, 300);

}//end setup

//size of cursor circle
var diameter = 20;
    
function draw() {
    background("grey");
    
    if(mouseX>200){ //to the right of center screen
        fill("red");
        circle(mouseX,mouseY,diameter);
    
    }else{  //to the left of center screen
        fill("blue");
        circle(mouseX,mouseY,diameter);
    }//end if

}//end draw