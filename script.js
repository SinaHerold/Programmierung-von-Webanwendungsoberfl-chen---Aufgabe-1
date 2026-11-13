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


document.addEventListener("DOMContentLoaded", function () {
    const emissionsData = [
        {
            company: "EcoTech GmbH",
            country: "Deutschland",
            sector: "Technologie",
            emissions: 12500
        },
        {
            company: "GreenWorks AG",
            country: "Schweden",
            sector: "Industrie",
            emissions: 8400
        },
        {
            company: "Nordic Energie",
            country: "Norwegen",
            sector: "Energie",
            emissions: 28700
        },
        {
            company: "solar zukunft",
            country: "Deutschland",
            sector: "Energie",
            emissions: 6200
        },
        {
            company: "BLUEocean Logistics",
            country: "Irland",
            sector: "Logistic",
            emissions: 45900
        },
        {
            company: "Alpine Manufacturing",
            country: "Österreich",
            sector: "Industrie",
            emissions: 31400
        },
        {
            company: "ECO Motion",
            country: "Finnland",
            sector: "Mobilität",
            emissions: 15800
        },
        {
            company: "FutureGrid",
            country: "Deutschland",
            sector: "Energie",
            emissions: 52300
        },
        {
            company: "CleanWave Systems",
            country: "Malta",
            sector: "Technologie",
            emissions: 9700
        },
        {
            company: "GreenTransit",
            country: "Kanada",
            sector: "Mobilität",
            emissions: 22100
        }
    ];

    const tableBody = document.getElementById(
        "emissionsTableBody"
    );

    const tableBody = document.getElementById(
        "companySearch"
    );

    const tableBody = document.getElementById(
        "countryFilter"
    );
    const tableBody = document.getElementById(
        "sortSelect"
    );

    const tableBody = document.getElementById(
        "resultCount"
    );

    const tableBody = document.getElementById(
        "emptyState"
    );

    if (
        !tableBody ||
        !searchImput ||
        !countryFilter ||
        !sortSelect ||
        !resultCount ||
        !emptyState
    ) {
        return;
    }

    const numberFormatter = new Intl.NumberFormat("de-DE");

    const countries = [
        ...new Set(emissionsData.map(item => item.country))
    ].sort((a, b) => a.localeCompare(b, "de"));

    countries.forEach(function (country) {
        const option = document.createElement("option");
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });

    function createCell(label, value) {
        const cell = document.createElement("td");

        cell.dataset.label = label;
        cell.textContent = value;

        return cell;
    }

    function updateTable() {
        const searchTerm = searchInput.value
            .trim()
            .toLocaleLowerCase("de");

        const selectedCountry = countryFilter.value;
        const sortValue = sortSelect.value;

        let filteredData = emissionsData.filter(function (item) {
            const matchesCompany = item.company
                .toLocaleLowerCase("de")
                .includes(searchTerm);

            const matchesCountry =
                selectedCountry === "" ||
                item.country === selectedCountry;

            return matchesCompany && matchesCountry;

        });

        const [sortField, sortDirection] = sortValue.split("-");
        filteredData.sort(function (a, b) {
            let comparison = 0;

            if (sortField === "emissions") {
                comparison = a.emissions - b.emissions;
            } else if (sortField === "country") {
                comparison = a.country.localeCompare(
                    b.country,
                    "de"
                );
            } else {
                comparison = a.company.localeCompare(
                    b.company,
                    "de"
                );
            }

            return sortDirection === "desc"
                ? -comparison
                : comparison;
        });

        tableBody.replaceChildren();

        filteredData.forEach(function (item) {
            const row = document.createElement("tr");

            row.appendChild(
                createCell("Unternehmen", item.company)
            );

            row.appendChild(
                createCell("Land", item.country)
            );

            row.appendChild(
                createCell("Branche", item.sector)
            );

            row.appendChild(
                createCell("CO₂-Emissionen (t)", numberFormatter.format(item.emissions)
                )
            );

            tableBody.appendChild(row);
        });

        resultCount.textContent =
            filteredData.length + " von " + emissionsData.length + " Unternehmen angezeigt ";
        
        emptyState.hidden = filteredData.length !== 0;
    }
    
    searchInput.addEventListener("input", updateTable);
    countryFilter.addEventListener("change", updateTable);
    sortSelect.addEventListener("change", updateTable);

    updateTabel();
    
});