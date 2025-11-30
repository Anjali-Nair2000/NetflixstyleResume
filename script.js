const leftButtons = document.querySelectorAll(".left-btn");
const rightButtons = document.querySelectorAll(".right-btn");
const carousels = document.querySelectorAll(".carousel");

rightButtons.forEach((btn,index) => {
    btn.addEventListener("click",() => {
        carousels[index].scrollLeft += 300;
    })
})
leftButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        carousels[index].scrollLeft -= 300;
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loading-screen");
    const logo = document.querySelector(".loading-logo");
    const tudum = document.getElementById("tudum-sound");

    // Wait 2s, then zoom + fade
    setTimeout(() => {
        logo.classList.add("zoom-fade");
        loader.style.transition = "opacity 0.8s ease";
        loader.style.opacity = 0;

        // Remove loader after animation
        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, 2000);
});

const introOverlay = document.getElementById("intro-overlay");
const playIntroBtn = document.querySelector(".play-intro-btn");
const closeIntroBtn = document.querySelector(".close-intro");

playIntroBtn.addEventListener("click", () => {
    introOverlay.style.display = "flex";
});

closeIntroBtn.addEventListener("click", () => {
    introOverlay.style.display = "none";
});

// Close when clicking outside the card
introOverlay.addEventListener("click", (e) => {
    if (e.target === introOverlay) {
        introOverlay.style.display = "none";
    }
});

// CARD POPUP
const cardPopup = document.getElementById("card-popup");
const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");
const cardClose = cardPopup.querySelector(".close-intro");

// Add click event to all carousel cards
document.querySelectorAll(".item").forEach(card => {
    card.addEventListener("click", () => {
        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");

        cardTitle.textContent = title;
        cardDescription.textContent = description;

        cardPopup.style.display = "flex";
    });
});

// Close popup
cardClose.addEventListener("click", () => {
    cardPopup.style.display = "none";
});

// Close when clicking outside card
cardPopup.addEventListener("click", (e) => {
    if (e.target === cardPopup) {
        cardPopup.style.display = "none";
    }
});


document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", () => {
        const title = item.dataset.title;
        const desc = item.dataset.description;
        const img = item.dataset.image;

        document.getElementById("card-title").textContent = title;
        document.getElementById("card-description").textContent = desc;

        // SET BACKDROP IMAGE
        document.getElementById("card-backdrop").style.backgroundImage = `url(${img})`;

        document.getElementById("card-popup").style.display = "flex";
    });
});
