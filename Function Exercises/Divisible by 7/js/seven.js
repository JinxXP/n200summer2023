/*
    N220 Section 5946
    Antonio Townsend
    Is Divisible By 7
    28 July 2023
*/

function divide() {
    let x = document.getElementById("response").value;

    if (x%7==0) {   //use % to find remainder  
        document.getElementById("output").innerHTML="Number is divisible."
        return true;
    }else {
        document.getElementById("output").innerHTML="Number is NOT divisible."
        return false;
    }//end else

}//end function
