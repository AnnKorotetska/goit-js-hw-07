import { galleryItems } from "./gallery-items.js";
// Change code below this line

function imageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const imageCards = document.querySelector(".gallery");
imageCards.insertAdjacentHTML("beforeend", imageCardsMarkup(galleryItems));

const galleryCards = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
