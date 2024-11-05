let currentIndex = 0;
const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const imageIndex = document.getElementById('imageIndex');

function openModal(index) {
    currentIndex = index;
    updateModalImage();
    modal.style.display = "flex"; // Mostrar modal somente após clique
}

function closeModal() {
    modal.style.display = "none"; // Fechar modal
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    updateModalImage();
}

function updateModalImage() {
    modalImage.src = images[currentIndex].src;
    imageIndex.textContent = `${currentIndex + 1}/${images.length}`;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index)); // Abre modal somente ao clicar
});

document.querySelector('.close').addEventListener('click', closeModal);



