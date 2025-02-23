document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const theme = document.getElementById("theme");

    if (localStorage.getItem("theme-ionutprodea") === "style1") {
        logo.src = "/images/logo.png"
    }
    if (localStorage.getItem("theme-ionutprodea") === "style2") {
        logo.src = "/images/logo_dark.png"
    }

    theme.addEventListener("change", function () {if (theme.checked) {
    logo.src = "/images/logo.png"
    }
    else {
    logo.src = "/images/logo_dark.png"
    }
})
})

