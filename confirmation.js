document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Generate a random 6-character alphanumeric PNR
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pnr = '';
    for (let i = 0; i < 6; i++) {
        pnr += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    document.getElementById("pnr-number").textContent = pnr;

    // 2. Read the explicitly clicked cities, falling back to search data if missing
    let fromCity = localStorage.getItem("selectedFrom") || localStorage.getItem("searchFrom") || "New Delhi";
    let toCity = localStorage.getItem("selectedTo") || localStorage.getItem("searchTo") || "Mumbai";

    // 3. Format the text (Capitalize the first letter, lowercase the rest)
    fromCity = fromCity.charAt(0).toUpperCase() + fromCity.slice(1).toLowerCase();
    toCity = toCity.charAt(0).toUpperCase() + toCity.slice(1).toLowerCase();

    // 4. Update the HTML text with the exact booked route
    document.getElementById("success-from").textContent = fromCity;
    document.getElementById("success-to").textContent = toCity;
    
    // Clean up local storage so the next booking starts fresh
    localStorage.removeItem("selectedFrom");
    localStorage.removeItem("selectedTo");
    localStorage.removeItem("selectedAirline");
    localStorage.removeItem("selectedPrice");
    localStorage.removeItem("selectedClass");
    localStorage.removeItem("selectedTime");
});
