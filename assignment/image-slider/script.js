const images = [
    'images/img-1.jpeg',
    'images/img-2.jpg',
    'images/img-3.avif',
    'images/img-4.jpg',
    'images/img-5.jpg'
];

const imageElement = document.getElementById('image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = images[currentImageIndex];
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

updateImage();

