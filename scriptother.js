// Function to load content dynamically with smooth transitions
function loadPage(page) {
  const mainContent = document.getElementById('main-content');

  // Avoid errors if the page doesn't exist
  if (!pages[page]) {
    console.error(`Page "${page}" not found in pages object.`);
    return;
  }

  // Prevent unnecessary reload if the same page is already active
  if (mainContent.innerHTML.trim() === pages[page].trim()) {
    console.log(`Page "${page}" is already loaded.`);
    return;
  }

  // Hide current content with a smooth transition
  mainContent.style.opacity = '0';
  mainContent.style.transition = 'opacity 0.3s ease';

  // Load new content after the transition completes
  setTimeout(() => {
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
    // Use requestAnimationFrame for smoother animations
    requestAnimationFrame(() => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(-20px)'; // Start above
      item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

      // Staggered delay for each item
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)'; // Move down to final position
      }, index * 200); // Adjust delay for low-end devices
    });
  });
}

// Function to initialize animations on page load (top to bottom)
function initializePageAnimations() {
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


//diler open in mobile and the desktop copy number
function handlePhoneClick(event) {
  if (!navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
      event.preventDefault(); // Stop opening dialer on desktop
      document.getElementById("phonePopup").style.display = "flex"; // Show only when clicked
  }
}

function closePopup(event) {
  if (!event || event.target.classList.contains("popup")) {
      document.getElementById("phonePopup").style.display = "none"; // Close when clicking outside
  }
}

function copyPhoneNumber() {
  navigator.clipboard.writeText("+923237658289");

  let copyMessage = document.getElementById("copyMessage");
  copyMessage.style.display = "block"; // Show message
  copyMessage.style.opacity = "1"; // Ensure it's visible

  setTimeout(() => {
      copyMessage.style.opacity = "0"; // Smooth fade out
      setTimeout(() => {
          copyMessage.style.display = "none"; // Hide after fade out
      }, 300); // Match CSS transition duration
  }, 2000);
}


//ensure the open portfolio when clicked on the home ctr button

  document.addEventListener('DOMContentLoaded', () => {
  // Function to scroll to the portfolio section
  function scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');

    if (portfolioSection) {
      // Smooth scroll to the portfolio section
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Portfolio section not found!');
    }
  }

  // Check for the #portfolio hash on page load
  if (window.location.hash === '#portfolio') {
    scrollToPortfolio();
  }

  // Handle navigation to the portfolio section
  const portfolioLink = document.getElementById('portfolio-link');
  if (portfolioLink) {
    portfolioLink.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      history.pushState(null, '', '#portfolio'); // Update the URL
      scrollToPortfolio(); // Scroll to the portfolio section
    });
  }
});



