// Get the form from DOM
const form = document.getElementById("studentForm");

// Get the container where profile will be created
const profileContainer = document.getElementById("profileContainer");

// Listen for form submission
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;

    // Create profile card
    const profileCard = document.createElement("div");

    // Add CSS class
    profileCard.classList.add("profile-card");

    // Add profile information
    profileCard.innerHTML = `
        <h2>Student Profile</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Roll No:</strong> ${rollNo}</p>

        <p><strong>Department:</strong> ${department}</p>

        <p><strong>CGPA:</strong> ${cgpa}</p>
    `;

    // Clear previous profile
    profileContainer.innerHTML = "";

    // Add new profile card to DOM
    profileContainer.appendChild(profileCard);
});