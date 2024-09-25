document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle visibility of an element
    const toggleButton = document.querySelector('#toggleButton');
    const toggleContent = document.querySelector('#toggleContent');

    if (toggleButton && toggleContent) {
        toggleButton.addEventListener('click', function() {
            toggleContent.classList.toggle('hidden');
        });
    }

    // Example: Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input');
            let valid = true;
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            if (!valid) {
                event.preventDefault();
                alert('Please fill out all required fields.');
            }
        });
    }
});
