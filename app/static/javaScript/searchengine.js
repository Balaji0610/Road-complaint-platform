function searchAndHighlight() {
    let searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput === '') {
        alert('Please enter a search term.');
        return;
    }

    let contentContainer = document.querySelector('.content');

    // Remove existing highlights before applying new ones
    removeHighlights(contentContainer);

    let regex = new RegExp(searchInput, 'gi');

    // Function to recursively apply highlights within text nodes
    function applyHighlights(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            let parent = node.parentNode;
            let text = node.textContent;
            let match;
            let lastIndex = 0;

            while ((match = regex.exec(text)) !== null) {
                let span = document.createElement('span');
                span.className = 'highlight';
                let matchedText = document.createTextNode(match[0]);
                span.appendChild(matchedText);
                parent.insertBefore(span, node.splitText(match.index));
                node = matchedText;
                lastIndex = regex.lastIndex;
            }

            // Reset regex to start from the beginning for the next node
            regex.lastIndex = 0;
        } else if (node.nodeType === Node.ELEMENT_NODE && !node.classList.contains('highlight')) {
            // Recursively apply highlights to child nodes
            for (let i = 0; i < node.childNodes.length; i++) {
                applyHighlights(node.childNodes[i]);
            }
        }
    }

    // Start applying highlights from the content container
    applyHighlights(contentContainer);
}

function removeHighlights(node) {
    if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('highlight')) {
        // Replace each highlighted span with its text content
        let parent = node.parentNode;
        while (node.firstChild) {
            parent.insertBefore(node.firstChild, node);
        }
        parent.removeChild(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursively remove highlights from child nodes
        for (let i = node.childNodes.length - 1; i >= 0; i--) {
            removeHighlights(node.childNodes[i]);
        }
    }
}
