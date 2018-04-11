import $ from 'jquery';

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
            // по клику появляется статья
            (function scrollArticle () {
                $("#navList").on("click", "a", function (event) {
                    event.preventDefault();
                    //забираем идентификатор с атрибута href
                    var id = $(this).attr('href');
                    //узнаем высоту от начала страницы до блока на который ссылается якорь
                    var top = $(id).offset().top;
                    //анимируем переход на расстояние - top
                    $('body,html').animate({ scrollTop: top }, 1000);
                });       
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