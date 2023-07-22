/*
    N220 Section 5946
    Antonio Townsend
    Midterm Exam
    22 July 2023
*/


//create canvas dimensions and player and enemy properties
function setup() {
    createCanvas(800, 800);

    player = {
        x : 400,
        y : 150,
        size: 40
    }//end player

    enemy = {   //coords will vary as there's going to be several enemies on screen
        size : 40
    }//end enemy

}//end function


