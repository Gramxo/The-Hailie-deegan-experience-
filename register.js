document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Retrieve input values
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  // Retrieve current users from localStorage (simulate a user database)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username or email already exists
  if (users.find(user => user.username === username || user.email === email)) {
    alert("Username or Email already exists!");
    return;
  }

  // Create new user object including email
  let newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // Show registration complete message
  let regMessage = document.getElementById("regMessage");
  regMessage.textContent = "Registration complete! Redirecting to login page...";
  regMessage.style.display = "block";

  // Redirect to login page after 3 seconds
  setTimeout(function() {
    window.location.href = "login.html";
  }, 3000);
});
