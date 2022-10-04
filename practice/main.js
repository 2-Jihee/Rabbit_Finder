const btn = document.querySelector('.btn');
const rabbit = document.querySelector('.rabbit');

rabbit.addEventListener('click', (event) => {
    console.log(`client: ${event.clientX}, ${event.clientY}`);
    console.log(`page: ${event.pageX}, ${event.pageY}`);
});

btn.addEventListener('click', (event) => {
    console.log('클릭되었습니다.');
    rabbit.scrollIntoView();
});

