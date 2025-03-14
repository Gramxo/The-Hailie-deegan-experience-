document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  // Retrieve the identifier (email or username) and password values
  let identifier = document.getElementById("loginIdentifier").value.trim();
  let password = document.getElementById("loginPassword").value;
  
  // Retrieve users stored in localStorage (simulate a user database)
  let users = JSON.parse(localStorage.getItem("users")) || [];
  
  // Find a user that matches either the username or email and the password
  let user = users.find(user =>
    (user.username === identifier || user.email === identifier) && user.password === password
  );
  
  if (user) {
    // Save the logged in user's username (for later display or access control)
    localStorage.setItem("loggedInUser", user.username);
    // Redirect to the home page so the user can access membership features
    window.location.href = "index.html";
  } else {
    alert("Invalid email/username or password!");
  }
});