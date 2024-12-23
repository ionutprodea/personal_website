const title = document.getElementById('anim');
const pic = document.getElementById('pic');
const resolution = window.screen.width;
title.classList.remove('animate__animated');
pic.classList.remove('animate__animated');

if(resolution > 767) {
    title.classList.add('animate__animated');
    pic.classList.add('animate__animated');
}
