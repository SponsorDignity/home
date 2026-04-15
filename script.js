// script.js

// Modal functionality
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Form validation
function validateForm() {
    var x = document.forms['myForm']['email'].value;
    if (x == '') {
        alert('Email must be filled out');
        return false;
    }
}

// Email submission handling
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    var formData = new FormData(event.target);
    fetch('/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        closeModal(); // Close modal on success
    })
    .catch(error => console.error('Error:', error));
}