const buttons = document.querySelectorAll('button');

const buttonClickHandler = e => {
    // e.target.disabled = true;
    console.log(e);
};

buttons.forEach( btn => {
    btn.addEventListener('mouseenter', buttonClickHandler);
});
 window.addEventListener('scroll', e => {
    console.log(e);
 })

// button.removeEventListener();