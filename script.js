const viewer = document.querySelector('.lightbox');
const viewerImage = viewer.querySelector('img');
const caption = viewer.querySelector('figcaption');
const closeButton = viewer.querySelector('.close-viewer');

document.querySelectorAll('.photo-open').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof viewer.showModal !== 'function') return;
    event.preventDefault();
    viewerImage.src = link.href;
    viewerImage.alt = link.querySelector('img').alt;
    caption.textContent = link.dataset.caption;
    viewer.showModal();
    document.body.classList.add('viewer-open');
  });
});
closeButton.addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target !== viewer) return;
  const bounds = viewer.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) viewer.close();
});
viewer.addEventListener('close', () => document.body.classList.remove('viewer-open'));
