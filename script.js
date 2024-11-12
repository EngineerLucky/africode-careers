// This function will be triggered when the 'Apply Now' button is clicked
function openApplicationForm(jobTitle, location) {
    // Hide the job list and show the application form
    document.getElementById('jobList').style.display = 'none';
    document.getElementById('applicationForm').style.display = 'block';

    // Fill in the job title and location on the application form
    document.getElementById('jobTitle').textContent = jobTitle;
    document.getElementById('jobLocation').textContent = location;
}

// This function will be triggered when the 'Close' button is clicked
function closeApplicationForm() {
    // Show the job list and hide the application form
    document.getElementById('jobList').style.display = 'block';
    document.getElementById('applicationForm').style.display = 'none';
}

// Function to dynamically populate the job cards with job data
function loadJobData() {
    const jobData = [
        {
            company: 'Tech Africa',
            title: 'Frontend Developer',
            location: 'Harare, Zimbabwe',
            description: 'A leading tech company seeking a skilled frontend developer.',
        },
        {
            company: 'Innovate SA',
            title: 'Backend Developer',
            location: 'Cape Town, South Africa',
            description: 'We are looking for an experienced backend developer.',
        },
        {
            company: 'DevNation',
            title: 'Full Stack Developer',
            location: 'Nairobi, Kenya',
            description: 'Join our team as a full stack developer.',
        },
        {
            company: 'SmartTech',
            title: 'Mobile Developer',
            location: 'Lagos, Nigeria',
            description: 'We are looking for a mobile developer with expertise in iOS and Android.',
        },
        {
            company: 'WebDev Africa',
            title: 'UX/UI Designer',
            location: 'Johannesburg, South Africa',
            description: 'Looking for a creative UX/UI designer.',
        },
        {
            company: 'CodeHub',
            title: 'DevOps Engineer',
            location: 'Remote',
            description: 'Looking for a DevOps engineer to join our remote team.',
        },
    ];

    const jobListElement = document.getElementById('jobList');

    jobData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');

        jobCard.innerHTML = `
            <h2 class="job-title">${job.title}</h2>
            <p>Location: ${job.location}</p>
            <p>Company: ${job.company}</p>
            <p>${job.description}</p>
            <button class="apply-btn" onclick="openApplicationForm('${job.title}', '${job.location}')">Apply Now</button>
        `;

        jobListElement.appendChild(jobCard);
    });
}

// Load the jobs when the page is loaded
window.onload = loadJobData;
