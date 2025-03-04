document.addEventListener("DOMContentLoaded", function() {
    const myLife = document.getElementById('my_life');
    if (myLife) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                myLife.classList.add('animate__animated');
            } else {
                myLife.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }

    const links = document.getElementById('links');
    if (links) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                links.classList.add('animate__animated');
            } else {
                links.classList.remove('animate__animated')
            }
        }
        applyAnimation();
    }

    const hobbies = document.getElementById('hobbies');
    if (hobbies) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                hobbies.classList.add('animate__animated');
            } else {
                hobbies.classList.remove('animate__animated')
            }
        }
        applyAnimation();
    }
})