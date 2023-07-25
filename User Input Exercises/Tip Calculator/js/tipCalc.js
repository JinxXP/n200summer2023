/** 
    N220 Section 5946
    Antonio Townsend
    Tip Calculator
    25 July 2023
**/


//function for tip calc
function calculate() {
    let userInput=document.getElementById("subtotal").value;

//tip calulation is 10%
    let tip = userInput * 0.10;

//adding tip to subtotal amount
    let total = parseInt(userInput) + parseInt(tip);

//display total amount to console in "Tip: $X. Total: $X" 
console.log("Tip: $" +tip +"Total: $" +total);

}//end function