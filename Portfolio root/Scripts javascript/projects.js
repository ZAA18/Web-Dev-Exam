
//buttons redirect

    document.getElementById("FrostRollItchBtn").addEventListener ("click", ()=>
    {window.open("https://zubuhle-nel.itch.io/frost-roll", "_blank");});
    
    document.getElementById("MarbleRacerGithubBtn").addEventListener("click", () => 
    {window.open("https://github.com/ZAA18/Marble_Racer", "_blank");}); 

    document.getElementById("MarbleRacerItchBtn").addEventListener("click", ()=> 
        {window.open("https://zubuhle-nel.itch.io/marble-racer", "_blank");});
        
        document.getElementById("VaultBreachGithubBtn").addEventListener ("click", ()=>
        {window.open("https://github.com/ZAA18/Vault_Breach", "_blank");});
        
        document.getElementById("VaultBreachItchBtn").addEventListener("click", () => 
        {window.open("https://zubuhle-nel.itch.io/vault-breach", "_blank");}); 


// footer
document.getElementById("footerGithubBtn").addEventListener("click", ()=> 
    {window.open("http://github.com/ZAA18", "_blank");});
    
    document.getElementById("footerLinkedinBtn").addEventListener ("click", ()=>
    {window.open("http://linkedin.com", "_blank");});
    
    document.getElementById("footerItchBtn").addEventListener("click", () => 
    {window.open("https://Zubuhle-nel.itch.io", "_blank");}); 


//Albums
  
 const galleries =
 {
        frost:
        [
            "../Assets/Images/Frost Roll.png",
            "../Assets/Images/FrostRoll2.png",
            "../Assets/Images/FrostRoll3.png"
        ],
    
        marble:
        [
            "../Assets/Images/MArble racer.png",
            "../Assets/Images/Marble2.png",
            "../Assets/Images/Marble3.png"
        ],
    
        vault:
        [
            "../Assets/Images/Vault Breach.png",
            "../Assets/Images/Vault2.png",
            "../Assets/Images/Vault3.png"
        ]
};

//Gallery Logic
const modal =
document.getElementById("galleryModal");

const modalImage =
document.getElementById("galleryImage");

const closeBtn =
document.getElementById("closeGallery");

const nextBtn =
document.getElementById("nextImage");

const prevBtn =
document.getElementById("prevImage");

let currentGallery = [];
let currentIndex = 0;

document
.querySelectorAll(".project-image")
.forEach(image =>
{
    image.addEventListener("click", () =>
    {
        const galleryName =
        image.dataset.gallery;

        currentGallery =
        galleries[galleryName];

        currentIndex = 0;

        modalImage.src =
        currentGallery[currentIndex];

        modal.classList.add("active");
    });
});

nextBtn.addEventListener("click", () =>
{
    currentIndex++;

    if(currentIndex >= currentGallery.length)
    {
        currentIndex = 0;
    }

    modalImage.src =
    currentGallery[currentIndex];
});

prevBtn.addEventListener("click", () =>
{
    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex =
        currentGallery.length - 1;
    }

    modalImage.src =
    currentGallery[currentIndex];
});

closeBtn.addEventListener("click", () =>
{
    modal.classList.remove("active");
});