document.addEventListener("DOMContentLoaded", function () {
    const navigation = document.getElementById('mainNavigation');

    if (!navigation) return;

    const navigationLinks = navigation.querySelectorAll('.nav-link');

    navigationLinks.forEach(funktion (link) {
        link.addEventListener('click', function () {
        
            if (navigation.classList.contains('show')) {
                const collapse = bootstrap.Collapse.getOrCreateInstande(
                    navigation,
                    { toggle: false}
                );

                collapse.hide();
            }
        });
    });
});