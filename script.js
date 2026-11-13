document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mainNavigation");

    if (!menu) { 
        return;
    }

    const links = menu.querySelectorAll(".nav-link");

    links.forEach(function (link) {

        link.addEventListener("click", function () {
        
            if (window.innerWidth < 992) {

                const collapse = bootstrap.Collapse.getOrCreateInstance(
                    menu,
                    { toggle: false }
                );

                collapse.hide();
            }
        });
    });
});