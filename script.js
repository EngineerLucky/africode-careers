// Dummy credentials for login (this is just a simple example)
const validEmail = "user@example.com";
const validPassword = "password";

// Mock job data
const jobs = [
    { title: "Frontend Developer", location: "Harare", company: "Tech Solutions", id: 1 },
    { title: "Backend Developer", location: "Cape Town", company: "Innovate Africa", id: 2 },
    { title: "Full Stack Developer", location: "Johannesburg", company: "CodeWorks", id: 3 },
    { title: "Mobile Developer", location: "Nairobi", company: "Tech Studio", id: 4 },
    { title: "UX/UI Designer", location: "Accra", company: "Creative Hub", id: 5 },
    { title: "DevOps Engineer", location: "Lagos", company: "Future Tech", id: 6 }
];

// Function to simulate login
function login(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the email and password match
    if (email === validEmail && password === validPassword) {
        // Hide the login form and show the job listings
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("jobPage").style.display = "block";
        loadJobs();
    } else {
        alert("Invalid login credentials.");
    }
}

// Function to load jobs into the page
function loadJobs() {
    const jobListElement = document.getElementById("jobList");
    jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h2 class="job-title">${job.title}</h2>
            <p>Location: ${job.location}</p>
            <p>Company: ${job.company}</p>
            <button class="apply-btn" onclick="showApplicationForm(${job.id})">Apply Now</button>
        `;

        jobListElement.appendChild(jobCard);
    });
}

// Show application form when "Apply Now" button is clicked
function showApplicationForm(jobId) {
    const applicationForm = document.getElementById("applicationForm");
    applicationForm.innerHTML = `
        <h2>Apply for Job</h2>
        <form id="applyForm" onsubmit="submitApplication(event, ${jobId})">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="appEmail" placeholder="Your Email" required />
            <input type="text" id="qualification" placeholder="Qualification" required />
            <input type="text" id="experience" placeholder="Experience" required />
            <input type="text" id="location" placeholder="Your Location" required />
            <button type="submit">Submit Application</button>
        </form>
        <button onclick="closeApplicationForm()">Close</button>
    `;

    applicationForm.style.display = "block";
}

// Close the application form and return to job listings
function closeApplicationForm() {
    document.getElementById("applicationForm").style.display = "none";
}

// Handle form submission
function submitApplication(event, jobId) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("appEmail").value;
    const qualification = document.getElementById("qualification").value;
    const experience = document.getElementById("experience").value;
    const location = document.getElementById("location").value;

    alert(`Application for Job ID: ${jobId}\nName: ${name}\nEmail: ${email}\nQualification: ${qualification}\nExperience: ${experience}\nLocation: ${location}`);
    closeApplicationForm();
}
