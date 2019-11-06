const btn = document.querySelector('.js-mobilemenu-btn');
const mobilemenu = document.querySelector('.js-mobilemenu');
const mobilemenu_overlay = document.querySelector('.js-mobilemenu-overlay');
const container = document.querySelector('.js-container');


//Mobilenav
btn.addEventListener('click', function() {
    btn.classList.toggle('is-active');
    mobilemenu.classList.toggle('is-active');
    mobilemenu_overlay.classList.toggle('is-active');
}, false);

mobilemenu_overlay.addEventListener('click', function() {
    btn.classList.remove('is-active');
    mobilemenu.classList.remove('is-active');
    mobilemenu_overlay.classList.remove('is-active');
}, false);


//ScrollHold
var scrollPosition = '';

btn.addEventListener('click', function() {
    if (scrollPosition) scrollPosition = window.pageYOffset;
    
    if (mobilemenu_overlay.classList.contains('is-active')){
        const scrollPosition = window.pageYOffset;
        container.classList.add('is-active');
        container.style.top = '-' + scrollPosition + 'px';
        console.log(scrollPosition);
    }
    else {
        container.classList.remove('is-active');
        container.style.top = '';
        window.scrollTo(0, scrollPosition);
        console.log(scrollPosition);
        
    }
        
});
