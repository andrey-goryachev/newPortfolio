export default function worksArrowUp() {
    return {
        init: (function () {
            const btn = document.getElementById('works__btn-up');

            const scrollDown = function () {
                (function scroll() {
                    if (window.pageYOffset !== 0) {
                        window.scrollBy(0, -20);
                        setTimeout(scroll, 0);
                    }
                })();

            };

            btn.addEventListener('click', scrollDown);
        }())
    };
}