let conteudoSkills = document.querySelector('#conteudo-skills');

const articleSkills = [
  {
    image: "https://images.easytechjunkie.com/html-screen.jpg",
    title: "Skills.",
    text1: "Html",
    text2: "Css",
    text3: "Javascript",
    text4: "React",
    text5: "React Native",
  },
  {
    image: "https://i.ibb.co/QFtNWL1/Whats-App-Image-2023-04-20-at-17-17-43-1.jpg",
    title: "Fatos Aleatórios.",
    text1: "Flamengo é a minha vida",
    text2: "Música me acalma",
    text3: "Eu moraria na praia",
    text4: "Eu amo meus amigos",
    text5: "Gabigol é o meu ídolo",
  }
];

articleSkills.forEach(article => {
  const articleItem = showObject(
    article.image,
    article.title,
    article.text1,
    article.text2,                  
    article.text3,
    article.text4,
    article.text5);

  conteudoSkills.appendChild(articleItem);
})

function showObject(image, title, text1, text2, text3, text4, text5) {
  let conteudoSkillsItem = document.createElement('article');
  conteudoSkillsItem.className = 'conteudo-skills-item';

   let conteudoItemImage = document.createElement('span');
   conteudoItemImage.className = 'conteudo-item-image';
  
    let itemImage = document.createElement('img');
    itemImage.className = 'item-image';
    itemImage.src = image;

   let conteudoItemInfo = document.createElement('div');
   conteudoItemInfo.className = 'conteudo-item-info';

     let itemTitle = document.createElement('h2');
     itemTitle.className = 'item-title';
     itemTitle.innerHTML = title;

     let conteudoItemText = document.createElement('div');
     conteudoItemText.className = 'conteudo-item-text';

      let itemText1 = document.createElement('p');
      itemText1.className = 'item-text';
      itemText1.style.textTransform = 'lowercase';
      itemText1.style.fontFamily = "'Abel', sans-serif";
      itemText1.style.fontFamily = "'Libre Baskerville', serif";
      itemText1.style.fontFamily = "'Noto Sans', sans-serif";
      itemText1.style.fontFamily = "'Share Tech', sans-serif";
      itemText1.style.fontWeight = 'bold';
      itemText1.innerHTML = text1;

      let itemText2 = document.createElement('p');
      itemText2.className = 'item-text';
      itemText2.style.textTransform = 'lowercase';
      itemText2.style.fontFamily = "'Abel', sans-serif";
      itemText2.style.fontFamily = "'Libre Baskerville', serif";
      itemText2.style.fontFamily = "'Noto Sans', sans-serif";
      itemText2.style.fontFamily = "'Share Tech', sans-serif";
      itemText2.style.fontWeight = 'bold';
      itemText2.innerHTML = text2;

      let itemText3 = document.createElement('p');
      itemText3.className = 'item-text';
      itemText3.style.textTransform = 'lowercase';
      itemText3.style.fontFamily = "'Abel', sans-serif";
      itemText3.style.fontFamily = "'Libre Baskerville', serif";
      itemText3.style.fontFamily = "'Noto Sans', sans-serif";
      itemText3.style.fontFamily = "'Share Tech', sans-serif";
      itemText3.style.fontWeight = 'bold';
      itemText3.innerHTML = text3;

      let itemText4 = document.createElement('p');
      itemText4.className = 'item-text';
      itemText4.style.textTransform = 'lowercase';
      itemText4.style.fontFamily = "'Abel', sans-serif";
      itemText4.style.fontFamily = "'Libre Baskerville', serif";
      itemText4.style.fontFamily = "'Noto Sans', sans-serif";
      itemText4.style.fontFamily = "'Share Tech', sans-serif";
      itemText4.style.fontWeight = 'bold';
      itemText4.innerHTML = text4;

      let itemText5 = document.createElement('p');
      itemText5.className = 'item-text'; 
      itemText5.style.textTransform = 'lowercase';
      itemText5.style.fontFamily = "'Abel', sans-serif";
      itemText5.style.fontFamily = "'Libre Baskerville', serif";
      itemText5.style.fontFamily = "'Noto Sans', sans-serif";
      itemText5.style.fontFamily = "'Share Tech', sans-serif";
      itemText5.style.fontWeight = 'bold';
      itemText5.innerHTML = text5;

  conteudoSkillsItem.appendChild(conteudoItemImage);
  conteudoSkillsItem.appendChild(conteudoItemInfo);
  
  conteudoItemImage.appendChild(itemImage);
  
  conteudoItemInfo.appendChild(itemTitle);
  conteudoItemInfo.appendChild(conteudoItemText);
  
  conteudoItemText.appendChild(itemText1);
  conteudoItemText.appendChild(itemText2);
  conteudoItemText.appendChild(itemText3);
  conteudoItemText.appendChild(itemText4);
  conteudoItemText.appendChild(itemText5);
  
    return conteudoSkillsItem;
}
