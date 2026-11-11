document.addEventListener("scroll", function() {
    const videoSection = document.querySelector(".mission-video");
    const sectionPosition = videoSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        videoSection.classList.add("show");
    }
});