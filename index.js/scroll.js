function scrollTo(elemento) {
  document.querySelector(elemento).scrollIntoView({ behavior: 'smooth' });
};

document.querySelector('#back-top').addEventListener('click', function() {
  event.preventDefault();

  scrollTo('#header');
});