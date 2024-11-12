function openApplicationForm(jobTitle, jobLocation) {
    document.getElementById('applicationForm').style.display = 'block';
    document.getElementById('jobTitle').innerText = `${jobTitle} in ${jobLocation}`;
}

function closeApplicationForm() {
    document.getElementById('applicationForm').style.display = 'none';
}

document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Display confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Hide form after submission
    document.getElementById('applyForm').style.display = 'none';
});
