document.addEventListener("DOMContentLoaded", function() {

    const codingSkills = document.getElementById("coding_skills");
    if(codingSkills) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                codingSkills.classList.add('animate__animated');
            } else {
                codingSkills.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }
    const computerSkills = document.getElementById("computer_skills");
    if (computerSkills) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                computerSkills.classList.add('animate__animated');
            } else {
                computerSkills.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }

    const softSkills = document.getElementById('soft_skills');
    if (softSkills) {
        const applyAnimation = () => {
            if (window.innerWidth > 767) {
                softSkills.classList.add('animate__animated');
            } else {
                softSkills.classList.remove('animate__animated');
            }
        }
        applyAnimation();
    }
})