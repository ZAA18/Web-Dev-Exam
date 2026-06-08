
document.addEventListener("DOMContentLoaded", () => {

    let aboutPaths = "Portfolio root/Pages/about.html";
    let projectsPaths = "Portfolio root/Pages/projects.html";

    document.getElementById("viewProjectsBtn").addEventListener("click", () => {
        window.location.href = projectsPaths;
    });

    document.getElementById("aboutMeBtn").addEventListener("click", () => {
        window.location.href = aboutPaths;
    });

    const projectButtons = document.querySelectorAll(".projectBtn");

    projectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = projectsPaths;
        });
    });

});





// Reveal effects

const elements = document.querySelectorAll(
    ".hero, .hero-image, .featured-projects, .project-card"
);

function revealElements()
{
    elements.forEach((element) =>
    {
        const top =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if(top < windowHeight - 100)
        {
            element.classList.add("show");
        }
    });
}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();