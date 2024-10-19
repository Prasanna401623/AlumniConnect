document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the form from submitting

  // Simple validation (this can be expanded as needed)
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Validate that passwords match
  if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
  }

  // Show a success message
  document.getElementById('success-message').style.display = 'block';

  // Redirect to login page after 2 seconds
  setTimeout(function() {
      window.location.href = 'login.html';
  }, 2000);
});
