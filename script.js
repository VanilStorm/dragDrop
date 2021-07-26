const items = document.querySelector('.item');
const placeholder = document.querySelectorAll('.placeholder');

items.addEventListener('dragstart', (event) => {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    },0)
});
items.addEventListener('dragend', (event) => {
    event.target.classList.remove('hold', 'hide');
});

placeholder.forEach((item) => {
    item.addEventListener('dragover', (event) => {
    event.preventDefault();
    });

    item.addEventListener('dragenter', (event) => {
        event.target.classList.add('hovered');
    });

    item.addEventListener('dragleave', (event) => {
        event.target.classList.remove('hovered');
    });

    item.addEventListener('drop', (event) => {
        event.target.classList.remove('hovered');
        event.target.append(items);
    });
})