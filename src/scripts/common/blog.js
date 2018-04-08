export default function blog () {

    const
        navWrap = document.getElementById('navWrap'),
        blogList = document.getElementById('blogList'),
        navList = document.getElementById('navList'),
        navItems = document.querySelectorAll('.nav__item'),
        articles = document.querySelectorAll('.blog__item_active'),
        navItemLinks = document.querySelectorAll('.nav__link'),
        wHeight = window.innerHeight;

    return {
        init: (function () {
            // по клику меняется класс у элемента навигации(пока работает не плавно, надо доделать)
            (function scrollArticle () {
                for(let i = 0; i < navItems.length; i++) {
                    const navItem = navItems[i];
                    const navItemLink = navItemLinks[i];
                    const navItemLinkHref = navItemLink.getAttribute('href'); 
                    const article = articles[i];
                    const articlePosTop = article.getBoundingClientRect().top;
                    navItem.addEventListener('click', (e) => {
                        e.preventDefault();
                        navItems.forEach(item => {
                            item.classList.remove('nav__item-active');
                        });
                        navItem.classList.add('nav__item-active');
                        article.scrollIntoView(); 
                    });
                }
            }());


            // при появлении статьи, меняется подсветка ссылок в навигации
            function addClassNavitemScroll () {
                for (let i = 0; i < navItems.length; i++) {
                    const navItem = navItems[i];
                    const article = articles[i];
                    const articlePosTop = article.getBoundingClientRect().top;

                    if (articlePosTop < wHeight *2/ 3) {
                        navItems.forEach(item => {
                            item.classList.remove('nav__item-active');
                        });
                        navItem.classList.add('nav__item-active');
                    }
                }
            }
            
            window.addEventListener('scroll' , addClassNavitemScroll);

            // по скролу навигация фиксируется слева
            window.addEventListener('scroll', function () {
                const blogRect = blogList.getBoundingClientRect();
                const blogPos = blogRect.top;
                if (blogPos < 0) {
                    navWrap.classList.add('blog_nav-wrap_scroll');
                } else {
                    navWrap.classList.remove('blog_nav-wrap_scroll');
                }
            });
             
            

            // вытягиваем панель по свайпу (доделать чтобы было плавно)
            let toogle = 0;

            function swipeAddClass(e) {
                if (e.target == navList) {
                    if (toogle == 0) {
                        navWrap.classList.add('blog_nav-wrap_swipe');
                        toogle = 1;
                    } else {
                        navWrap.classList.remove('blog_nav-wrap_swipe');
                        toogle = 0;
                    }  
                }        
            }

            navList.addEventListener('touchstart', swipeAddClass);
        }())
    };
}