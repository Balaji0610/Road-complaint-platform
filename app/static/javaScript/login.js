// function showAlert() {
//     alert("Hello, World!");
//   }

$("#userlogin").on("submit", function (event) {
    event.preventDefault();
    $.post('signin', $(this).serialize(), function (res) {
        if (res['res'] == 'sucess') {
            window.location.href = 'home';
        }
    })
});









// document.getElementById("log-in").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Get the form and form data
//     var form = document.getElementById("userlogin");
//     var formData = new FormData(form);

//     console.log(formData,"=============")

//     // Create a new XMLHttpRequest object
//     var xhr = new XMLHttpRequest();

//     // Open a POST request to the Django view
//     xhr.open("POST", 'signin', true);

//     // Set the CSRF token header
//     xhr.setRequestHeader("X-CSRFToken", "{{ csrf_token }}");

//     // Define a function to handle the response
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 var res = JSON.parse(xhr.responseText);
//                 if (res.res === 'success') {
//                     // Redirect to home.html upon successful login
//                     window.location.href = 'home.html';
//                 } else {
//                     // Inform the user about invalid credentials
//                     alert("Invalid username or password");
//                 }
//             } else {
//                 // Handle other HTTP status codes
//                 alert("An error occurred, please try again later.");
//             }
//         }
//     };

//     // Send the form data to the Django view
//     xhr.send(formData);
// });

// $("#userlogin").on("submit", function (event) {
//     event.preventDefault();
//     console.log(event,"=============")
//     $.post('signin', $(this).serialize(), function (res) {
//         if (res['res'] == 'sucess') {
//             window.location.href = 'home.html';

//         }
//     })
// });