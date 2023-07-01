/*   
    Antonio Townsend
    30 June 2023
    N220 5946
    Personal Composition Lab
*/

function setup() {
    createCanvas(800, 600); //horizontal, vertical

}   //end function

function draw() {

    var grey = "#C7C7C7";   //color of cursor circle
    var pacman = "#FFD500"; //color of pacman shape
    
    background("blue");

    fill("green");

    rect(130, 200, 400, 200); //horizontal, vertical, dimesnions W x H
    
    fill(pacman)

    circle(400, 300, 40);

    fill("red");

    ellipse(130, 200, 400, 200);

    //PAC-MAN
    fill(pacman);

    arc(325, 350, 80, 80, 0, radians(300));

//circle that will follow the mouse if present on screen
    if (onmouseenter){
        fill(0);
    }else{
        fill(grey);
    }   //end if
    
    ellipse(mouseX, mouseY, 40, 40);

}   //end function
