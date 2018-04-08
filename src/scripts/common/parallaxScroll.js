export default function parallaxScroll () {
    const parallaxStart = (function () {
        const bg = document.querySelector('.scroll-parallax__layer');
        const image = document.querySelector('.scroll-parallax__image');
        const user = document.querySelector('.user');
        return {
            move: function (block, windowScroll, strafeAmount) {
                const strafe = windowScroll / -strafeAmount + '%';
                const transformString = 'translate3d(0,' + strafe + ',0)';

                const style = block.style;

                style.transform = transformString;
                style.webkitTransform = transformString;
            },

            init: function (wScroll) {
                //this.move(bg, wScroll, 45);
                this.move(image, wScroll, 65);
                this.move(user, wScroll, 45);
            }
        };

    }());


    window.addEventListener('scroll' , function () {
        const wScroll = window.pageYOffset;
        parallaxStart.init(wScroll);
        }
    );
}