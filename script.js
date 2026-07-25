// ================================
// CONTACT FORM VALIDATION
// ================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === ""){
        alert("Please enter your name.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    if(message === ""){
        alert("Please enter your message.");
        return;
    }

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";

    }
    else{

        header.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";

    }

});

// ================================
// FADE-IN ANIMATION
// ================================

const elements = document.querySelectorAll(
".about-card, .service-card, .testimonial-card, .price-card"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

},{
    threshold:0.2
});

elements.forEach(el=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

    observer.observe(el);

});

// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ================================
// BUTTON RIPPLE EFFECT
// ================================

document.querySelectorAll(".btn, button").forEach(btn=>{

    btn.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter/2 + "px";
        circle.style.top = e.offsetY - diameter/2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

console.log("NorthPeak Digital Website Loaded Successfully 🚀");

