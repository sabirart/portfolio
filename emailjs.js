// Email js Contact form Section
   // Initialize form validation for the contact page
   function initializeFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return; // Ensure the form exists

    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission

      // Get form values and trim whitespace
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Validate all fields are filled
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      // Validate email format
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Send email using EmailJS
      sendMail(name, email, message);
    });
  }

  // Helper function to validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Function to send email using EmailJS
  function sendMail(name, email, message) {
    const templateParams = {
      from_name: name, // Use 'from_name' to match EmailJS template
      from_email: email, // Use 'from_email' to match EmailJS template
      message: message
    };

    // Send email using EmailJS
    emailjs.send('sabirsportfolio', 'template_ea224qe', templateParams, 'CUtjM0OlQaRKuKtgi')
      .then((response) => {
        alert('Email sent successfully!');
        document.getElementById('contact-form').reset(); // Reset the form
      }, (error) => {
        alert('Failed to send email. Please try again later.');
        console.error('EmailJS Error:', error);
      });
  }

  // Initialize form validation when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeFormValidation);
