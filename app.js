/* Code copied from: https://codepen.io/yp786/pen/MWodGVr
Author: yash
Name: Custom Cursor - Circle Follows The Mouse Pointer
Description: Makes a yellow cursor circle that follows the mouse pointer with delay
Date retrieved: Nov. 18, 2023 */

/* Copied Code Starts */

const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.add(className);
    });

    curosrModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.remove(className);
    });
});

// Copied Code Ends

function scrollToContact() {
    let yPos = document.getElementById('contact-form').getBoundingClientRect().top + window.scrollY - 77;
    window.scrollTo({ top: yPos, behavior: 'smooth' });
}

function scrollToBlogs() {
    let yPos = document.getElementById('blogs-wrapper').getBoundingClientRect().top + window.scrollY - 77;
    window.scrollTo({ top: yPos, behavior: 'smooth' });
}

function scrollToPM() {
    let yPos = document.getElementById('whyPM').getBoundingClientRect().top + window.scrollY - 77;
    window.scrollTo({ top: yPos, behavior: 'smooth' });
}

document.querySelector(".about h1 .hover-change-text#GBDA").addEventListener("mouseover", function () {
    var width = this.offsetWidth;
    this.style.width = "fit-content";
    this.innerHTML = `<div class='small-gbda-text' style='width:` + width + `px; height: 100%; line-height: 100%; font-size: calc(var(--fz-h2) * 37.5 / 100); display: inline-block'; pointer-events: all; display: flex; alight-items: center; justify-content: center; text-alight: center;>Global Business <br> and Digital Arts</div>`
})

document.querySelector(".about h1").addEventListener("mousemove", function (event) {
    if (!document.querySelector(".about h1 .hover-change-text#GBDA:hover")) {
        document.querySelector(".about h1 .hover-change-text#GBDA").innerHTML = "GBDA";
    }
})

let contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener('submit', function (event){
    event.preventDefault();
    contactForm.style.display = "none";
    document.querySelector(".contact-form .confirmation").style.display = "flex";
});

// Image Credit for Stratford
document.getElementById("stratford").addEventListener("mouseover", function (event){
    document.querySelector(".about-image-credit").style.display = "block";
})

document.getElementById("stratford").addEventListener("onmouseleave", function (event){
    document.querySelector(".about-image-credit").style.display = "none";
})

// Scroll to top button
const backToTopButton = document.getElementById('backToTopBtn');

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

backToTopButton.addEventListener('click', scrollToTop);

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});