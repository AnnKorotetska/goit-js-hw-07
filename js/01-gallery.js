import { galleryItems } from "./gallery-items.js";
// Change code below this line

function imageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/></a></div>`;
    })
    .join("");
}

const imageCards = document.querySelector(".gallery");
imageCards.insertAdjacentHTML("beforeend", imageCardsMarkup(galleryItems));

imageCards.addEventListener("click", onClick);

function onClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="assets/images/image.png" width="800" height="600">`
  );
  instance.show();

  const lightboxImage = document.querySelector(
    '[src="assets/images/image.png"]'
  );
  lightboxImage.src = e.target.dataset.source;

  window.addEventListener("keydown", escapePress);

  function escapePress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
