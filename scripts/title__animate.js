const title = document.getElementById('anim');
const resolution = window.screen.width;
title.classList.remove('animate__animated');

if(resolution > 767) {
    title.classList.add('animate__animated');
}
