const initScrollAnimation = () => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log("Checking:", entry.target); // 🔥 Debugging logs
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
};

export default initScrollAnimation;
