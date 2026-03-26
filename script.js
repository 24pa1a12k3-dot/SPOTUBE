document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    // Simple validation
    if (username === "24pa1a0597" && password === "siddu") {
        alert("Login Successful!");
        window.location.href="spotify.html";
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Invalid Username or Password";
    }
});