let buttonDrawerRightIndex = document.querySelector('#button-drawer-right-index');

let drawerRightIndex = document.querySelector('#drawer-right-index');

buttonDrawerRightIndex.onclick = () => {
         if(drawerRightIndex.style.right === '-395px') {
            drawerRightIndex.style.right = '0px';
         } else {
            drawerRightIndex.style.right = '-395px';
         }
       };

const listMenu = document.querySelector('#list-menu');
listMenu.style.fontWeight = 'lighter';
listMenu.style.fontFamily = '"Raleway", sans-serif';

const bordaItem = document.querySelectorAll(".borda-item");

bordaItem.forEach(borda => {
  borda.style.textTransform = "lowercase";
})
