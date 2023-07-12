/*
    N220 Section 5946
    Antonio Townsend
    Neopolitan
    11 July 2023
*/

//declare colors

let strawberry = "#FF6972";
let vanilla = "#F9F6A7";
let chocolate = "#A07200";

//declare array
let neapolitan = ["strawberry", "vanilla", "chocolate"];

function setup() {
    createCanvas(800,600);

}//end function

function draw() {

    for(var i=0; i < neapolitan.length; i++) {  //.length will go through each element of the array
        fill(neapolitan[i]);    //fill each rectangle with the current indexed colors
        rect(100, 80, 100, 175);

        rect(200, 80, 100, 175);

        rect(300, 80, 100, 175);

    } //end for

} //end function

