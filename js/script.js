const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.list');

document.body.appendChild(navList);

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
});
