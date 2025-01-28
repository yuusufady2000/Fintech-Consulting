 // script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting (for demo purposes)
    alert('Thank you for contacting us! We will get back to you soon.');
});