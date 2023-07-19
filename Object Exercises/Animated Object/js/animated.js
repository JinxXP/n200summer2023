/*
    N220 Section 5946
    Antonio Townsend
    Animated Object
    18 July 2023
*/

//define circle object globally

circle = {
    x:  100,
    y:  100,
    size: 40
};//end circle

//create canvas dimensions and circle properties
function setup() {
    createCanvas(800, 600);
    background("grey");

}//end function

function draw() {
//properties of circle are updated 
    circle.x += 1;
    circle.y += 1;
    circle.size += 0.5;

//circle is drawn here
    circle(circle.x, circle.y, circle.size, circle.size);

}//end function

//instantiation
let thisp5 = new p5(circle);