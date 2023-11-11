// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");


const markup = galleryItems.map(({ description, original, preview }) => {
    return `<li class="gallery__item js-product-item">
          <a class="gallery_link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
  }).join('');

galleryList.insertAdjacentHTML('beforeEnd', markup);

var gallerylightbox = new SimpleLightbox('.gallery a', {captionsData: "alt" , captionDelay: 250 });

console.log(gallerylightbox);

