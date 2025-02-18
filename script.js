document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.3 // Adjust visibility threshold
    });

    sections.forEach(section => observer.observe(section));
});
