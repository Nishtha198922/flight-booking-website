var searchForm = document.querySelector(".search-form");

if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop the page from reloading

        // Get basic values from the inputs
        var fromCity = document.getElementById("searchFrom").value;
        var toCity = document.getElementById("searchTo").value;
        var date = document.getElementById("searchDate").value;

        // Ensure user typed something
        if (fromCity === "" || toCity === "" || date === "") {
            alert("Please fill From, To, and Departure Date.");
            return;
        }

        // Save to basic local storage so the next page can read it
        localStorage.setItem("searchFrom", fromCity);
        localStorage.setItem("searchTo", toCity);
        localStorage.setItem("searchDate", date);

        // Redirect to flights page
        window.location.href = "flights.html";
    });
}

function goToCity(destinationCity) {
    // 1. Save the destination city
    localStorage.setItem("searchTo", destinationCity);
    
    // 2. Set the "From" city as New Delhi (since the heading says from New Delhi)
    localStorage.setItem("searchFrom", "New Delhi");
    
    // 3. Set a dummy date so your flight page doesn't show "Any" for the date
    localStorage.setItem("searchDate", "2026-08-01"); 

    // 4. Send the user to the flights page
    window.location.href = "flights.html";
}
