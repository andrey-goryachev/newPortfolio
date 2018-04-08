export default function skills () {
    const svgScroll = (function () {
        const 
            svg = document.getElementById('about'),
            svgCircle = document.querySelectorAll('.skill__circle-scale'),
            windowMargin = window.innerHeight / 3, //треть окна
            svgRect = svg.getBoundingClientRect(), 
            svgPos = svgRect.top, // расстояние от about до верхней границы окна
            dashWholeClass = []; // индекс процентов заполнения

            for (var i=0; i < svgCircle.length; i++) {
                let className = svgCircle[i].getAttribute('class'),
                    dashClass = className.slice(26)
                dashWholeClass.push(dashClass);
            }
            
        return {
            grow: function (wScrool) {
                const startAnimate = wScrool - svgPos + windowMargin;
                
                if (startAnimate >= 0) {
                    for(var i=0; i < svgCircle.length; i++){
                        svgCircle[i].style.animation = `show${dashWholeClass[i]} 1.5s`;
                    }
                    
                }
            }
        };
    }());
  
    window.addEventListener('scroll', function () {
        const wScrool = window.pageYOffset;
        svgScroll.grow(wScrool);
    });
}



