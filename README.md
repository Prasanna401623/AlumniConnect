Alumni Directory Project

This project is a web-based Alumni Directory that allows users to search for alumni profiles, view detailed alumni information, and manage user authentication (sign up and login). The data for alumni profiles is sourced from a JSON file, which was converted from an Excel file.

Steps to Run the Project:

Step 1: Open the index.html file in your browser
Navigate to the folder where the project is saved.
Double-click on index.html (or the main HTML file) to open it in your web browser.
Step 2: Search for Alumni
On the homepage, use the search bar to search for alumni by name.
Click on an alumni profile to view detailed information, including contact details, business information, and alumni discounts (if applicable).
Step 3: User Authentication
Users can sign up through the "Sign Up" page (signup.html).
Existing users can log in using their credentials on the "Login" page (login.html).
The authentication system is currently form-based, without backend storage for user data.
Step 4: Data Handling
The alumni profiles are loaded dynamically from the data.json file, which contains all the alumni information.
This JSON file was generated by converting an Excel dataset.
Dataset
The alumni profiles are sourced from the data.json file. My output is entirely based on this data. If the dataset changes in the future, the website will still function as expected by dynamically pulling the updated alumni data.

Technologies Used:

Frontend: HTML, CSS, JavaScript
Data Format: JSON (converted from Excel)
Future Plans:
In the future, I plan to integrate a MySQL database for saving and retrieving user and alumni data, but the current version does not store data anywhere.
