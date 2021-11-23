// Navbar
const tab1 = document.querySelector('.tab .row1');
const tab2 = document.querySelector('.tab .row2');
const info = document.querySelector('.tab .info');
const definisi = document.querySelector('.tab .definisi');

tab1.addEventListener('click', function () {
  definisi.classList.toggle('opacity1');
});

tab2.addEventListener('click', function () {
  info.classList.toggle('opacity1');
});
