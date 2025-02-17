document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile navigation
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-navbar');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }

  // Content for each section
  const pages = {
    home: `
      <!-- Advanced Hero Section -->
      <section id="home" class="hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="text-glow">Welcome to my Portfolio</span> <br>
              <span class="text-glow">I'm Sabir .H</span>
            </h1>
            <p class="hero-subtitle">You can Check my Portfolio or Contact Me</p>
          </div>
          <div class="hero-background"></div>
        </div>
      </section>
    `,
    about: `
      <section id="about" class="about">
        <div class="container">
          <div class="profile-image">
            <img src="images/profile.png" alt="Profile Image">
          </div>
          <div class="about-content">
            <div class="bio">
            <h3>Hi, I'm  Sabir Hussain,</h3>
              <p style="text-align: left";> a passionate UI/UX and Graphic Designer dedicated to crafting visually compelling and user-friendly digital experiences. With expertise in industry-leading tools like Figma, Adobe XD, Sketch, and the Adobe Creative Suite, I transform ideas into stunning designs that enhance usability and engagement. My approach blends creativity with functionality, ensuring every design not only looks great but also delivers an intuitive user experience. Let’s create something extraordinary together!</p>
       <div class="skills">
                <h3>Skills & Tools</h3>
                <ul>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Sketch</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Adobe After Effects</li>
                  <li>Adobe Premiere Pro</li>
                  <li>CorelDRAW</li>
                  <li>Canva</li>
                  <li>Blender (3D Design)</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>WordPress</li>
                  <li>UI/UX Design</li>
                  <li>Brand Identity Design</li>
                  <li>Prototyping</li>
                  <li>Motion Graphics</li>
                  <li>Typography</li>
                </ul>
              </div>
            </div>
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
          <span class="close">&times;</span>
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
    <h2>Let’s Create Something Amazing!</h2>
    <div class="contact-content">
      <div class="social-links">
        <a href="https://instagram.com" target="_blank">Instagram</a>
        <a href="https://behance.com/sabirhussain9" target="_blank">Behance</a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sabirhussain0166@gmail.com" target="_blank">Gmail</a>
      </div>
      <form id="contact-form" class="contact-form">
        <input type="text" id="name" placeholder="Your Name" required>
        <input type="email" id="email" placeholder="Your Email" required>
        <textarea id="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</section>
    `
  };

  // Function to generate portfolio items dynamically
  function generatePortfolioItems() {
    const portfolioItems = [];

    // Add 30 images
    for (let i = 1; i <= 30; i++) {
      portfolioItems.push({
        type: 'image',
        src: `images/project${i}.jpg`, // Ensure your images are named project1.jpg, project2.jpg, etc.
        caption: `Project ${i} - Graphic Design` // Customize captions as needed
      });
    }

    // Add 5 videos
    for (let i = 1; i <= 5; i++) {
      portfolioItems.push({
        type: 'video',
        src: `videos/project${i}.mp4`, // Ensure your videos are named project1.mp4, project2.mp4, etc.
        caption: `Project ${i + 30} - Play Video` // Customize captions as needed
      });
    }

    return portfolioItems;
  }

  // Function to load content dynamically
  function loadPage(page) {
    const mainContent = document.getElementById('main-content');

    if (!pages[page]) return; // Avoid errors if the page doesn't exist

    // Prevent unnecessary reload if the same page is already active
    if (mainContent.innerHTML.trim() === pages[page].trim()) return;

    mainContent.innerHTML = pages[page];
    updateActiveLink(page);

    // Reinitialize modal functionality after loading new content
    if (page === 'portfolio') {
      generatePortfolioGrid();
      initializeModal();
    }
  }

  // Generate portfolio grid dynamically
  function generatePortfolioGrid() {
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = ''; // Clear existing content

    const portfolioItems = generatePortfolioItems(); // Get the dynamically generated items

    portfolioItems.forEach((item, index) => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = `Project ${index + 1}`;
        img.loading = 'lazy';
        img.classList.add('project-img');
        gridItem.appendChild(img);
      } else if (item.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'metadata';
        const source = document.createElement('source');
        source.src = item.src;
        source.type = 'video/mp4';
        video.appendChild(source);
        gridItem.appendChild(video);
        gridItem.classList.add('video-item');
      }

      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      const caption = document.createElement('p');
      caption.innerText = item.caption;
      overlay.appendChild(caption);
      gridItem.appendChild(overlay);

      grid.appendChild(gridItem);
    });
  }

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

    // Get all grid items (images & videos)
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

    // Function to open modal
    function openModal(index) {
        modal.style.display = "block";
        currentIndex = index;

        if (mediaItems[index].type === "image") {
            modalImg.src = mediaItems[index].src;
            modalImg.style.display = "block";
            modalVideo.style.display = "none";
        } else {
            modalVideo.src = mediaItems[index].src;
            modalVideo.style.display = "block";
            modalImg.style.display = "none";
        }

        captionText.innerHTML = captions[index];
    }

    // Add click event to open modal
    gridItems.forEach((item, index) => {
        const img = item.querySelector(".project-img");
        const video = item.querySelector("video");

        if (img) img.addEventListener("click", () => openModal(index));
        if (video) video.addEventListener("click", () => openModal(index));
    });

    // Left arrow navigation
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
        openModal(currentIndex);
    });

    // Right arrow navigation
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % mediaItems.length;
        openModal(currentIndex);
    });

    // Close modal on close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        modalVideo.pause();
    });

    // Close modal when clicking outside content
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            modalVideo.pause();
        }
    });

    // Keyboard navigation support
    document.addEventListener("keydown", (event) => {
        if (modal.style.display === "block") {
            if (event.key === "Escape") {
                modal.style.display = "none";
                modalVideo.pause();
            } else if (event.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
                openModal(currentIndex);
            } else if (event.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % mediaItems.length;
                openModal(currentIndex);
            }
        }
    });
  }
});