// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("consumer-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const cwid = document.getElementById("cwid").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const country = document.getElementById("country").value;
        const feedback = document.getElementById("feedback").value;

        // Send the email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            first_name: firstName,
            last_name: lastName,
            cwid: cwid,
            email: email,
            phone: phone,
            address: address,
            country: country,
            feedback: feedback
        })
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            successMessage.innerHTML = "A confirmation email has been sent to " + email + ".";
            form.reset(); // Reset form after successful submission
        }, function(error) {
            console.log("FAILED...", error);
            successMessage.innerHTML = "Failed to send email. Please try again.";
        });
    });
});
