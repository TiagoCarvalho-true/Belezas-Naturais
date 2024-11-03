// Selecione todas as imagens dentro da seção da galeria
document.querySelectorAll('#gallery img').forEach(image => {
    image.addEventListener('click', () => {
        // Cria o container da lightbox
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        // Adiciona a imagem clicada dentro do lightbox
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        // Remove a lightbox ao clicar fora da imagem
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});

fetch('/images')
.then(response => response.json())
.then(images => {
    const gallery = document.getElementById('gallery');
    images.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        gallery.appendChild(img);
    });
})
.catch(error => console.error('Error loading images:', error));
