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

// Function to open the application form and fill in job title and location
function openApplicationForm(jobTitle, jobLocation) {
    const applicationForm = document.getElementById('applicationForm');
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('applicantLocation').value = jobLocation;
    applicationForm.style.display = 'block';
}

// Function to close the application form
function closeApplicationForm() {
    const applicationForm = document.getElementById('applicationForm');
    applicationForm.style.display = 'none';
}

// Event listener for form submission
document.getElementById('applicationFormDetails').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your application has been submitted successfully!');
    document.getElementById('applicationForm').style.display = 'none';
});
