document.addEventListener("DOMContentLoaded", function () {
    const theme = document.getElementById('theme');
    const stylesheet = document.getElementById('stylesheet');

    // Load stored theme preference if available
    if (localStorage.getItem('theme-ionutprodea') === 'style1') {
        theme.checked = true;
        stylesheet.href = "/css/style.css";
    }
    else {
        theme.checked = false;
        stylesheet.href = "/css/styles_light.css";
    }


    theme.addEventListener('change', function () {
        if (!this.checked) {
            stylesheet.href = "/css/styles_light.css"; // Switch to dark stylesheet
            localStorage.setItem('theme-ionutprodea', 'style2'); // Save preference
        } else {
            stylesheet.href = "/css/style.css"; // Switch to light stylesheet
            localStorage.setItem('theme-ionutprodea', 'style1'); // Save preference
        }
    });
});