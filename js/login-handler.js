document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent form from submitting

  // Get the email and password values
  const email = document.getElementById('username-email').value;
  const password = document.getElementById('password').value;

  // Validate email ends with '@warhawks.ulm.edu'
  if (!email.endsWith('@warhawks.ulm.edu')) {
      alert('Please enter a valid ULM email that ends with @warhawks.ulm.edu.');
      return;
  }

  // Basic password validation (ensure it's not empty)
  if (password.trim() === "") {
      alert('Password is required');
      return;
  }

  // Redirect to alumni-directory.html upon successful validation
  window.location.href = 'directory.html';
});
