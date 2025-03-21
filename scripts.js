// scripts.js
document.getElementById("contact-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
});
