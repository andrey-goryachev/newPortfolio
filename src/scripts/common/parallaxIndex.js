export default function parallaxIndex () {
    const layer = document.getElementById('parallax__layer');

    const moveLayers = function (e) {
        const initialX = (window.innerWidth / 2) - e.pageX;
        const initialY = (window.innerHeight / 2) - e.pageY;
        const
            divider = 1 / 100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = (window.innerHeight / 2) * divider,
            transformString = 'translate(' + positionX + 'px,' + positionY + 'px)',
            image = document.getElementById('parallax__image');

        layer.style.transform = transformString;
        image.style.bottom = '-' + bottomPosition + 'px';
    };

    window.addEventListener('mousemove', moveLayers);
}