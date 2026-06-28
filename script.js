// ===============================
// Smooth Scroll + Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

// Highlight active navbar link while scrolling
window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Smooth scrolling
navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".section-title, .about-container, .timeline-item, .skill-category, .project-card, .experience-card, .certificate-card, .contact-card"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ===============================
// Typing Animation
// ===============================

const roles = [
    "Full Stack Web Developer",
    "C++ Developer",
    "Problem Solver",
    "Open to Opportunities"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex > currentRole.length) {
        deleting = true;
        speed = 1500; // pause before deleting
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===============================
// Animated Stats Counter
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = parseFloat(counter.dataset.target);
        let count = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                if (target % 1 !== 0) {
                    counter.innerText = count.toFixed(2);
                } else {
                    counter.innerText = Math.ceil(count);
                }

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounters();

            observer.unobserve(statsSection);

        }

    });

}, {
    threshold: 0.5
});

observer.observe(statsSection);


// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        scrollBtn.style.display="flex";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// Page Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1500);

});

// ===============================
// Cursor Glow
// ===============================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

document.querySelectorAll("a, button").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="40px";
        cursor.style.height="40px";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="20px";
        cursor.style.height="20px";

    });

});








