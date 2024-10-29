const jobData = [
    {
        title: "Frontend Developer",
        location: "Remote",
        company: "Africode Careers",
        keyword: "frontend developer"
    },
    {
        title: "Backend Developer",
        location: "Cape Town",
        company: "Africode Careers",
        keyword: "backend developer"
    },
    {
        title: "Full Stack Developer",
        location: "Johannesburg",
        company: "Africode Careers",
        keyword: "full stack developer"
    },
    {
        title: "DevOps Engineer",
        location: "Durban",
        company: "Africode Careers",
        keyword: "devops engineer"
    }
];

// Function to display job data
function displayJobs() {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = ''; // Clear existing content

    jobData.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.setAttribute('data-keyword', job.keyword.toLowerCase());
        jobCard.setAttribute('data-location', job.location);

        jobCard.innerHTML = `
            <h2 class="job-title">${job.title}</h2>
            <p>Location: ${job.location}</p>
            <p>Company: ${job.company}</p>
            <button class="apply-btn">Apply Now</button>
        `;
        
        jobList.appendChild(jobCard);
    });
}

// Filter jobs based on keyword and location
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

// Initial display of jobs
displayJobs();
