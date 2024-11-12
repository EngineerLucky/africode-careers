function showApplicationForm(jobTitle, jobLocation, jobCompany) {
    document.getElementById('jobTitle').innerText = jobTitle;
    document.getElementById('jobLocation').innerText = jobLocation;
    document.getElementById('jobCompany').innerText = jobCompany;
    document.getElementById('applicationForm').style.display = 'block';
    document.getElementById('jobList').style.display = 'none';
}

function closeApplicationForm() {
    document.getElementById('applicationForm').style.display = 'none';
    document.getElementById('jobList').style.display = 'flex';
}

function submitApplication() {
    const name = document.getElementById('name').value;
    const qualification = document.getElementById('qualification').value;
    const experience = document.getElementById('experience').value;
    const location = document.getElementById('applicantLocation').value;
    const contact = document.getElementById('contact').value;

    if (name && qualification && experience && location && contact) {
        alert('Your application has been submitted!');
        closeApplicationForm();
    } else {
        alert('Please fill in all fields.');
    }
}
