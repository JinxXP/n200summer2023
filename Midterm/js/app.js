/*
    N220 Section 5946
    Antonio Townsend
    Midterm Exam
    22 July 2023
*/
//properties for player
    player = {
        x : 400,
        y : 150,
        size: 40
    }//end player

//enemy coords will vary as there's going to be several enemies on screen
let enemy = ["enemy1", "enemy2", "enemy3", "enemy4"];
//let enemyColor = "red";
//create canvas dimensions and player and enemy properties
function setup() {
    createCanvas(1000, 800);

}//end function

function draw() {
    //1st row of enemies
    for(var i=0; i < enemy.length; i++) {  //.length will go through and draw a circle for each enemy within the array
        fill("red");
        circle(200, 100, 40);
        circle(400, 100, 40);
        circle(600, 100, 40);
        circle(800, 100, 40);

    } //end for



}//end function 

