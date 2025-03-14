// Retrieve users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

// Registration
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check if username exists
    if (users.find(user => user.username === username)) {
        alert("Username already taken!");
        return;
    }

    // Save new user
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    
    let user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html"; // Redirect to home
    } else {
        alert("Invalid username or password!");
    }
});

// Logout function
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}