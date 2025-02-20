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

    const systemEngineer = document.getElementById('system engineer');
    if (systemEngineer) {
        const applyAnimation = () => {
            if(window.innerWidth > 767) {
                systemEngineer.classList.add('animate__animated');
            } else {
                systemEngineer.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }
    
    const graphicDesigner = document.getElementById('graphic designer');
    if (graphicDesigner) {
        const applyAnimation = () => {
            if(window.innerWidth > 767) {
                graphicDesigner.classList.add('animate__animated');
            } else {
                graphicDesigner.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }
    
    const supervisor = document.getElementById('team supervisor');
    if (supervisor) {
        const applyAnimation = () => {
            if(window.innerWidth > 767) {
                supervisor.classList.add('animate__animated');
            } else {
                supervisor.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }
    
})

