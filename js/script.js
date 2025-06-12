// Toggle menu untuk responsive navbar
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("show");
}

// Validasi form "Message Us"
function validateForm() {
    const nameInput = document.getElementById("name-input");

    if (nameInput.value.trim() === '') {
        alert('Harap untuk isi nama anda');
    } else {
        alert(`Hai ${nameInput.value}`);
    }
}

// Slideshow Banner Otomatis
let indexBanner = 0;

showBanner();

/// Increment index
function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    // DOM Banner
    const listImage = document.getElementsByClassName("banner-img");

    // Reset index
    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }

    /// Looping to hide all banner
    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);