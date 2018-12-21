/*
    @signup is a function that is performed after submission of the form "#form-signup"
*/

document.querySelector("#form-signup").addEventListener("submit", signup);

function signup(event) {
    event.preventDefault();

    alert("Hello user, this form is not working, it is an aesthetic design.");
}