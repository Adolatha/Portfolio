document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach(el => observer.observe(el));

});

window.addEventListener('scroll',()=>{

    const heroImg =
        document.querySelector('.heroImg');

    heroImg.style.transform =
        `translateY(${window.scrollY * 0.15}px)`;
});
