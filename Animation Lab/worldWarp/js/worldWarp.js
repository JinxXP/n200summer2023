/*
    N220 Section 5946
    Antonio Townsend
    World Wrap
    5 July 2023
*/

// define background
const Background = {

    width : 800,
    height : 600,
}

// define ball 
const Ball = {

    x : 100,
    y : 400,
    vx : 4,
    vy : 4,
    x : 400,
    y : 300,
    radius : 45,
};

function setup(){
    createCanvas(Background.width, Background.height);
    ellipseMode(RADIUS);
}; 

function draw(){

    background("Grey");

    if (keyIsDown(39)){ //right arrow key
        Ball.x = Ball.x + Ball.vx;
        if(Ball.x > Background.width){
            Ball.vx = Ball.vx * -1; 
        }
    }else {
        fill("green");
    }

    circle(Ball.x, Ball.y, Ball.radius);
};