export default function preloader () {
  const imgs = document.querySelectorAll('img');
  const video = document.querySelector('video');
  const svgP = document.querySelector('#preloaderSvg');
  const svgText = document.querySelector('#preloaderText');
  const preloaderWrap = document.querySelector('#preloader');
  

  window.onload = function () {
    let percents = 1;
    setTimeout(() => {
      preloaderWrap.classList.remove('preloader_active');
      preloaderWrap.classList.add('preloader');
      svgP.classList.remove('preloader__svg_active');
      svgP.classList.add('preloader__svg');
      // svgText.innerHTML = '100%';
      svgText.classList.remove('preloader__text_active');
      svgText.classList.add('preloader__text');
    }, 1000);
    setInterval(() => {
      percents += 1;
      if (percents <= 100) {
        svgText.innerHTML = `${percents}%`;
      }
    }, 10);
  };
  

  // document.addEventListener('DOMContentLoaded', () => {
  //   svgText.innerHTML = '5%';
  //   // ждем видео, если есть
  //   // if (video) {
  //   //   video.addEventListener('load', () => {
  //   //     if (number == imgs.length) {
  //   //       preloaderWrap.classList.remove('preloader_active');
  //   //       preloaderWrap.classList.add('preloader');
  //   //       svgText.innerHTML = '50%';
  //   //     }
  //   //   });
  //   // }

  //   // ждем картинки, меняем проценты в тексте и убираем прелоадер
  //   let number = 0;
  //   let numberAll = imgs.length;

  //   for (let i = 0; i < imgs.length; i++) {
  //     let img = imgs[i];
  //     number += 1;
  //     img.addEventListener('load', () => {
        
  //       console.log(number);
  //       let percentsLoad = number / numberAll * 100;
  //       svgText.innerHTML = `${Math.floor(percentsLoad)}%`;
        
  //       if (number == imgs.length) {
  //         setTimeout(() => {
  //           preloaderWrap.classList.remove('preloader_active');
  //           preloaderWrap.classList.add('preloader');
  //           svgP.classList.remove('preloader__svg_active');
  //           svgP.classList.add('preloader__svg');
  //           svgText.innerHTML = '100%';
  //           svgText.classList.remove('preloader__text_active');
  //           svgText.classList.add('preloader__text');
  //         }, 1000);
  //       }
  //     });
  //   }
  // });
}