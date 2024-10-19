document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById('search');
    const alumniList = document.getElementById('alumni-list');

    // Fetch alumni data from the JSON file
    fetch('assests/data.json')  // Ensure the path is correct
        .then(response => response.json())
        .then(data => {
            let alumniData = data;

            // Display initial list of alumni
            displayAlumni(alumniData);

            // Search functionality
            searchInput.addEventListener('input', function () {
                const searchQuery = searchInput.value.toLowerCase();
                const filteredAlumni = alumniData.filter(alumni => 
                    alumni.full_name.toLowerCase().includes(searchQuery)
                );
                displayAlumni(filteredAlumni);
            });
        });

    // Function to display alumni list
    function displayAlumni(alumni) {
        alumniList.innerHTML = ''; // Clear existing list
        alumni.forEach(alum => {
            const listItem = document.createElement('li');
            listItem.classList.add('alumni-tab');  // Add a class for CSS styling

            // Display alumni information
            listItem.innerHTML = `
                <div class="alumni-info">
                    <h3>${alum.full_name}</h3>
                    <p><strong>Business:</strong> ${alum.name_of_business}</p>
                    <p><strong>City:</strong> ${alum.business_city}</p>
                </div>
            `;

            // Add click event to redirect to the profile page
            listItem.addEventListener('click', function () {
                window.location.href = `alumni-profile.html?id=${alum.user_id}`;
            });

            alumniList.appendChild(listItem);
        });
    }
});
