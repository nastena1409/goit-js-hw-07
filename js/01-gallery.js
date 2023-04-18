import { galleryItems } from './gallery-items.js';
// Change code below this line


function createGalleryItems(galleryItems) {
    
     return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    }).join('');  
}

const galleryList = document.querySelector('.gallery');
const galleryEl = createGalleryItems(galleryItems);
console.log(galleryEl)

galleryList.insertAdjacentHTML('beforeend', galleryEl)

galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    event.preventDefault();

    const currentImage = event.target;

    const instance = basicLightbox.create(`
    <img src="${currentImage.dataset.source}" width="800" height="600">
`)
    instance.show();

    window.addEventListener("keydown", onEscapePress);

    function onEscapePress(event) {
        if (event.code === "Escape") {
            instance.close(); 
        }
    }
   
}

    
