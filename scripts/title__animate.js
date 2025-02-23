document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('anim');
    if (title) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                title.classList.add('animate__animated');
            } else {
                title.classList.remove('animate__animated');
            }
        };
        applyAnimation()
    }
})

