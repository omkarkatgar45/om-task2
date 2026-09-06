const form = document.getElementById("userForm");

const message = document.getElementById("message");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    message.textContent =
        "Hello " + name + "! Your email is " + email;

});