/*
    N220 Section 5946
    Antonio Townsend
    Circles inside of Circles
    7 July 2023
*/

//create background canvas
function setup() {
    createCanvas(800, 600);
    background("#00E3E0");
}//end function

function draw() {

var diameter = width;   //initial diameter will be the same as the width of outer circle

//while loop for unknown # of loops
while(diameter >= 10) {
    circle(width/2, height/2, diameter);    //circle(x, y, d)

    diameter -=10;

}//end while
}//end function