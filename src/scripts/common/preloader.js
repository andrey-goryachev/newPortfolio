export default function preloader () {
  const svgP = document.querySelector('#preloaderSvg');
  const svgText = document.querySelector('#preloaderText');
  const preloaderWrap = document.querySelector('#preloader');
  let percents = 0;

  function fadeOutnojquery(el) {
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function () {
      el.style.opacity = el.style.opacity - 0.05;
      if (el.style.opacity <= 0.05) {
        clearInterval(interhellopreloader);
        preloaderWrap.style.display = "none";
      }
    }, 16);
  }

  window.onload = function () {
    setTimeout(function () {
      fadeOutnojquery(preloaderWrap);
    }, 1000);
    setInterval(() => {
      percents += 1;
      if (percents <= 100) {
        svgText.innerHTML = `${percents}%`;
      }
    }, 10);
  };

}