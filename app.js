// Hardcoded credentials
const validEmail = "user@example.com";
const validPassword = "12345";

// Check if the user is logged in by checking localStorage
if (localStorage.getItem("loggedIn") === "true") {
    showJobListings(); // If logged in, show job listings
} else {
    showLoginForm(); // Show login form
}

document.getElementById("loginButton").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check login credentials
    if (email === validEmail && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        showJobListings(); // If credentials are correct, show the jobs
    } else {
        document.getElementById("errorMessage").style.display = "block"; // Show error message if credentials are wrong
    }
});

// Function to show the job listings after a successful login
function showJobListings() {
    document.getElementById("loginForm").style.display = "none"; // Hide login form
    document.getElementById("jobListings").style.display = "block"; // Show job listings
}

// Function to show the login form
function showLoginForm() {
    document.getElementById("loginForm").style.display = "block"; // Show login form
    document.getElementById("jobListings").style.display = "none"; // Hide job listings
}

// Function to filter jobs by keyword and location
function filterJobs() {
    const keywordInput = document.getElementById('keywordInput').value.toLowerCase();
    const locationSelect = document.getElementById('locationSelect').value;
    const jobs = document.getElementsByClassName('job-card');

    for (let i = 0; i < jobs.length; i++) {
        const jobTitle = jobs[i].getAttribute('data-keyword').toLowerCase();
        const jobLocation = jobs[i].getAttribute('data-location');

        if ((jobTitle.includes(keywordInput) || keywordInput === '') &&
            (jobLocation === locationSelect || locationSelect === '')) {
            jobs[i].style.display = 'block';
        } else {
            jobs[i].style.display = 'none';
        }
    }
}

// Function to open the application form
function openApplicationForm(jobTitle, jobLocation) {
    const applicationForm = document.getElementById('applicationForm');
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('applicantLocation').value = jobLocation;
    applicationForm.style.display = 'block';
}

// Event listener for form submission
document.getElementBy
