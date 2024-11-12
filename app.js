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

function openApplicationForm(jobTitle, jobLocation) {
    document.getElementById('applicationForm').style.display = 'block';
    document.getElementById('jobTitle').innerText = `${jobTitle} in ${jobLocation}`;
}

function closeApplicationForm() {
    document.getElementById('applicationForm').style.display = 'none';
}
