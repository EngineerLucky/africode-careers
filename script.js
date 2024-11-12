const jobs = [
    { title: 'Frontend Developer', location: 'Johannesburg', company: 'Africode Careers' },
    { title: 'Backend Developer', location: 'Cape Town', company: 'Africode Careers' },
    { title: 'Full Stack Developer', location: 'Remote', company: 'Africode Careers' },
    { title: 'Data Scientist', location: 'Lusaka', company: 'Africode Careers' },
    { title: 'DevOps Engineer', location: 'Harare', company: 'Africode Careers' },
];

function displayJobs() {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p>Location: ${job.location}</p>
            <p>Company: ${job.company}</p>
            <button>Apply Now</button>
        `;
        
        jobList.appendChild(jobCard);
    });
}

function filterJobs() {
    const keywordInput = document.getElementById('keywordInput').value.toLowerCase();
    const locationSelect = document.getElementById('locationSelect').value;

    const filteredJobs = jobs.filter(job => {
        const matchesKeyword = job.title.toLowerCase().includes(keywordInput);
        const matchesLocation = !locationSelect || job.location === locationSelect;
        return matchesKeyword && matchesLocation;
    });

    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    
    filteredJobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h2>${job.title}</h2>
            <p>Location: ${job.location}</p>
            <p>Company: ${job.company}</p>
            <button>Apply Now</button>
        `;
        
        jobList.appendChild(jobCard);
    });
}

// Initial display of all jobs
displayJobs();
