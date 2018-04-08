export default function headerArrow () {
    return {
        init: (function () {
            const btn = document.getElementById('header__scroll-btn');
            const wHeight = document.documentElement.clientHeight;
            
            const scrollDown = function () {
                (function scroll() {
                    if (window.pageYOffset < wHeight) {
                        window.scrollBy(0, 20);
                        setTimeout(scroll, 0);
                    } else if (window.pageYOffset > wHeight) {
                        window.scrollTo(0, wHeight);
                    }
                })();

            };

            btn.addEventListener('click', scrollDown);
        }())
    };
}