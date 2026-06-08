/*document.getElementById("viewProjectsBtn").addEventListener("click", ()=>
 {window.location.href = "projects.html";});

document.getElementById("aboutMeBtn").addEventListener("click", () => 
{window.location.href = "about.html";});
*/

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