function scrollToHeader(elemento) {
  document.querySelector(elemento).scrollIntoView({ behavior: "smooth" });
};

document.querySelector('#back-top').addEventListener('click', function() {
  event.preventDefault();

  scrollToHeader("#header");
});

function scrollToSkills(elemento) {
  document.querySelector(elemento).scrollIntoView({ behavior: "smooth" });
};

document.querySelector('#menu-item-mouseover2').addEventListener('click', function() {
  event.preventDefault();

  scrollToSkills('#conteudo-skills');
});

function scrollToFatosAleatorios(elemento) {
  document.querySelector(elemento).scrollIntoView({ behavior: "smooth" });
};

document.querySelector('#menu-item-mouseover3').addEventListener('click', function() {
  event.preventDefault();
 
  scrollToFatosAleatorios('#footer');
});