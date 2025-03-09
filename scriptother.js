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

document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");
  if (!logo) return; // Exit if logo isn't found

  // Create firefly container
  const fireflyContainer = document.createElement("div");
  fireflyContainer.classList.add("firefly-container");
  logo.appendChild(fireflyContainer);

  // Firefly setup
  const numFireflies = 20;
  const fireflies = [];
  const logoRect = logo.getBoundingClientRect();
  const centerX = logoRect.left + logoRect.width / 2;
  const centerY = logoRect.top + logoRect.height / 2;

  // Create fireflies
  for (let i = 0; i < numFireflies; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");

    const size = Math.random() * 3 + 2; // Random size between 2px and 5px
    firefly.style.setProperty("--size", `${size}px`);

    // Initial position within the logo area
    firefly.style.left = `${Math.random() * 80 + 10}%`;
    firefly.style.top = `${Math.random() * 80 + 10}%`;

    fireflyContainer.appendChild(firefly);
    fireflies.push({
      element: firefly,
      idleX: 0,
      idleY: 0,
      angle: Math.random() * 360,
    });
  }

  // Move fireflies in random patterns
  function moveFireflies() {
    fireflies.forEach((fireflyData) => {
      const firefly = fireflyData.element;

      // Update angle for random movement (slower and smoother)
      fireflyData.angle += (Math.random() - 0.5) * 20; // Reduced angle change
      const moveX = Math.cos(fireflyData.angle * (Math.PI / 180)) * (Math.random() * 5 + 2); // Slower movement
      const moveY = Math.sin(fireflyData.angle * (Math.PI / 180)) * (Math.random() * 5 + 2); // Slower movement

      fireflyData.idleX += moveX;
      fireflyData.idleY += moveY;

      // Constrain fireflies within a radius around the logo
      const distanceFromCenter = Math.sqrt(
        fireflyData.idleX * fireflyData.idleX + fireflyData.idleY * fireflyData.idleY
      );
      if (distanceFromCenter > 50) { // Smaller radius to keep fireflies closer
        fireflyData.idleX *= 0.8;
        fireflyData.idleY *= 0.8;
      }

      // Apply movement to firefly
      firefly.style.transition = "transform 1s linear"; // Slower transition
      firefly.style.transform = `translate(${fireflyData.idleX}px, ${fireflyData.idleY}px) rotate(${fireflyData.angle}deg)`;
    });

    requestAnimationFrame(moveFireflies); // Smooth animation loop
  }

  // Start firefly movement
  moveFireflies();

  // Mouse interaction
  document.addEventListener("mousemove", (event) => {
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    fireflies.forEach((fireflyData) => {
      const firefly = fireflyData.element;
      const rect = firefly.getBoundingClientRect();
      const fireflyX = rect.left + rect.width / 2;
      const fireflyY = rect.top + rect.height / 2;

      const dx = cursorX - fireflyX;
      const dy = cursorY - fireflyY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 60) {
        const angle = Math.atan2(dy, dx);
        const pushX = Math.cos(angle) * -20; // Reduced push effect
        const pushY = Math.sin(angle) * -20; // Reduced push effect

        firefly.style.transition = "transform 0.3s ease-out"; // Smoother transition
        firefly.style.transform = `translate(${pushX}px, ${pushY}px) scale(1.1) rotate(${angle * (180 / Math.PI)}deg)`;
        firefly.classList.add("fighting");
      } else {
        firefly.classList.remove("fighting");
      }
    });
  });
});

// Initialize page animations
function initializePageAnimations() {
  const logo = document.querySelector('.logo');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Hide elements initially
  logo.style.opacity = '0';
  logo.style.transform = 'translateY(-20px)';
  navLinks.forEach((link) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-20px)';
  });

  // Animate logo
  setTimeout(() => {
    logo.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    logo.style.opacity = '1';
    logo.style.transform = 'translateY(0)';
  }, 200);

  // Animate nav links with staggered delay
  navLinks.forEach((link, index) => {
    setTimeout(() => {
      link.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, 400 + index * 200);
  });
}

// Call the initialization function
initializePageAnimations();

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

        // Trigger particle effect and icon animation
        createParticles();
        animateIcon();
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

    function createParticles() {
        const particleCount = 20; // Number of particles
        const toggleRect = themeToggle.getBoundingClientRect();
        const centerX = toggleRect.width / 2;
        const centerY = toggleRect.height / 2;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            themeToggle.appendChild(particle);

            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 30; // Random distance from center
            const size = Math.random() * 3 + 2; // Random size

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = "white";
            particle.style.position = "absolute";
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.borderRadius = "50%";
            particle.style.pointerEvents = "none";
            particle.style.opacity = "0.8";
            particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            particle.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";

            // Animate particles
            setTimeout(() => {
                particle.style.transform = `translate(${Math.cos(angle) * distance * 2}px, ${Math.sin(angle) * distance * 2}px)`;
                particle.style.opacity = "0";
            }, 10);

            // Remove particles after animation
            setTimeout(() => {
                particle.remove();
            }, 600);
        }
    }

    function animateIcon() {
        themeIcon.style.transform = "scale(1.2)";
        themeIcon.style.transition = "transform 0.3s ease-in-out";

        setTimeout(() => {
            themeIcon.style.transform = "scale(1)";
        }, 300);
    }
});

// Block right-click (no pop-up)
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault(); // Prevents the context menu from appearing
  }
});

// Block drag-and-drop
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') {
    e.preventDefault(); // Prevents dragging the image
  }
});

// Block long-press on mobile (no pop-up)
let touchTimer;
document.addEventListener('touchstart', (e) => {
  if (e.target.tagName === 'IMG') {
    touchTimer = setTimeout(() => {
      e.preventDefault(); // Prevents the long-press menu
    }, 500); // Adjust the duration for long-press detection
  }
});

document.addEventListener('touchend', () => {
  clearTimeout(touchTimer); // Clears the timer if the touch ends
});

document.addEventListener('touchmove', () => {
  clearTimeout(touchTimer); // Clears the timer if the user moves their finger
});

//Mouse hover Effect
// Add this JavaScript to track the mouse position and apply the effect
document.addEventListener('mousemove', function (event) {
  const hoverableElements = document.querySelectorAll(
    '.skills li, .software-content li, .education-item, .hobbies-content li, .experience-item, .languages-content li'
  );

  hoverableElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Mouse X position relative to the element
    const mouseY = event.clientY - rect.top; // Mouse Y position relative to the element

    // Update CSS variables for the gradient position
    element.style.setProperty('--mouse-x', `${mouseX}px`);
    element.style.setProperty('--mouse-y', `${mouseY}px`);
  });
});