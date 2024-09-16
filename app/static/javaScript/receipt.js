var road;
var subject;
var details;
var location;
var state;
var city;
var pCode;
var email;

/*
function addData() {
    road = document.getElementById('road').value;
    subject = document.getElementById('subject').value;
    details = document.getElementById('details').value;
    location = document.getElementById('location').value;
    state = document.querySelector('.state').textContent;
    city = document.querySelector('.city').textContent;
    pCode = document.getElementById('pCode').value;
    email = document.getElementById('email').value;

    /*
    document.getElementById('road').innerHTML = document.getElementById('road').value;
    document.getElementById('subject').innerHTML = document.getElementById('subject').value;
    document.getElementById('details').innerHTML = document.getElementById('details').value;
    document.getElementById('location').innerHTML = document.getElementById('location').value;
    document.getElementById('state').innerHTML = document.getElementById('state').value;
    document.getElementById('city').innerHTML = document.getElementById('city').value;
    document.getElementById('pCode').innerHTML = document.getElementById('pCode').value;
    document.getElementById('email').innerHTML = document.getElementById('email').value;
    *

    document.getElementById('road-summary').textContent = road;
    document.getElementById('subject-summary').textContent = subject;
    document.getElementById('details-summary').textContent = details;
    document.getElementById('location-summary').textContent = locationValue;
    document.getElementById('state-summary').textContent = state;
    document.getElementById('city-summary').textContent = city;
    document.getElementById('pCode-summary').textContent = pCode;
    document.getElementById('email-summary').textContent = email;
}
*/

function validateForm() {
    const form = document.getElementById('form_submit');
    const requiredFields = form.querySelectorAll('[required]');
    // const emailInput = document.getElementById('email');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) { // Check if field is empty or only contains whitespace
            isValid = false;
            //const label = field.previousElementSibling.textContent.trim(); // Get label text
            //alert(`${label} is required.`);
            alert('Please complete the form before submitting.');
        }
    });

    // Validate email format using regex pattern
    // if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
    //     isValid = false;
    //     alert('Please enter a valid email address.');
    // }

    // if (isValid) {
    //     addData();
    // }
/*
    if (!isValid) {
        // If all required fields are filled, proceed with form submission
        alert('Please complete the form before submitting.');
    } else {
        addData(); // Call function to process form data
    }*/
}

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


// Function to store form data in local storage
// function addData() {
//     const formData = {
//         road: document.getElementById('road').value,
//         subject: document.getElementById('subject').value,
//         details: document.getElementById('details').value,
//         location: document.getElementById('location').value,
//         state: document.querySelector('.state').options[document.querySelector('.state').selectedIndex].dataset.stateName,
//         city: document.querySelector('.city').value,
//         pCode: document.getElementById('pCode').value,
//         email: document.getElementById('email').value,
//         image: getFileNames('image')
//     };

//     localStorage.setItem('formData', JSON.stringify(formData));

//     // Redirect to the summary page after storing form data
//     window.location.href = 'summary.html';
// }

function addData() {
    const formData = new FormData(document.getElementById('form_submit'));

    // Make an AJAX request to submit the form data
    fetch('submit_data', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // If the response is successful, redirect to the summary page
           $('#popup').load("/message")
            // window.location.href = '/';
        } else {
            // Handle errors if any
            alert('Failed to submit form. Please try again.');
        }
    })
    .catch(error => {
        // Handle network errors
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
}

// Function to get uploaded file names
function getFileNames(inputId) {
    const fileInput = document.getElementById(inputId);
    let fileNames = '';

    // Check if files were selected
    if (fileInput.files && fileInput.files.length > 0) {
        // Concatenate file names into a string
        for (let i = 0; i < fileInput.files.length; i++) {
            fileNames += fileInput.files[i].name;
            if (i < fileInput.files.length - 1) {
                fileNames += ', '; // Add comma between file names
            }
        }
    }

    return fileNames;
}

/*
function addData() {
    const formData = new FormData();
    
    // Retrieve form data
    formData.append('road', document.getElementById('road').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('details', document.getElementById('details').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('state', document.querySelector('.state').value);
    formData.append('city', document.querySelector('.city').value);
    formData.append('pCode', document.getElementById('pCode').value);
    formData.append('email', document.getElementById('email').value);
    
    // Get the files from the file input
    const files = document.getElementById('image').files;
    
    // Append each file to the formData object
    for (let i = 0; i < files.length; i++) {
        formData.append('images[]', files[i]);
    }

    // Make an AJAX request or handle formData as needed (e.g., submit to server)
    // For demonstration, let's log the formData to console
    for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
    }

    // Redirect to the summary page after processing form data
    window.location.href = 'summary.html';
}
*/