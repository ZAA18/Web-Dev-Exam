

let homePath;
let aboutPath;
let projectsPath;
let contactPath;

// Check if we're inside the Pages folder
if (window.location.pathname.includes("/Pages/"))
{
    homePath = "../../index.html";
    aboutPath = "about.html";
    projectsPath = "projects.html";
    contactPath = "contact.html";
}
else
{
    // We are on index.html
    homePath = "index.html";
    aboutPath = "Portfolio root/Pages/about.html";
    projectsPath = "Portfolio root/Pages/projects.html";
    contactPath = "Portfolio root/Pages/contact.html";
}

document.getElementById("homeBtn").addEventListener("click", () =>
{
    window.location.href = homePath;
});

document.getElementById("aboutBtn").addEventListener("click", () =>
{
    window.location.href = aboutPath;
});

document.getElementById("projectsBtn").addEventListener("click", () =>
{
    window.location.href = projectsPath;
});

document.getElementById("contactBtn").addEventListener("click", () =>
{
    window.location.href = contactPath;
});

document.getElementById("githubBtn").addEventListener("click", ()=> 
     {window.open("http://github.com/ZAA18", "_blank");});
     
     document.getElementById("linkedinBtn").addEventListener ("click", ()=>
     {window.open("http://linkedin.com", "_blank");});
     
     document.getElementById("itchBtn").addEventListener("click", () => 
     {window.open("https://Zubuhle-nel.itch.io", "_blank");}); 
     