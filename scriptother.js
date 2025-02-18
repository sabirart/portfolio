// Function to load content dynamically with smooth transitions
function loadPage(page) {
const mainContent = document.getElementById('main-content');

if (!pages[page]) return; // Avoid errors if the page doesn't exist

// Prevent unnecessary reload if the same page is already active
if (mainContent.innerHTML.trim() === pages[page].trim()) return;

// Hide current content
mainContent.style.opacity = '0';
mainContent.style.transition = 'opacity 0.3s ease';

setTimeout(() => {
// Load new content
mainContent.innerHTML = pages[page];
mainContent.style.opacity = '1';

// Update active link in the navigation
updateActiveLink(page);

// Reinitialize functionality for specific pages
if (page === 'portfolio') {
  generatePortfolioGrid();
  initializeModal();
}

// Initialize form validation for the contact page
if (page === 'contact') {
  initializeFormValidation();
}

// Animate new content items one by one (top to bottom)
animateContentItems();
}, 300); // Match the duration of the CSS transition
}

// Function to animate content items one by one (top to bottom)
function animateContentItems() {
const contentItems = document.querySelectorAll('#main-content > *');
contentItems.forEach((item, index) => {
item.style.opacity = '0';
item.style.transform = 'translateY(-20px)'; // Start above
item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

setTimeout(() => {
  item.style.opacity = '1';
  item.style.transform = 'translateY(0)'; // Move down to final position
}, index * 200); // Staggered delay for each item
});
}

// Function to initialize animations on page load (top to bottom)
function initializePageAnimations() {
const navbar = document.querySelector('.navbar');
const logo = document.querySelector('.logo');
const navLinks = document.querySelectorAll('.nav-links li');

// Hide elements initially
logo.style.opacity = '0';
logo.style.transform = 'translateY(-20px)'; // Start above
navLinks.forEach(link => {
link.style.opacity = '0';
link.style.transform = 'translateY(-20px)'; // Start above
});

// Animate logo after a slight delay
setTimeout(() => {
logo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
logo.style.opacity = '1';
logo.style.transform = 'translateY(0)'; // Move down to final position
}, 200); // Delay for logo animation

// Animate nav links with staggered delay
navLinks.forEach((link, index) => {
setTimeout(() => {
  link.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  link.style.opacity = '1';
  link.style.transform = 'translateY(0)'; // Move down to final position
}, 400 + index * 200); // Staggered delay for each link
});

// Animate main content items (top to bottom)
animateContentItems();
}

// Initialize animations when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePageAnimations);

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
