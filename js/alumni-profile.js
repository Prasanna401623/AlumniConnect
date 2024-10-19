document.addEventListener("DOMContentLoaded", function () {
    const alumniId = getAlumniIdFromURL(); // Get alumni ID from the URL or selection

    // Fetch the alumni data from the JSON file
    fetch('assests/data.json')  // Make sure the path to data.json is correct
        .then(response => response.json())
        .then(alumniList => {
            const alumniData = getAlumniData(alumniId, alumniList); // Pass the fetched data
            if (alumniData) {
                // Populate the profile page
                document.getElementById("alumni-name").textContent = alumniData.full_name;
                document.getElementById("alumni-email").textContent = alumniData.email;
                document.getElementById("alumni-phone").textContent = alumniData.business_phone;
                document.getElementById("alumni-business").textContent = alumniData.name_of_business;
                document.getElementById("alumni-city").textContent = alumniData.business_city + ", " + alumniData.business_state;
                document.getElementById("alumni-category").textContent = alumniData.business_category;
                document.getElementById("alumni-description").textContent = alumniData.business_description;
                document.getElementById('alumni-website').textContent = alumniData.business_website;

                // Set business logo (with fallback if no logo is available)
                const logoElement = document.getElementById("alumni-business-logo");
                logoElement.src = alumniData.business_logo_link || 'default-logo.png'; // Default image if no logo

                // Handle alumni discount
                if (alumniData.alumni_discount === "Yes") {
                    document.getElementById("alumni-discount").style.display = 'inline-block';
                    document.getElementById("alumni-discount-description").textContent = alumniData.alumni_discount_description;
                } else {
                    document.getElementById("alumni-discount").style.display = 'none'; // Hide if no discount
                }

            } else {
                console.error('Alumni not found');
                // Optionally, display a message on the page if alumni not found
                document.getElementById("alumni-name").textContent = "Alumni not found";
            }
        })
        .catch(error => console.error('Error fetching alumni data:', error));
});

// Helper function to get alumni ID from the URL
function getAlumniIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // Assumes URL is something like 'profile.html?id=101'
}

// Function to get alumni data by ID from the fetched list
function getAlumniData(alumniId, alumniList) {
    return alumniList.find(alumni => alumni.user_id == alumniId);
}
