
/*
    N220 Section 5946
    Antonio Townsend
    Password Protected
    25 July 2023
*/

//function that checks for correct username and password
function login() {
    //username field
    let user = document.getElementById("username").value;

    //password field
    let userPass = document.getElementById("password").value;

    //if statement that alerts to the page
    if (user == "Username" && userPass == "Password") {
        alert("Success");
    } else {
        alert("Wrong information");
    }//end else

}//end function


