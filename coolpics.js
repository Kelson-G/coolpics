// Menu Toggle
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("show");
});

function handleResize() {
  if (window.innerWidth >= 1000) {
    menu.classList.add("show");
  } else {
    menu.classList.remove("show");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Modal functionality for gallery images
const gallery = document.querySelector('.gallery');
const modal = document.getElementById('image-viewer');

gallery.addEventListener('click', function(event) {
  const img = event.target.closest('img');
  if (!img) return;

  // Build full-size image src
  const src = img.getAttribute('src');
  const base = src.split('-')[0];
  const fullSrc = base + '-full.jpeg';
  const alt = img.getAttribute('alt') || '';

  // Set modal content
  modal.innerHTML = `
    <img src="${fullSrc}" alt="${alt}">
    <button class="close-viewer" aria-label="Close image viewer">×</button>
  `;

  modal.showModal();

  // Use onclick to avoid stacking listeners
  modal.querySelector('.close-viewer').onclick = () => modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});