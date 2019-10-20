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
btn.addEventListener('click', function() {
    var scrollPosition = window.pageYOffset;
    
    if (mobilemenu_overlay.classList.contains('is-active')){
        container.classList.add('is-active');
        container.style.top = '-' + scrollPosition + 'px';
        console.log(scrollPosition);
    }
    else {
        container.classList.remove('is-active');
        container.style.top = '-' + scrollPosition + 'px';
    }
}, false);
//↑これだと、スクロール値をopenした時も、closeしたときも取得しているため、close時にposition: fixedによりtop: 0となってしまっている。


/*
//もしopen,closeのボタンをそれぞれ用意した場合に考えていたこと...↓
//openボタンクリック時のスクロール値を格納
const scrollPosition;

open-btn.addEventListener('click', function() {
    //スクロール値を取得
    var scrollPosition = window.pageYOffset;
    //l-containerにis-active(position: fixed)を付与
    container.classList.add('is-active');
    //スクロール値をl-containerのtop:''に入れ動かないようにする
    container.style.top = '-' + scrollPosition + 'px';
}, false);



close-btn.addEventListener('click', function() {
    //is-activeを削除
    container.classList.remove('is-active');
    //position: fixedによりトップへ戻ってしまうため再度スクロール値を与える
    container.style.top = '-' + scrollPosition + 'px';
}, false);
*/