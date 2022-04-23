export const modal = () => {
  const openModalBtn = document.querySelectorAll('.modal__button');
  const modal = document.querySelector('.modal');

  openModalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('active');
    });
  });
  

  modal.addEventListener('click', e => {
    const modalContent = e.target.closest('.modal__inner');

    if (!modalContent) {
      modal.classList.remove('active');
    }
  });
};