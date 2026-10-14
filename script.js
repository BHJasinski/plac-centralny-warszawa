const dialog = document.querySelector('#lightbox');
const photo = dialog.querySelector('img');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    photo.src = button.dataset.image;
    photo.alt = button.querySelector('img').alt;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
