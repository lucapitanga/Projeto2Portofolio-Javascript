let appbarMenuItem = document.querySelector('#appbar-menu-item');

let menuMouseover = document.querySelector('.menu-mouseover');

 appbarMenuItem.addEventListener('mouseover', () => {

  if(menuMouseover.classList.contains('hide')) {
     menuMouseover.classList.add('show-menu-mouseover');
     menuMouseover.classList.remove('hide');
  } else if(menuMouseover.classList.contains('show-menu-mouseover')){
     menuMouseover.addEventListener('mouseover', () => {
     menuMouseover.classList.add('show-menu-mouseover');
     menuMouseover.classList.remove('hide');
    })
   } 
  })

menuMouseover.addEventListener('mouseout', () => {

  if(menuMouseover.classList.contains('show-menu-mouseover')) {
     menuMouseover.classList.add('hide');
     menuMouseover.classList.remove('show-menu-mouseover');
  } 
  })

let menuItemMouseover = document.querySelectorAll('#menu-item-mouseover');

let menuItemMouseover2 = document.querySelectorAll('#menu-item-mouseover2');

let menuItemMouseover3 = document.querySelectorAll('#menu-item-mouseover3');

let menuItemMouseoverFather = document.querySelectorAll('.menu-item-mouseover-father');

menuItemMouseover.forEach(itemMouseover => {
  itemMouseover.style.fontFamily = "'Raleway', sans-serif";
  itemMouseover.style.textTransform = 'lowercase';
  itemMouseover.style.textDecoration = 'none';
})

menuItemMouseover2.forEach(itemMouseover2 => {
  itemMouseover2.style.fontFamily = "'Raleway', sans-serif";
  itemMouseover2.style.textTransform = 'lowercase';
  itemMouseover2.style.textDecoration = 'none';
})

menuItemMouseover3.forEach(itemMouseover3 => {
  itemMouseover3.style.fontFamily = "'Raleway', sans-serif";
  itemMouseover3.style.textTransform = 'lowercase';
  itemMouseover3.style.textDecoration = 'none';
})


