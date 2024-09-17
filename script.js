document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
            updateCopyright();
        });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! (Note: This is a client-side demo, no data is actually sent)');
        });
    }
});

function updateCopyright() {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
}