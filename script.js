document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mainNavigation");

    const menuButton = document.querySelector(
        '[data-bs-target="#mainNavigation"]'
    );

    if (!menu || !menuButton) return;

    const links = menu.querySelectorAll(".nav-link");

    links.forEach(funktion (link) {
        link.addEventListener("click", function () {
        
            if (menu.classList.contains("show")) {
                menuButton.click();

            }
        });
    });
});