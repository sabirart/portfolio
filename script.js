document.addEventListener('DOMContentLoaded', () => {
  // Content for each section
  const pages = {
    home: `
      <section id="home" class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="text-glow">Sabir Hussain</span> <br>
              <span class="text-glow">Professional UI/UX & Graphic Designer</span>
            </h1><br>
            <p class="hero-subtitle">Welcome to My Portfolio Website <br> I design modern, minimalist interfaces that engage, inspire, and convert.</p>
              <a">
                 <button onclick="window.location.href='https://sabirart.github.io/portfolio#portfolio';" type="button" class="portfolio-btn">Open Portfolio</button>
               </a>
           </div>
          <div class="hero-background"></div>
        </div>
      </section>
    `,
    about: `
   <!-- Main Content -->
<main>
  <!-- About Section -->
  <section class="about">
    <div class="container">
      <!-- Profile Image Gallery -->
      <div class="profile-gallery">
        <div class="profile-image active">
          <img src="images/profile.jpg" alt="Your Name">
        </div>
       </div>
      <!-- Bio Section -->
      <div class="bio">
        <h3>About <span class="highlight">Me</span></h3>
        <p>Hi, I'm <span class="highlight">Sabir Hussain</span>, a passionate <span class="highlight">Graphic Designer</span> with expertise in <span class="highlight">UI/UX Design, Front-End Web Development, and Video Editing</span>. I love creating innovative solutions and delivering high-quality work. With <span class="highlight">7 years</span> of experience, I specialize in crafting visually appealing designs and digital experiences.</p>

        <div class="about-section">
            <p>
                I've had the privilege of working with esteemed organizations like <span class="highlight">ZABIST ZABTech</span>, particularly at their <span class="highlight">Thatta campus</span>, known for its excellence in technical education and skill development. 
                I’ve also collaborated with <span class="highlight">RLCC (Rana Liaquat Ali Craftsmen Colony)</span> and <span class="highlight">The Hunar Foundation</span>, where I have successfully trained multiple batches in <span class="highlight">Graphic Design and Digital Marketing</span>, empowering students with essential creative and marketing skills.
            </p>
            <p>
                Beyond graphic design, I am a multi-skilled professional, excelling in <span class="highlight">UI/UX Design, Front-End Web Development, and Video Editing</span>. My passion lies in creating innovative digital experiences, and I always strive to push creative boundaries.
            </p>
            <p><strong>Let’s connect and build something amazing together!</strong></p>
        </div>
      </div>
    </div>
    
  </section>

  <!-- Skills and Software Section -->
  <section class="skills">
    <div class="container">
      <div class="skills-content">
        <h3>Skills</h3>
        <ul>
                <li><i class="fas fa-code custom-icon"></i>Web Development</li>
            <li><i class="fas fa-pencil-ruler custom-icon"></i>UI/UX Design</li>
            <li><i class="fas fa-tasks custom-icon"></i>Project Management</li>
            <li><i class="fas fa-chart-line custom-icon"></i>Data Analysis</li>
            <li><i class="fas fa-palette custom-icon"></i>Graphic Design</li>
            <li><i class="fab fa-js custom-icon"></i>JavaScript</li>
            <li><i class="fab fa-react custom-icon"></i>React</li>
            <li><i class="fab fa-node-js custom-icon"></i>Node.js</li>
            <li><i class="fas fa-palette custom-icon"></i> Brand Identity Design</li>
            <li><i class="fas fa-text-height custom-icon"></i> Typography</li>
            <li><i class="fas fa-pencil-ruler custom-icon"></i> UI/UX Design</li>
            <li><i class="fas fa-palette custom-icon"></i> Brand Identity Design</li>
            <li><i class="fas fa-shapes custom-icon"></i> Prototyping</li>
            <li><i class="fas fa-film custom-icon"></i> Motion Graphics</li>
                    </ul>
      </div>
      <div class="software-content">
        <h3>Software Used</h3>
        <ul>
            <li><i class="fab fa-figma custom-icon"></i> Figma</li>
            <li><i class="fab fa-adobe custom-icon"></i> Adobe XD</li> <!-- Generic Adobe icon -->
            <li><i class="fas fa-image custom-icon"></i> Adobe Photoshop</li> <!-- Generic image icon -->
            <li><i class="fas fa-paint-brush custom-icon"></i> Adobe Illustrator</li> <!-- Generic paint brush icon -->
            <li><i class="fas fa-video custom-icon"></i> Adobe Premiere</li> <!-- Generic video icon -->
            <li><i class="fas fa-film custom-icon"></i> After Effects (Basics)</li> <!-- Generic film icon -->
            <li><i class="fab fa-html5 custom-icon"></i> HTML/CSS</li>
            <li><i class="fab fa-js custom-icon"></i> JavaScript Basic</li>
            <li><i class="fab fa-wordpress custom-icon"></i> WordPress (Basics)</li>
          </ul>
      </div>
    </div>
  </section>

  <!-- Education and Hobbies Section -->
  <section class="education">
    <div class="container">
      <!-- Education Section -->
      <div class="education-content">
        <h3>Education</h3>
        <div class="education-item">
          <h4><i class="fas fa-graduation-cap custom-icon"></i>Bachelor of Science in Computer Science</h4>
          <p>University Name, Graduation Year</p>
        </div>
        <div class="education-item">
          <h4><i class="fas fa-certificate custom-icon"></i>Certification in Web Development</h4>
          <p>Online Platform, Completion Year</p>
        </div>
      </div>

      <!-- Hobbies Section -->
      <div class="hobbies-content">
        <h3>Hobbies</h3>
        <ul>
          <li><i class="fas fa-camera custom-icon"></i>Photography</li>
          <li><i class="fas fa-plane custom-icon"></i>Traveling</li>
          <li><i class="fas fa-book custom-icon"></i>Reading</li>
          <li><i class="fas fa-guitar custom-icon"></i>Playing Guitar</li>
          <li><i class="fas fa-hiking custom-icon"></i>Hiking</li>
        </ul>
      </div>
    </div>
  </section>

<!-- Experience and Languages Section -->
<section class="experience-languages">
  <div class="container">
    <!-- Experience Section -->
    <div class="experience-content">
      <h3>Experience</h3>
      <div class="experience-item">
        <h4><i class="fas fa-briefcase custom-icon"></i>Senior Web Developer</h4>
        <p>Tech Innovators Inc. | Jan 2020 - Present</p>
        <ul>
          <li>Led a team of 5 developers to build scalable web applications using React and Node.js.</li>
          <li>Optimized application performance, reducing load times by 40%.</li>
          <li>Collaborated with cross-functional teams to deliver projects on time and within budget.</li>
        </ul>
      </div>
      <div class="experience-item">
        <h4><i class="fas fa-briefcase custom-icon"></i>UI/UX Designer</h4>
        <p>Creative Solutions Agency | Jun 2017 - Dec 2019</p>
        <ul>
          <li>Designed intuitive user interfaces for web and mobile applications.</li>
          <li>Conducted user research and usability testing to improve product design.</li>
          <li>Created wireframes and prototypes using Figma and Adobe XD.</li>
        </ul>
      </div>
    </div>

    <!-- Languages Section -->
    <div class="languages-content">
      <h3>Languages</h3>
      <ul>
        <li><i class="fas fa-language custom-icon"></i>English (Fluent)</li>
        <li><i class="fas fa-language custom-icon"></i>Spanish (Intermediate)</li>
        <li><i class="fas fa-language custom-icon"></i>French (Basic)</li>
        <li><i class="fas fa-language custom-icon"></i>German (Basic)</li>
      </ul>
    </div>
  </div>
</section>
    `,
    portfolio: `
      <section id="portfolio" class="portfolio">
        <div class="grid" id="portfolio-grid">
          <!-- Portfolio items will be dynamically inserted here -->
        </div>
        <!-- Fullscreen Modal -->
        <div id="full-screen-modal" class="modal">
          <span class="close"><i class="fas fa-times"></i></span>
          <span class="nav-arrow left-arrow">&#10094;</span>
          <span class="nav-arrow right-arrow">&#10095;</span>
          <img class="modal-content" id="modal-img">
          <video class="modal-content" id="modal-video" controls></video>
          <div id="caption"></div>
        </div>
      </section>
    `,
    contact: `
      <section id="contact" class="contact">
  <div class="container">
    <h2>Let’s Create <br> Something Amazing!</h2>
    <div class="contact-content">
      <div class="social-links">
    <a href="https://wa.me/923237658289" target="_blank" aria-label="Whatsapp">
      <i class="fab fa-whatsapp"></i>
    </a>
    <a href="tel:+923237658289" onclick="handlePhoneClick(event)" aria-label="Phone">
    <i class="fas fa-phone-alt"></i>
</a>
<!-- Pop-up Box (Hidden by Default) -->
<div id="phonePopup" class="popup" style="display: none;" onclick="closePopup(event)">
    <div class="popup-content" onclick="event.stopPropagation();">
        <span class="popclose" onclick="closePopup()">&times;</span>
        <p>CONTACT NUMBER</p>
        <h2>+92 323 7658289</h2>
        <button onclick="copyPhoneNumber()">Copy Number</button>
        <p id="copyMessage" style="display: none; color: green; margin-top: 10px;">Number copied!</p>
    </div>
</div>
   <a href="https://mail.google.com/mail/u/0/?view=cm&to=sabirhussain0166@gmail.com&su=Inquiry&body=Hello%20Sabir," target="_blank" aria-label="Gmail">
   <i class="fas fa-envelope"></i>
</a>
</div>
      <p style="text-align: center; padding-bottom: 20px">or</p>
    <form id="contact-form" class="contact-form">
  <div>
    <input type="text" id="name" placeholder="Your Name" required aria-label="Your Name">
    <span id="name-error" class="error-message"></span>
  </div>
  <div>
    <input type="email" id="email" placeholder="Your Email" required aria-label="Your Email">
    <span id="email-error" class="error-message"></span>
  </div>
  <div>
    <textarea id="message" placeholder="Your Message" required aria-label="Your Message"></textarea>
    <span id="message-error" class="error-message"></span>
  </div>
  <button type="submit">Send Message</button>
</form>

<!-- Pop-up (Hidden by Default) -->
<div id="popup" class="popup" style="display: none;">
  <div class="popup-content">
    <p id="popup-message"></p>
  </div>
</div>
    </div>
  </div>
</section>
    `
  };

// Function to generate portfolio items dynamically
function generatePortfolioItems() {
  const portfolioItems = [];

  // Add 15 images
  for (let i = 1; i <= 15; i++) {
    portfolioItems.push({
      type: 'image',
      src: `images/project${i}.jpg`,
      srcset: `images/project${i}-small.jpg 480w, images/project${i}.jpg 1024w`, // Responsive images
      sizes: '(max-width: 600px) 480px, 1024px', // Responsive sizes
      caption: `Project ${i} - Graphic Design`,
      alt: `Project ${i} - Graphic Design`
    });
  }

  // Add 10 GIFs
  for (let i = 16; i <= 25; i++) {
    portfolioItems.push({
      type: 'image', // Treat GIFs as images
      src: `gif/project${i}.gif`,
      srcset: `gif/project${i}-small.gif 480w, gif/project${i}.gif 1024w`, // Responsive GIFs
      sizes: '(max-width: 600px) 480px, 1024px', // Responsive sizes
      caption: `Project ${i} - Animated Design`,
      alt: `Project ${i} - Animated Design`
    });
  }

  // Add 5 videos
  for (let i = 26; i <= 30; i++) {
    portfolioItems.push({
      type: 'video',
      src: `videos/project${i}.mp4`,
      poster: `videos/project${i}-thumbnail.jpg`, // Thumbnail for the video
      caption: `Project ${i} - Play Video`,
      alt: `Project ${i} - Video`
    });
  }

  return portfolioItems;
}

// Generate portfolio grid dynamically
function generatePortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  grid.innerHTML = ''; // Clear existing content

  const portfolioItems = generatePortfolioItems(); // Get the dynamically generated items
  const fragment = document.createDocumentFragment(); // Use a document fragment

  portfolioItems.forEach((item, index) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.srcset = item.srcset || ''; // Add srcset for responsive images
      img.sizes = item.sizes || ''; // Add sizes for responsive images
      img.alt = item.alt || `Project ${index + 1}`;
      img.loading = 'lazy'; // Ensure lazy loading for images
      img.classList.add('project-img');
      img.onerror = () => {
        img.src = 'images/fallback.jpg'; // Fallback image in case of error
      };
      gridItem.appendChild(img);
    } else if (item.type === 'video') {
      const video = document.createElement('video');
      video.controls = true;
      video.preload = 'none'; // Ensure video is not preloaded
      video.poster = item.poster; // Set the thumbnail for the video
      const source = document.createElement('source');
      source.src = item.src;
      source.type = 'video/mp4';
      video.appendChild(source);
      video.onerror = () => {
        video.innerHTML = '<p>Unable to load video.</p>'; // Fallback message
      };
      gridItem.appendChild(video);
      gridItem.classList.add('video-item');
    }

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    const caption = document.createElement('p');
    caption.innerText = item.caption;
    overlay.appendChild(caption);
    gridItem.appendChild(overlay);

    fragment.appendChild(gridItem); // Append to fragment instead of directly to the DOM
  });

  grid.appendChild(fragment); // Append the fragment to the DOM in one go
}

// Function to load content dynamically with smooth transitions
function loadPage(page) {
  const mainContent = document.getElementById('main-content');
  const loadingSpinner = document.getElementById('loading-spinner');

  if (!pages[page]) return; // Exit if the page doesn't exist
  if (mainContent.innerHTML.trim() === pages[page].trim()) return; // Exit if the content is already loaded

  // Reset body overflow to auto when loading a new page
  document.body.style.overflow = 'auto';

  // Hide spinner only for Contact page
  loadingSpinner.style.display = page === 'contact' ? 'none' : 'block';

  console.log("Loading spinner started..."); // Debugging

  mainContent.classList.add('page-transition');

  setTimeout(() => {
    mainContent.innerHTML = pages[page];
    window.scrollTo(0, 0);
    mainContent.classList.remove('page-transition');
    mainContent.classList.add('page-enter');

    updateActiveLink(page);
    if (page === 'portfolio') {
      generatePortfolioGrid();
      initializeModal();
    }
    if (page === 'contact') {
      initializeFormValidation();
    }

    animateContentItems();

    setTimeout(() => {
      if (page !== 'contact') {
        loadingSpinner.style.display = 'none';
      }
      console.log("Loading spinner stopped!"); // Debugging
      mainContent.classList.remove('page-enter');
    }, 300);
  }, 300);
}

// Ensure images are cached
function cacheImages() {
  const portfolioItems = generatePortfolioItems();
  portfolioItems.forEach(item => {
    if (item.type === 'image') {
      const img = new Image();
      img.src = item.src;
      if (item.srcset) {
        img.srcset = item.srcset;
      }
      if (item.sizes) {
        img.sizes = item.sizes;
      }
    }
  });
}

// Initialize the page
function initializePage() {
  cacheImages();
  loadPage('portfolio'); // Load the portfolio page by default
}

// Call initializePage when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);

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

// Update active link in the navigation
function updateActiveLink(activePage) {
  document.querySelectorAll('.nav-links a, .logo, .mobile-nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === activePage);
  });
}

// Event listeners for navigation links (desktop and mobile)
document.querySelectorAll('.nav-links a, .logo, .mobile-nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.getAttribute('href').substring(1); // Get the page name from href
    loadPage(page);
    history.pushState({ page }, '', `#${page}`);
  });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
  const page = e.state?.page || 'home';
  loadPage(page);
});

// Load default page (home) on initial load
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1);
  const page = hash || 'home';
  loadPage(page);
});

function initializeModal() {
  const modal = document.getElementById("full-screen-modal");
  const modalImg = document.getElementById("modal-img");
  const modalVideo = document.getElementById("modal-video");
  const captionText = document.getElementById("caption");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const closeBtn = document.querySelector(".close");

  const gridItems = document.querySelectorAll(".grid-item");
  const mediaItems = [];
  const captions = [];

  gridItems.forEach((item, index) => {
    const img = item.querySelector(".project-img");
    const video = item.querySelector("video");

    if (img) {
      mediaItems.push({ type: "image", src: img.src });
      captions.push(item.querySelector(".overlay p").innerText);
    } else if (video) {
      mediaItems.push({ type: "video", src: video.querySelector("source").src });
      captions.push(item.querySelector(".overlay p").innerText);
    }
  });

  let currentIndex = 0;
  let scale = 1; // Initial zoom scale
  const zoomLevels = [1, 1.5]; // Allowed zoom levels: 1x, 1.5x
  let isDragging = false;
  let startX, startY, translateX = 0, translateY = 0;
  let touchStartX, touchStartY, touchEndX, touchEndY;

  // Function to open modal at the user's current viewport position
  function openModal(index) {
    modal.style.display = "block";
    currentIndex = index;
    scale = 1; // Reset zoom scale
    translateX = 0; // Reset translate X
    translateY = 0; // Reset translate Y

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;

    modal.style.top = `${scrollTop}px`;
    modal.style.height = `${viewportHeight}px`;

    if (mediaItems[index].type === "image") {
      modalImg.src = mediaItems[index].src;
      modalImg.style.display = "block";
      modalVideo.style.display = "none";
      modalImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`; // Apply initial scale and translation
    } else {
      modalVideo.src = mediaItems[index].src;
      modalVideo.style.display = "block";
      modalImg.style.display = "none";
    }

    captionText.innerHTML = captions[index];
    document.body.style.overflow = 'hidden'; // Disable page scroll when modal is open
  }

  gridItems.forEach((item, index) => {
    const img = item.querySelector(".project-img");
    const video = item.querySelector("video");

    if (img) img.addEventListener("click", () => openModal(index));
    if (video) video.addEventListener("click", () => openModal(index));
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
    openModal(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % mediaItems.length;
    openModal(currentIndex);
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalVideo.pause();
    document.body.style.overflow = 'auto'; // Enable page scroll when modal is closed
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modalVideo.pause();
      document.body.style.overflow = 'auto'; // Enable page scroll when modal is closed
    }
  });

  document.addEventListener("keydown", (event) => {
    if (modal.style.display === "block") {
      if (event.key === "Escape") {
        modal.style.display = "none";
        modalVideo.pause();
        document.body.style.overflow = 'auto'; // Enable page scroll when modal is closed
      } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
        openModal(currentIndex);
      } else if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % mediaItems.length;
        openModal(currentIndex);
      }
    }
  });

  modalImg.addEventListener("wheel", (event) => {
    if (mediaItems[currentIndex].type === "image") {
      event.preventDefault();

      const imageRect = modalImg.getBoundingClientRect();
      const offsetX = event.clientX - imageRect.left;
      const offsetY = event.clientY - imageRect.top;

      const zoomDirection = event.deltaY < 0 ? 1 : -1;
      const currentZoomIndex = zoomLevels.indexOf(scale);
      let newZoomIndex = currentZoomIndex + zoomDirection;

      if (newZoomIndex < 0) newZoomIndex = 0;
      if (newZoomIndex >= zoomLevels.length) newZoomIndex = zoomLevels.length - 1;

      scale = zoomLevels[newZoomIndex];

      const transformOriginX = (offsetX / modalImg.offsetWidth) * 100;
      const transformOriginY = (offsetY / modalImg.offsetHeight) * 100;

      modalImg.style.transition = "transform 0.3s ease";
      modalImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
      modalImg.style.transformOrigin = `${transformOriginX}% ${transformOriginY}%`;
    }
  });

  // Drag functionality for zoomed-in images with persistent drag after mouse leave
  modalImg.addEventListener("mousedown", (event) => {
    if (scale > 1 && event.button === 0) {
      isDragging = true;
      startX = event.clientX - translateX;
      startY = event.clientY - translateY;
      modalImg.style.cursor = "grabbing";
    }
  });

  modalImg.addEventListener("mousemove", (event) => {
    if (isDragging) {
      event.preventDefault();
      translateX = event.clientX - startX;
      translateY = event.clientY - startY;
      modalImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  });

  modalImg.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      modalImg.style.cursor = "grab";
    }
  });

  modalImg.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      modalImg.style.cursor = "grab";
    }
  });

  modalImg.addEventListener("click", () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    modalImg.style.transition = "transform 0.3s ease";
    modalImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  });

  // Touch event handlers for mobile gestures
  modalImg.addEventListener("touchstart", (event) => {
    if (event.touches.length === 1) {
      // Single touch for swipe gestures
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    } else if (event.touches.length === 2) {
      // Pinch gesture for zoom
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      touchStartX = (touch1.clientX + touch2.clientX) / 2;
      touchStartY = (touch1.clientY + touch2.clientY) / 2;
      touchStartDistance = distance;
    }
  });

  modalImg.addEventListener("touchmove", (event) => {
    if (event.touches.length === 1 && scale === 1) {
      // Single touch for swipe gestures
      touchEndX = event.touches[0].clientX;
      touchEndY = event.touches[0].clientY;
    } else if (event.touches.length === 2) {
      // Pinch gesture for zoom
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      const scaleChange = distance / touchStartDistance;

      scale = Math.min(Math.max(1, scale * scaleChange), 2); // Limit zoom between 1x and 2x
      modalImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  });

  modalImg.addEventListener("touchend", (event) => {
    if (event.changedTouches.length === 1 && scale === 1) {
      // Single touch for swipe gestures
      touchEndX = event.changedTouches[0].clientX;
      touchEndY = event.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (deltaX > 50) {
          // Swipe right (previous image)
          currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
          openModal(currentIndex);
        } else if (deltaX < -50) {
          // Swipe left (next image)
          currentIndex = (currentIndex + 1) % mediaItems.length;
          openModal(currentIndex);
        }
      }
    }
  });
}
});
