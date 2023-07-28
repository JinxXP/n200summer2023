
/*
    N220 Section 5946
    Antonio Townsend
    Show Info
    28 July 2023
*/

let contentButtons = ['Home is located here', 'About is located here', 'Art is located here'];

function displayContent(arrayIndex) {
    let output = document.getElementById("output");

    //checks array for matching index
    if (arrayIndex >= 0 && arrayIndex < contentButtons.length) {
        output.innerHTML = contentButtons[arrayIndex];

    }else{
        output.innerHTML = "Nothing is here";
    }//end else

}//end function
