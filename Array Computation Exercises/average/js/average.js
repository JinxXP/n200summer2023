/*
    N220 Section 5946
    Antonio Townsend
    its just average
    1 August 2023
*/



let sum = 0;    //initial value before adding array
let arrayInt = [];

function average() {
    let text = document.getElementById("input").value;
    //removes spaces from string
    let array = text.split(" ");

    for(let i = 0; i < array.length; i++) {
        arrayInt[i] == parseInt(array[i])
        sum = sum + arrayInt[i]  
    }//end for

    let getAverage = sum / arrayInt.length;

    //prints average and sum to page
    document.getElementById("output").innerHTML = "The average is : " + getAverage;
    document.getElementById("output").innerHTML = "The sum is : " + sum;
    //resets text field
    document.getElementById("input").value  = "";

}//end function
