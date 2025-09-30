// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Portfolio filtering (basic implementation)
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');

        // In a real implementation, you would filter portfolio items here
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});
// Scroll Animation for Image
// const fadeElements = document.querySelectorAll(".scroll-fade");

// window.addEventListener("scroll", () => {
//     fadeElements.forEach(el => {
//         const elementTop = el.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         if (elementTop < windowHeight - 100) {
//             el.classList.add("show");
//         }
//     });
// });



// Scroll Animation Function
function revealOnScroll() {
  const elements = document.querySelectorAll(
    ".scroll-animate, .scroll-left, .scroll-right, .scroll-fade"
  );

  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      el.classList.add("show");
    }
  });
}

// Run on page load
window.addEventListener("load", revealOnScroll);

// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// GSAP register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sabhi cards select karo
gsap.utils.toArray(".portfolio-item").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%", // jab card viewport me aaye
      toggleActions: "play none none none"
    },
    y: 100,            // neeche se upar
    opacity: 0,
    duration: 1,
    delay: i * 0.2     // ek ek karke delay
  });
});


