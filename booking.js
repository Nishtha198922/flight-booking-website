// Wait for the webpage to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {

    // --- 1. GET ROUTE DATA FROM LOCAL STORAGE ---
    // Read the cities the user searched for. 
    // If they skipped the search page somehow, default to New Delhi -> Mumbai.
    let fromCity = localStorage.getItem("searchFrom");
    let toCity = localStorage.getItem("searchTo");
    let flightDate = localStorage.getItem("searchDate");

    if (!fromCity) { fromCity = "New Delhi"; }
    if (!toCity) { toCity = "Mumbai"; }
    if (!flightDate) { flightDate = "30 July 2026"; }

    // Capitalize the first letters just to make it look neat (e.g., "mumbai" -> "Mumbai")
    fromCity = fromCity.charAt(0).toUpperCase() + fromCity.slice(1);
    toCity = toCity.charAt(0).toUpperCase() + toCity.slice(1);

    // --- 2. UPDATE THE HTML SCREEN ---
    // Inject the route and date into the left-side summary card
    document.getElementById("summary-route").textContent = fromCity + " ➔ " + toCity;
    document.getElementById("summary-date").textContent = flightDate;

    // (We are setting default text here since Airline/Class weren't saved in the previous steps)
    document.getElementById("summary-airline").textContent = "IndiGo";
    document.getElementById("summary-class").textContent = "Economy";


    // --- 3. PRICING & MATH LOGIC ---
    // Set up our basic costs
    let baseFare = 4899;
    let taxes = 150;
    let surcharges = 249;
    let convenienceFee = 0; // 0 because the ABNCF promo code is active
    let insuranceCost = 0;  // Starts at 0 until the user clicks the checkbox

    const baseFareElement = document.getElementById("summary-base-fare");
    const totalFareElement = document.getElementById("summary-total-fare");
    const insuranceCheckbox = document.getElementById("insurance");

    // Display the initial base fare on the screen
    baseFareElement.textContent = "₹" + baseFare;

    // This function adds up all the numbers and updates the Total Fare at the bottom
    function updateTotal() {
        let total = baseFare + taxes + surcharges + convenienceFee + insuranceCost;
        totalFareElement.textContent = "₹" + total.toLocaleString('en-IN'); // Adds commas like ₹5,298
    }

    // Run the math once immediately when the page loads
    updateTotal();


    // --- 4. TRAVEL INSURANCE TOGGLE ---
    // Listen for the user clicking the insurance checkbox
    if (insuranceCheckbox) {
        insuranceCheckbox.addEventListener("change", function () {

            if (insuranceCheckbox.checked === true) {
                insuranceCost = 249; // Add cost if checked
            } else {
                insuranceCost = 0;   // Remove cost if unchecked
            }

            // Recalculate the total every time they click it
            updateTotal();
        });
    }

    // --- 5. PROMO CODE BUTTON (Visual Effect) ---
    const promoButton = document.querySelector(".promo-input button");
    const promoSuccessText = document.querySelector(".promo-success");

    // Hide the green success text initially
    if (promoSuccessText) {
        promoSuccessText.style.display = "none";
    }

    // Show the green text when they click "Apply"
    if (promoButton && promoSuccessText) {
        promoButton.addEventListener("click", function () {
            promoSuccessText.style.display = "block";
            alert("Promo Code ABNCF Applied successfully!");
        });
    }
});
