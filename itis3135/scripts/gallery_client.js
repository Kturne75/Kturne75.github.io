// Array of image paths and their alt descriptions
const images = [
    {
        src: "../images/resized_IMG_2905.JPEG",
        alt: "Matthews headshot"
    },
    {
        src: "../images/resized_IMG_6677.JPEG",
        alt: "Basketball Photo 1"
    },
    {
        src: "../images/IMG_6681.JPEG",
        alt: "Basketball Photo 2"
    },
    {
        src: "../images/IMG_0539.JPG",
        alt: "Basketball Photo 3"
    },
    {
        src: "../images/IMG_0540.JPG",
        alt: "Basketball Photo 4"
    }
];

let currentIndex = 0;

// DOM Elements
const currentImage = document.getElementById("currentImage");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// Update the displayed image
function updateImage() {
    currentImage.src = images[currentIndex].src;
    currentImage.alt = images[currentIndex].alt;
}

// Event listeners for buttons
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Optional: Allow clicking the image to open modal
currentImage.addEventListener("click", () => {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImage").src = currentImage.src;
    document.getElementById("modalCaption").textContent = currentImage.alt;
});

// Modal navigation
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
    document.getElementById("modalImage").src = images[currentIndex].src;
    document.getElementById("modalCaption").textContent = images[currentIndex].alt;
});

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
    document.getElementById("modalImage").src = images[currentIndex].src;
    document.getElementById("modalCaption").textContent = images[currentIndex].alt;
});

// Close modal
document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("imageModal").style.display = "none";
});
