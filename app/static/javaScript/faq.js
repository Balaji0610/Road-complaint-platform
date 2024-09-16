/*const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

$(document).ready(function() {
    $(document).on('click', '.faq', function() {
        $(this).toggleClass('active');
    });
});
*/

const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )

/*
document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action of the anchor tag
    
    var searchTerm = document.getElementById('searchBar').value.toLowerCase();
    var content = document.getElementById('faq');

    // Remove previous highlights
    content.querySelectorAll('.highlight').forEach(function(element) {
        element.outerHTML = element.innerHTML;
    });

    // Highlight new matches
    var regex = new RegExp('(' + searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    content.innerHTML = content.innerHTML.replace(regex, '<span class="highlight">$1</span>');
});*/

/*
document.getElementById('searchButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action of the anchor tag
    
    var searchTerm = document.getElementById('searchBar').value.toLowerCase();
    var content = document.getElementById('faq');
    var clonedContent = content.cloneNode(true); // Clone the original content

    // Remove previous highlights
    clonedContent.querySelectorAll('.highlight').forEach(function(element) {
        element.outerHTML = element.innerHTML;
    });

    // Highlight new matches
    var regex = new RegExp('(' + searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig');
    clonedContent.innerHTML = clonedContent.innerHTML.replace(regex, '<span class="highlight">$1</span>');

    // Replace original content with modified cloned content
    content.innerHTML = clonedContent.innerHTML;
});
*/

function searchBtn() {
    var searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm === '') {
        ('Please enter a search term.');
        return;
    }

    removeHighlights();

    var searchRegEx = new RegExp(searchTerm, 'gi');

    //var sections = document.querySelectorAll('.faq .question .answer');
    var contentContainer = document.querySelector('.faq');

    // Function to recursively search and highlight text content within elements
    function searchAndHighlight(element) {
        if (!element) return;

        // Loop through child nodes of the current element
        element.childNodes.forEach(function(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                // Text node found, perform search and highlight
                var text = node.textContent;
                var replacedText = text.replace(searchRegEx, function(match) {
                    return '<span class="highlight">' + match + '</span>';
                });

                // Create a temporary element to hold the replaced text
                var tempElement = document.createElement('span');
                tempElement.innerHTML = replacedText;

                // Replace the original text node with the updated content
                element.replaceChild(tempElement, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Recursively process child elements
                searchAndHighlight(node);
            }
        });
    }

    // Start searching and highlighting from the content container
    searchAndHighlight(contentContainer);
}

function removeHighlights() {
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
        // Replace each highlighted span with its text content
        var parent = element.parentNode;
        parent.replaceChild(document.createTextNode(element.textContent), element);
    });
}
