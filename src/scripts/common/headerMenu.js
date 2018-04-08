export default function headerMenu () {
    const 
        hamburger = document.getElementById('hamburger'),
        about = document.getElementById('about'),
        blog = document.getElementById('blog'),
        works = document.getElementById('works'),
        menuLink = document.querySelectorAll('.header__menu-link');

    return {
        init: 
            (function () {
                const menuHeader = document.querySelector('.header-wrap-menu');
                const headerMenu = document.querySelector('.header__menu');
                let control = 0;
                const start = (hmg, menu) => {
                    hmg.classList.add('hamburger_active');
                    menu.classList.add('header-wrap-menu_active');
                };
                const end = (hmg, menu) => {
                    hmg.classList.remove('hamburger_active');
                    menu.classList.remove('header-wrap-menu_active');
                };   
               
                hamburger.addEventListener('click',
                    () => {
                        if (control == 0) {
                            start(hamburger, menuHeader);
                            setTimeout(() => {
                                headerMenu.classList.add('header__menu_active');
                            }, 500);
                            control = 1;
                        } else {
                            end(hamburger, menuHeader);
                            headerMenu.classList.remove('header__menu_active');
                            control = 0;
                        }     
                    });           

                if (about) {
                    menuLink.forEach(item => {
                            if (item.getAttribute('href') == 'about.html') {
                                item.classList.add('header__menu-link_active');
                            }
                        });
                }
                if (blog) {
                    menuLink.forEach(item => {
                            if (item.getAttribute('href') == 'blog.html') {
                                item.classList.add('header__menu-link_active');
                            }
                        });
                }
                if (works) {
                    menuLink.forEach(item => {
                            if (item.getAttribute('href') == 'my-works.html') {
                                item.classList.add('header__menu-link_active');
                            }
                        });
                }

            }())        
    };
}