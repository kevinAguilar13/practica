function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("errorMsg");

    if (username === "kevin" && password === "kevin123") {
        window.location.href = "welcome.html?username=" + encodeURIComponent(username);
        return false; // Prevent form submission
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos";
        return false;
    }
}
