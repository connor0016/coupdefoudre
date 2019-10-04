const toggleActive = (state) => {
    const stateClass = 'is-active';
    const header = document.querySelector('.js-header');
    if (state) {
        header.classList.add(stateClass);
    } else {
        header.classList.remove(stateClass);
    }
};

window.addEventListener('scroll', () => {
    const breakpoint = 1;
    const pos = window.pageYOffset;

    if (pos > breakpoint) {
        toggleActive(true);
    } 
    else {
        toggleActive(false);
    }
});