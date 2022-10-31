const button = document.querySelector('button');

const buttonClickHandler = e => {
    // e.target.disabled = true;
    console.log(e);
};

// buttons.forEach( btn => {
//     btn.addEventListener('mouseenter', buttonClickHandler);
// });
//  window.addEventListener('scroll', e => {
//     console.log(e);
//  })

// button.removeEventListener();

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
})
const div = document.querySelector('div');

div.addEventListener('click', event => {
    console.log('clicked div');
    console.log(event);
});


button.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('clicked button');
    console.log(event);
    console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

list.addEventListener('click', event => {
    // console.log(event.currentTarget);
    // event.target.classList.toggle('hightlight');
    event.target.closest('li').classList.toggle('hightlight');
    form.submit();
});

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('hightlight');
//     })
// })