/*
    N220 Section 5946
    Antonio Townsend
    bad word catcher with loops
    1 August 2023
*/

//define bad words
let badWord = ["clear", "water", "tires"];

let wordCount;

function checkWords() {
    wordCount = 0;
    let x = "";     //text field initially empty
    x = document.getElementById("input").value;

    let goodWord = [];
    //removes blank spaces between words
    goodWord = text.split(" ");

    //nested loop to check if words are good or bad by looping array
    for (let i = 0; i < badWord.length; i++) {
        for (let j = 0; j < goodWord.length; j++) {
            if (goodWord == badWord) {
                wordCount++;
            }//end if
        }//end for j
    }//end for i

    //if no bad words are found
    if (wordCount == 0) {
            document.getElementById("output").innerHTML = "No bad words counted.";
        }//end if
        //if +1 bad words are counted
        else {
            document.getElementById("output").innerHTML = "Number of bad words counted : " + wordCount;
        }//end else

    //resets text field



}//end function