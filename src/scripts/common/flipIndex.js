export default function flip () {
    const start = (btn, flipcontainer) => {
        btn.classList.add('btn-auth_left');
        flipcontainer.classList.add('index-flip-container_rotate');
    }; 
    const end = (btn, flipcontainer) => {
        btn.classList.remove('btn-auth_left');
        flipcontainer.classList.remove('index-flip-container_rotate');
    }; 
    return {
        init: (function () {
            const btnAuth = document.getElementById('btn-auth'); 
            const flipContainer = document.getElementById('index-flip-container'); 
            const btnBack = document.getElementById('btnMain');
            
            btnAuth.addEventListener('click', (e) => {
                e.preventDefault();
                start(btnAuth, flipContainer);
                
            });
            btnBack.addEventListener('click', (e) => {
                e.preventDefault();
                end(btnAuth, flipContainer);
            });
        }())
    };
};
