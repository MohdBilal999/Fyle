// form popup 
document.querySelector("#btn").addEventListener("click", function() {
    document.querySelector("#modal").classList.add("active")
    document.querySelector(".overlay").classList.add("active")
    
})

// popup close button
document.querySelector(".close-button").addEventListener("click", function() {
    document.querySelector("#modal").classList.remove("active")
    document.querySelector(".overlay").classList.remove("active")
})

/* form submission 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Allow the form to submit and redirect to the action URL
    const form = this;

    // Clear the form fields when the user returns to the page
    window.addEventListener('pageshow', function(event) {
        if (event.persisted || (window.performance && window.performance.navigation.type == 2)) {
            form.reset();
        }
    });
});*/

// pause card when hovering
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelector('.cards');
    const cardElements = document.querySelectorAll('.card');
    const bullets = document.querySelectorAll('.bullet');

    cardElements.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            cards.style.animationPlayState = 'paused';
        });
        card.addEventListener('mouseleave', () => {
            cards.style.animationPlayState = 'running';
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(cardElements).indexOf(entry.target) % 4; // 4 is the total number of cards
                bullets.forEach((bullet, i) => {
                    bullet.classList.toggle('active', i === index);
                });
            }
        });
    }, { threshold: 0.5 });

    cardElements.forEach((card) => observer.observe(card));
});



// change image according to card
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardss');
    const displayedImage = document.querySelector('.left .image-1');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const newImage = card.getAttribute('data-image');
            if (displayedImage.src !== newImage) {
                displayedImage.style.opacity = 0;
                setTimeout(() => {
                    displayedImage.src = newImage; 
                    displayedImage.onload = () => {
                        displayedImage.style.opacity = 1;
                    };
                }, 250);
            }
        });
    });
});


