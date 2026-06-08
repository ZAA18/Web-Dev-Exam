// We are on index.html
let aboutPath = "Portfolio root/Pages/about.html";
let  projectsPath = "Portfolio root/Pages/projects.html";

// Hero Buttons

document.getElementById("viewProjectsBtn")
    .addEventListener("click", () =>
{
    window.location.href = projectsPath;
});


document.getElementById("aboutMeBtn")
    .addEventListener("click", () =>
{
    window.location.href = aboutPath;
});

//Project buttons

const projectButtons =
    document.querySelectorAll(".projectBtn");

projectButtons.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        window.location.href = projectsPath;
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