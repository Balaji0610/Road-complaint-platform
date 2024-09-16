var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries/MY/states',
    ckey: 'OWFOVVVDaTg4Z0NNQ2xxVkMyS2tnUkpNMjVjQnNWQkxUdmpidmtZcw=='   // key
}

var stateSelect = document.querySelector('.state'),
    citySelect = document.querySelector('.city');

function loadCountries() {
    let apiEndPoint = config.cUrl
    
    fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(Response => Response.json())
    .then(data => {
        //console.log(data);
    
        data.forEach(state => {
            const option = document.createElement('option')
            option.value = state.iso2
            //option.value = state.name
            option.textContent = state.name 
            option.dataset.stateName = state.name;
            stateSelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading states:', error))
}

function loadCities() {
    const selectedStateCode = stateSelect.value
    //console.log(selectedStateCode);
    //citySelect.innerHTML = '<option value="">Select City</option>'     //for clearing existing city

    fetch(`${config.cUrl}/${selectedStateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    .then(response => response.json())
    .then(data => {
        //console.log(data);

        data.forEach(city => {
            const option = document.createElement('option')
            //option.value = city.iso2
            option.value = city.name
            option.textContent = city.name 
            citySelect.appendChild(option)
        })
    })
    .catch(error => console.error('Error loading cities:', error))
}
window.onload = loadCountries

//fetch('./')
/*

var config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries/MY', // Base API URL for Malaysia (replace with appropriate country)
    ckey: 'OWFOVVVDaTg4Z0NNQ2xxVkMyS2tnUkpNMjVjQnNWQkxUdmpidmtZcw==' // API key
};

var stateSelect = document.querySelector('.state');
var citySelect = document.querySelector('.city');

function loadCountries() {
    let apiEndPoint = config.cUrl + '/states';

    fetch(apiEndPoint, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(state => {
                const option = document.createElement('option');
                option.value = state.iso2;
                option.textContent = state.name;
                stateSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading states:', error));
}

function loadCities() {
    const selectedStateCode = stateSelect.value;
    const selectedStateName = stateSelect.options[stateSelect.selectedIndex].textContent;

    // Clear existing cities dropdown
    citySelect.innerHTML = '<option value="">Select City</option>';

    fetch(`${config.cUrl}/states/${selectedStateCode}/cities`, { headers: { "X-CSCAPI-KEY": config.ckey } })
        .then(response => response.json())
        .then(data => {
            data.forEach(city => {
                const option = document.createElement('option');
                option.value = city.id; // Assuming city ID is used as option value
                option.textContent = city.name;
                citySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading cities:', error));
}

// Event listener for state selection change
stateSelect.addEventListener('change', loadCities);

function submitComplaint() {
    const formData = new FormData();
    formData.append('roadType', document.getElementById('road').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('details', document.getElementById('details').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('state', stateSelect.options[stateSelect.selectedIndex].textContent); // Selected state name
    formData.append('city', citySelect.options[citySelect.selectedIndex].textContent); // Selected city name
    formData.append('postCode', document.getElementById('pCode').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('image', document.getElementById('image').files[0]); // Assuming image upload

    fetch('/php/submit_complaint.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Log the response message from PHP
        // Handle success or error response from PHP
        // Optionally show success message or handle redirect
    })
    .catch(error => {
        console.error('Error submitting complaint:', error);
        // Handle AJAX request error (e.g., network issue)
    });
}

// Attach event listener to form submit button
document.getElementById('submitBtn').addEventListener('click', submitComplaint);


// Load countries/states on page load
window.onload = loadCountries;
*/