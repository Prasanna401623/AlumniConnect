document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('signup-form');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      // Validate that passwords match
      if (password.value !== confirmPassword.value) {
          alert('Passwords do not match. Please try again.');
          return; // Stop form submission if passwords don't match
      }

      // Additional validation logic (if any)

      // If validation passes, submit the form
      alert('Account created successfully!');
      form.reset(); // Optionally reset the form
  });
});
