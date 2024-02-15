document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsDiv = document.getElementById('results-div');

    // Check button click event
    checkBtn.addEventListener('click', function() {
        const phoneNumber = userInput.value.trim();

        // If the input is empty, show alert
        if (phoneNumber === '') {
            alert('Please provide a phone number');
            return;
        }

        // Regular expression to match valid US phone numbers
        const phonePattern = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;

        if (phonePattern.test(phoneNumber)) {
            resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
        } else {
            resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
        }
    });

    // Clear button click event
    clearBtn.addEventListener('click', function() {
        resultsDiv.textContent = '';
        userInput.value = '';
    });
});
