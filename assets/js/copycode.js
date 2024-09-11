
// script.js
function copyToClipboard(elementId) {
    const codeElement = document.getElementById(elementId);
    const code = codeElement.innerText || codeElement.textContent;

    navigator.clipboard.writeText(code)
        .then(() => alert('Code copied to clipboard!'))
        .catch(err => alert('Failed to copy code. Please try again.'));
}

//copy combine code 
function copyAllCode() {
    const htmlCode = document.getElementById('codeWebWorkers').innerText || document.getElementById('codeWebWorkers').textContent;
    const workerCode = document.getElementById('codeWorkerScript').innerText || document.getElementById('codeWorkerScript').textContent;
    
    const combinedCode = `HTML Code:\n${htmlCode}\n\nWorker Script Code:\n${workerCode}`;
    
    navigator.clipboard.writeText(combinedCode)
        .then(() => alert('Both code blocks copied to clipboard!'))
        .catch(err => alert('Failed to copy code. Please try again.'));
}

function copyAllCodes() {
    const variableHoistingCode = document.getElementById('codeVariableHoisting').innerText || document.getElementById('codeVariableHoisting').textContent;
    const functionHoistingCode = document.getElementById('codeFunctionHoisting').innerText || document.getElementById('codeFunctionHoisting').textContent;
    const letConstHoistingCode = document.getElementById('codeLetConstHoisting').innerText || document.getElementById('codeLetConstHoisting').textContent;
    
    const combinedCode = `Variable Hoisting:\n${variableHoistingCode}\n\nFunction Hoisting:\n${functionHoistingCode}\n\nLet and Const Hoisting:\n${letConstHoistingCode}`;
    
    navigator.clipboard.writeText(combinedCode)
        .then(() => alert('All code blocks copied to clipboard!'))
        .catch(err => alert('Failed to copy code. Please try again.'));
}
//search option
function searchPosts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    let found = false;

    // Remove previous highlights
    document.querySelectorAll('.highlight').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
        el.classList.remove('highlight');
    });

    cards.forEach(card => {
        let titleElement = card.querySelector('.card-header span');
        let bodyElement = card.querySelector('.card-body p');

        let title = titleElement.textContent.toLowerCase();
        let bodyText = bodyElement.textContent.toLowerCase();

        // Reset content
        titleElement.innerHTML = titleElement.textContent;
        bodyElement.innerHTML = bodyElement.textContent;

        // Highlight and show/hide cards
        if (title.includes(input) || bodyText.includes(input)) {
            card.style.display = '';
            found = true;

            // Highlight text in title
            if (title.includes(input)) {
                highlightText(titleElement, input);
            }

            // Highlight text in body
            if (bodyText.includes(input)) {
                highlightText(bodyElement, input);
            }

            // Scroll the first matching card into view
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            card.style.display = 'none';
        }
    });

    if (!found) {
        alert('No matching results found.');
    }
}

// Function to wrap matching text with a span to highlight
function highlightText(element, text) {
    let innerHTML = element.innerHTML;
    let index = innerHTML.toLowerCase().indexOf(text);

    if (index >= 0) {
        innerHTML = innerHTML.substring(0, index) +
            '<span class="highlight">' +
            innerHTML.substring(index, index + text.length) +
            '</span>' +
            innerHTML.substring(index + text.length);
        element.innerHTML = innerHTML;
    }
}
