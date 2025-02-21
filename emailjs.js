function initializeFormValidation() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    const popup = document.getElementById('popup');

    // Clear previous errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Validate fields
    let isValid = true;
    if (!name) {
      nameError.textContent = 'Please enter your name.';
      isValid = false;
    }
    if (!email) {
      emailError.textContent = 'Please enter your email address.';
      isValid = false;
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!message) {
      messageError.textContent = 'Please enter a message.';
      isValid = false;
    }

    if (!isValid) return;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Send email
    sendMail(name, email, message, submitButton, popup);
  });
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function sendMail(name, email, message, submitButton, popup) {
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  emailjs.send('sabirsportfolio', 'template_ea224qe', templateParams, 'CUtjM0OlQaRKuKtgi')
    .then(() => {
      document.getElementById('contact-form').reset();
      showPopup('Message sent successfully!');
    }, (error) => {
      showPopup('Failed to send email. Please try again later.');
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message';
    });
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');

  popupMessage.textContent = message;
  popup.style.display = 'flex';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
  // Ensure the popup is hidden on page load
  document.getElementById('popup').style.display = 'none';
  initializeFormValidation();
});
