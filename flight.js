// Wait for the webpage to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // --- LOAD MORE FLIGHTS LOGIC ---
    const loadMoreButton = document.getElementById('loadMoreBtn');
    const hiddenFlights = document.querySelectorAll('.hidden-flight');

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            hiddenFlights.forEach(function (flight) {
                // Change display to flex so it matches your CSS layout
                flight.style.display = 'flex';
                // Remove the hidden class so the filter doesn't get confused later
                flight.classList.remove('hidden-flight');
            });
            loadMoreButton.style.display = 'none';
        });
    }

    // --- SLIDER NUMBER UPDATE LOGIC ---
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    if (priceRange && priceValue) {
        // Update the number next to the slider whenever it moves
        priceRange.addEventListener('input', function () {
            priceValue.textContent = priceRange.value;
        });
    }

    // --- APPLY FILTERS LOGIC ---
    const applyFilterBtn = document.getElementById('applyFilterBtn');

    if (applyFilterBtn) {
        applyFilterBtn.addEventListener('click', function () {
            // 1. Get the values the user selected
            const selectedAirline = document.getElementById('airlineFilter').value;
            const maxPrice = parseInt(document.getElementById('priceRange').value, 10);
            const selectedclass = document.getElementById('class').value;

            // 2. Find all flight cards on the page
            const flightCards = document.querySelectorAll('.flight-card');

            // 3. Loop through each card and check if it matches
            flightCards.forEach(function (card) {
                // Skip cards that are still hidden by the "Load More" logic
                if (card.classList.contains('hidden-flight')) {
                    return;
                }

                // Get the airline name from the <h3> inside this specific card
                const airlineName = card.querySelector('.flight-info h3').textContent.trim();
                const airlineClass = card.querySelector('.flight-tier').textContent.trim();

                // Get the price text (e.g., "₹4,899"), remove the '₹' and commas, and turn it into a number
                const priceText = card.querySelector('.flight-price h3').textContent;

                // Step A: Get the text, like "₹4,899"
                let cleanPrice = priceText;

                // Step B: Remove the symbol
                cleanPrice = cleanPrice.replace('₹', '');

                // Step C: Remove the comma
                cleanPrice = cleanPrice.replace(',', '');

                // Step D: Turn the cleaned text ("4899") into a normal number
                const flightPrice = Number(cleanPrice);

                // Check if the card matches our filters
                const matchesAirline = (selectedAirline === "All" || airlineName === selectedAirline);
                const matchesPrice = (flightPrice <= maxPrice);
                const matchClass = (selectedclass === "All" || airlineClass === selectedclass);

                // 4. Show or hide the card based on the match
                if (matchesAirline && matchesPrice && matchClass) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});


var flightResults = document.getElementById("flightResults");

if (flightResults) {
    // Show the summary at the top
    document.getElementById("summary-from").textContent = localStorage.getItem("searchFrom") || "Any";
    document.getElementById("summary-to").textContent = localStorage.getItem("searchTo") || "Any";
    document.getElementById("summary-date").textContent = localStorage.getItem("searchDate") || "Any";

    // Read stored search values
    var savedFrom = localStorage.getItem("searchFrom");
    var savedTo = localStorage.getItem("searchTo");

    if (savedFrom === null) { savedFrom = ""; }
    if (savedTo === null) { savedTo = ""; }

    savedFrom = savedFrom.toLowerCase();
    savedTo = savedTo.toLowerCase();

    // Use a basic 'for' loop to find matching flights
    var filteredFlights = [];

    for (var i = 0; i < allFlights.length; i++) {
        var currentFlight = allFlights[i];
        var flightFrom = currentFlight.from.toLowerCase();
        var flightTo = currentFlight.to.toLowerCase();

        // If the cities match, add to our new array
        if (flightFrom.includes(savedFrom) && flightTo.includes(savedTo)) {
            filteredFlights.push(currentFlight);
        }
    }

    // Display the flights on the screen using basic string addition
    flightResults.innerHTML = "";

    if (filteredFlights.length === 0) {
        flightResults.innerHTML = "<p>No flights found for this route.</p>";
    } else {
        for (var j = 0; j < filteredFlights.length; j++) {
            var f = filteredFlights[j];

            var cardHTML = "<div class='flight-card'>" +
                "<div class='flight-info'>" +
                "<h3>" + f.airline + "</h3>" +
                "<p>" + f.from + " to " + f.to + "</p>" +
                "<p class='flight-tier'>" + f.class + "</p>" +
                "</div>" +
                "<div class='flight-price'>" +
                "<h3>₹" + f.price + "</h3>" +
                "<a href='booking.html'><button>Book Now</button></a>" +
                "</div>" +
                "</div>";

            flightResults.innerHTML = flightResults.innerHTML + cardHTML;
        }
    }
}
