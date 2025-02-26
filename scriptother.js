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

//send gmail mobile and desktop setup

  document.addEventListener("DOMContentLoaded", function () {
      var email = "sabirhussain0166@gmail.com";
      var subject = "Inquiry";
      var body = "Hello Sabir,";
      
      // Encode subject and body for URLs
      var encodedSubject = encodeURIComponent(subject);
      var encodedBody = encodeURIComponent(body);

      // Gmail web link (for desktop)
      var gmailWebLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
      
      // Mailto link (for mobile Gmail app or default email app)
      var mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

      // Check if the user is on a mobile device
      var isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      // Set the appropriate link
      var emailAnchor = document.getElementById("emailLink");
      if (isMobile) {
          emailAnchor.href = mailtoLink;
          emailAnchor.setAttribute("target", "_self"); // Opens in same app
      } else {
          emailAnchor.href = gmailWebLink;
          emailAnchor.setAttribute("target", "_blank"); // Opens in new tab
      }
  });
  
  //toogle change theme 
  document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "dark-theme") {
            setMoonIcon();
        } else {
            setSunIcon();
        }
    }

    // Toggle theme on click
    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");
            setMoonIcon();
            localStorage.setItem("theme", "dark-theme");
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");
            setSunIcon();
            localStorage.setItem("theme", "light-theme");
        }
    });

    function setSunIcon() {
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="5"></circle>
            <path d="M12 2v2M12 20v2M4.93 4.93L3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2M22 12h-2M4.93 19.07L3.51 20.49M20.49 3.51l-1.42 1.42"></path>
        `;
    }

    function setMoonIcon() {
        themeIcon.innerHTML = `
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        `;
    }
});

//moon sun animations

