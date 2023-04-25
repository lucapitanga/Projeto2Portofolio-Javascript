const imagemKeydown = document.querySelector('#imagem-keydown');

let imagemKeydownAbsolute = false;

document.addEventListener('keydown', (event) => {
  if(imagemKeydownAbsolute === false
  && (event.key === 'ArrowUp' ||
    event.key === 'ArrowDown' || 
    event.key === 'ArrowLeft' ||
    event.key === 'ArrowRight')) {
    imagemKeydown.style.position = 'absolute';
    imagemKeydown.style.top = 0;
    imagemKeydown.style.left = 0;
    imagemKeydownAbsolute = true;
  }
  
  if(event.key === 'ArrowUp') {
    imagemKeydown.style.top = parseInt(imagemKeydown.style.top) - 20 + 'px';
  }else if(event.key === 'ArrowDown') {
    imagemKeydown.style.top = parseInt(imagemKeydown.style.top) + 20 + 'px';
  }else if(event.key === 'ArrowLeft') {
    imagemKeydown.style.left = parseInt(imagemKeydown.style.left) - 20 + 'px';
  }else if(event.key === 'ArrowRight') {
    imagemKeydown.style.left = parseInt(imagemKeydown.style.left) + 20 + 'px';
  }
});