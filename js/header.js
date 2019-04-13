// Get the modal
var modalSignIn = document.getElementById('signInModal');

// Get the button that opens the modal
var btnSignIn = document.getElementById("btnSignIn");

// Get the <span> element that closes the modal
var spanSignIn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btnSignIn.onclick = function() {
    modalSignIn.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSignIn.onclick = function() {
    modalSignIn.style.display = "none";
}

// Get the modal
var modalSignUp = document.getElementById('signUpModal');

// Get the button that opens the modal
var btnSignUp = document.getElementById("btnSignUp");

// Get the <span> element that closes the modal
var spanSignUp = document.getElementById("closeSignUpModal");

// When the user clicks the button, open the modal
btnSignUp.onclick = function() {
    modalSignUp.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanSignUp.onclick = function() {
    modalSignUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignIn || event.target == modalSignUp) {
        modalSignIn.style.display = "none";
        modalSignUp.style.display = "none";
    }
}

function signup() {
    modalSignIn.style.display = "none";
    modalSignUp.style.display = "block";
}