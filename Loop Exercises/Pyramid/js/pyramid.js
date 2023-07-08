/*
    N220 Section 5946
    Antonio Townsend
    Pyramid Lab
    7 July 2023
*/

//const size of each square
const pyramid = 100;

//create background canvas
function setup() {
    createCanvas(800,600);
    background("white");
//colors for each square and stroke() for borders
    fill("red");

    stroke("white");

}//end function

function draw() {

var i = 0; 
var j = 0; 
//for loop that'll loop 4 times
    for(i = 0; i < 4; i++) {
    //nested loop. shape will be drawn here
        for(j = 0; j <= i; j++) {
            rect(pyramid * j, pyramid * i, pyramid, pyramid);  //x, y, h all the same
        }//end for j
    }//end for i
}//end function