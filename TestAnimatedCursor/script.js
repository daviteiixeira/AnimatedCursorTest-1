const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

let isMouseDown = false;

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    if (isMouseDown) {
        cursor.style.backgroundColor = 'blue'; // Mudar a cor do cursor quando o mouse estiver pressionado
    } else {
        cursor.style.backgroundColor = 'red'; // Cor padrão do cursor
    }
});

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});
