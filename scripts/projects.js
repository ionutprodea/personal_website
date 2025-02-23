document.addEventListener("DOMContentLoaded", function() {
    const frontEnd = document.getElementById('frontend');
    if (frontEnd) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                frontEnd.classList.add('animate__animated');
            } else {
                frontEnd.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }

    const frontEndGallery = document.getElementById('frontend_gallery');
    if (frontEndGallery) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                frontEndGallery.classList.add('animate__animated');
            } else {
                frontEndGallery.classList.remove('animate__animated')
            }
        }
        applyAnimation();
    }

    const graphicDesign = document.getElementById('graphic_design');
    if (graphicDesign) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                graphicDesign.classList.add('animate__animated');
            } else {
                graphicDesign.classList.remove('animate__animated')
            }
        }
        applyAnimation();
    }

    const graphicDesignGallery = document.getElementById('graphic_design_gallery');
    if (graphicDesignGallery) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                graphicDesignGallery.classList.add('animate__animated');
            } else {
                graphicDesignGallery.classList.remove('animate__animated')
            }
        }
        applyAnimation();
    }
})