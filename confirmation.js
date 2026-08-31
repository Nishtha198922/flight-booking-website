// Wait for the webpage to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // 1. Generate a random 6-character alphanumeric PNR
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pnr = '';
    for (let i = 0; i < 6; i++) {
        pnr += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Inject the PNR into the HTML
    document.getElementById("pnr-number").textContent = pnr;

    // 2. Read the cities from localStorage
    let fromCity = localStorage.getItem("searchFrom");
    let toCity = localStorage.getItem("searchTo");

    // Provide default fallback values just in case the storage is empty
    if (!fromCity) { fromCity = "New Delhi"; }
    if (!toCity) { toCity = "Mumbai"; }

    // 3. Format the text (Capitalize the first letter, lowercase the rest)
    fromCity = fromCity.charAt(0).toUpperCase() + fromCity.slice(1).toLowerCase();
    toCity = toCity.charAt(0).toUpperCase() + toCity.slice(1).toLowerCase();

    // 4. Update the HTML text with the saved route
    document.getElementById("success-from").textContent = fromCity;
    document.getElementById("success-to").textContent = toCity;

    // Optional: Clear the specific booking data so the next search starts fresh, 
    // but keep it commented out while you are testing!
    // localStorage.removeItem("searchFrom");
    // localStorage.removeItem("searchTo");
    // localStorage.removeItem("searchDate");
});
