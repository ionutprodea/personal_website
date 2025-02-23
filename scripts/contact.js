document.addEventListener("DOMContentLoaded", function() {

    const contact = document.getElementById("contact");
    if(contact) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                contact.classList.add('animate__animated');
            } else {
                contact.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }
})