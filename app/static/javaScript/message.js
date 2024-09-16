/*let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}*/

const form = document.getElementById('popup');

form.addEventListener('submit', function(event) {
    //event.preventDefault();

    // Show popup message
    window.open('message.html', '_blank');

    // Redirect to home page
    setTimeout(function() {
        window.location.href = 'form.html';
    }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)
});
