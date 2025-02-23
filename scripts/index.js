document.addEventListener("DOMContentLoaded", function () {
    
    const pic = document.getElementById('pic');

    if (pic) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                pic.classList.add('animate__animated');
            } else {
                pic.classList.remove('animate__animated');
            }
        };
        applyAnimation();
    }
});

