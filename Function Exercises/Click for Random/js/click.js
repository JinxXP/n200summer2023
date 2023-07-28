/*
    N220 Section 5946
    Antonio Townsend
    Click for Random
    28 July 2023
*/

//define color placeholders
let colorArray = [c, m, y, k] 

function setup() {
    createCanvas(800, 600);
    c = random(255);
    m = random(255);
    y = random(255);
    k = random(255);

}//end function

function draw() {
    //properties for circle
    stroke(c, m, y, k);
    fill(c, m, y, k);
    circle(400, 300, 50);
}//end function

function onMouseClick() {
    let d = dist(mouseX, mouseY, 400, 300);

    if (d < 100) {
        colorArray;
    }//end if
}//end function