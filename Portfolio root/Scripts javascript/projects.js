
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

//game names
const galleryTitles =
    {
        frost: "Frost Roll",
        marble: "Marble Racer",
        vault: "Vault Breach"
    };

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

const galleryTitle = document.getElementById("galleryTitle");
const imageCounter = document.getElementById("imageCounter");

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

        galleryTitle.textContent =
        galleryTitles[galleryName];

        currentIndex = 0;

        modalImage.src =
        currentGallery[currentIndex];

        updateCounter();

        modal.classList.add("active");
    });
});

nextBtn.addEventListener("click", () =>
    {
        let newIndex = currentIndex + 1;
    
        if(newIndex >= currentGallery.length)
        {
            newIndex = 0;
        }
    
        changeImage(newIndex);
    });

prevBtn.addEventListener("click", () =>
    {
        let newIndex = currentIndex - 1;
    
        if(newIndex < 0)
        {
            newIndex =
            currentGallery.length - 1;
        }
    
        changeImage(newIndex);
    });



closeBtn.addEventListener("click", () =>
{
    modal.classList.remove("active");
});

function updateCounter()
{
    imageCounter.textContent =
    `${currentIndex + 1} / ${currentGallery.length}`;
}

function changeImage(newIndex)
{
    modalImage.style.opacity = 0;

    setTimeout(() =>
    {
        currentIndex = newIndex;

        modalImage.src =
        currentGallery[currentIndex];

        modalImage.style.opacity = 1;

        updateCounter();

    }, 200);
}