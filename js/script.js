const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');

  // lock scroll saat menu aktif
  document.body.style.overflow =
    navList.classList.contains('active') ? 'hidden' : '';
});
