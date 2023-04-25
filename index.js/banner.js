let bannerImgs = [];

const banner = document.querySelector('#banner');

const changeBanner = 4000;

let bannerImgsIndex = 0; 

async function starBanner() {
  const response = await fetch('/json/banner.json');
  bannerImgs = await response.json();
  
  setInterval(() => {
   const img = bannerImgs[bannerImgsIndex];
   banner.style.backgroundImage = `url(${img})`;

   if(bannerImgsIndex === bannerImgs.length - 1) {
     bannerImgsIndex = 0;
   } else {
     bannerImgsIndex++;
   };
  
}, changeBanner);
}

starBanner();