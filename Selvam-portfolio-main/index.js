document.addEventListener("DOMContentLoaded", () => {
    const text = "Aspiring Full-Stack Developer passionate about creating seamless digital\nexperiences through UI/UX design and modern web technologies.  Eager\nto learn, grow, and contribute to innovative solutions.";
    const target = document.getElementById("typing-text");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            target.innerHTML += text[index]; 
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    // Delay typing effect by 1 seconds (9000ms)
    setTimeout(typeEffect, 1000);
});

// open social media 

let linkedin=()=>{
    let lin=open('https://www.linkedin.com/in/panneer-selvam-v-4b9baa28b/')
}

let instagram=()=>{
    let insta=open('https://www.instagram.com/kich_boy__/')
}

let github=()=>{
    let gitt=open('https://github.com/Selvamri')
}


// send mail 
let email=()=>{
    window.location.href = "mailto:panneerselvamvb@gmail.com?subject=Hello&body=Hi Selvam,";
}

// download resume 
let download=()=>{
        window.location.href = 'https://drive.google.com/file/d/16oka185GobOu7EQAD6SBqDOqBF6FIlF1/view?usp=drive_link';
}

// scrolling section 
// about scroll
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".about").addEventListener("click", function () {
        document.getElementById("About-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#about").addEventListener("click", function () {
        document.getElementById("About-page").scrollIntoView({ behavior: "smooth" });
    });
});
// education scroll 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".education").addEventListener("click", function () {
        document.getElementById("Education-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#education").addEventListener("click", function () {
        document.getElementById("Education-page").scrollIntoView({ behavior: "smooth" });
    });
    
});

// skillscroll
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".skills").addEventListener("click", function () {
        document.getElementById("Skills-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#skill").addEventListener("click", function () {
        document.getElementById("Skills-page").scrollIntoView({ behavior: "smooth" });
    });
});
// project scroll 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".project").addEventListener("click", function () {
        document.getElementById("Projects-page").scrollIntoView({ behavior: "smooth" });
    });
    document.querySelector("#project").addEventListener("click", function () {
        document.getElementById("Projects-page").scrollIntoView({ behavior: "smooth" });
    });
});
// contact scroll 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#contact").addEventListener("click", function () {
        document.querySelector(".contact-section").scrollIntoView({ behavior: "smooth" });
    });
});
// scroll homr 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".home").addEventListener("click", function () {
        document.querySelector("#main").scrollIntoView({ behavior: "smooth" });
    });
});



// skill

function showDialog(text) {
    document.getElementById('dialogue-box').innerText = text;
    document.getElementById('dialogue-box').style.display = 'block';
    document.querySelector('.skills-container').style.animationPlayState = 'paused';
}

function hideDialog() {
    document.getElementById('dialogue-box').style.display = 'none';
    document.querySelector('.skills-container').style.animationPlayState = 'running';
}

// project page 
        const container = document.querySelector('.projects-container');
        const scrollLeft = document.getElementById('scroll-left');
        const scrollRight = document.getElementById('scroll-right');

        scrollLeft.addEventListener('click', () => {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        });

        scrollRight.addEventListener('click', () => {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        });



        // for contact page 
        const d = new Date();
        let year = d.getFullYear();
        document.getElementById("date").innerHTML = year;

        document.getElementById('contactForm').addEventListener('submit', function (event) {
            const email = document.getElementById('email').value;
            const emailError = document.getElementById('emailError');
            const successMessage = document.getElementById('successMessage');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                emailError.style.display = 'block';
                successMessage.style.display = 'none';
                event.preventDefault(); // Prevent form submission on error
            } else {
                emailError.style.display = 'none';
                successMessage.style.display = 'block';
            }
        });
