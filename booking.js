document.addEventListener("DOMContentLoaded", function () {

    // 1. GET ROUTE & FLIGHT DATA
    // Pull the explicitly clicked flight data, falling back to search data if missing
    let fromCity = localStorage.getItem("selectedFrom") || localStorage.getItem("searchFrom") || "New Delhi";
    let toCity = localStorage.getItem("selectedTo") || localStorage.getItem("searchTo") || "Mumbai";
    let flightDate = localStorage.getItem("searchDate") || "30 July 2026";
    
    let realAirline = localStorage.getItem("selectedAirline") || "Unknown";
    let realClass = localStorage.getItem("selectedClass") || "Economy";
    let realTime = localStorage.getItem("selectedTime") || "Time Not Set";
    let savedPrice = localStorage.getItem("selectedPrice");
    
    // Clean up text formatting
    fromCity = fromCity.charAt(0).toUpperCase() + fromCity.slice(1);
    toCity = toCity.charAt(0).toUpperCase() + toCity.slice(1);

    // 2. UPDATE HTML SUMMARY
    document.getElementById("summary-route").textContent = fromCity + " ➔ " + toCity + " (" + realTime + ")";
    document.getElementById("summary-date").textContent = flightDate;
    document.getElementById("summary-airline").textContent = realAirline;
    document.getElementById("summary-class").textContent = realClass;

    // 3. PRICING LOGIC
    let baseFare = Number(savedPrice) || 0; 
    let taxes = 150;
    let surcharges = 249;
    let convenienceFee = 0; 
    let insuranceCost = 0;

    const baseFareElement = document.getElementById("summary-base-fare");
    const totalFareElement = document.getElementById("summary-total-fare");
    const insuranceCheckbox = document.getElementById("insurance");

    // Push the dynamic base fare to the UI
    if (baseFareElement) {
        baseFareElement.textContent = "₹" + baseFare;
    }

    function updateTotal() {
        let total = baseFare + taxes + surcharges + convenienceFee + insuranceCost;
        if (totalFareElement) {
            totalFareElement.textContent = "₹" + total.toLocaleString('en-IN');
        }
    }

    updateTotal();

    // 4. INSURANCE TOGGLE
    if (insuranceCheckbox) {
        insuranceCheckbox.addEventListener("change", function () {
            insuranceCost = insuranceCheckbox.checked ? 249 : 0;
            updateTotal();
        });
    }

    // 5. PROMO CODE
    const promoButton = document.querySelector(".promo-input button");
    const promoSuccessText = document.querySelector(".promo-success");

    if (promoSuccessText) {
        promoSuccessText.style.display = "none";
    }

    if (promoButton && promoSuccessText) {
        promoButton.addEventListener("click", function () {
            promoSuccessText.style.display = "block";
            alert("Promo Code ABNCF Applied successfully!");
        });
    }

    // 6. FORM VALIDATION & REDIRECT
    // Using querySelector to ensure it targets your primary button whether the ID was set or not
    const payBtn = document.getElementById("pay-btn") || document.querySelector(".btn-primary");
    
    if (payBtn) {
        payBtn.addEventListener("click", function(event) {
            let email = document.querySelector("input[type='email']").value;
            let phone = document.querySelector("input[type='tel']").value;
            
            // Block redirect if inputs are empty
            if (email.trim() === "" || phone.trim() === "") {
                alert("You must fill out your contact details before paying.");
                return; 
            }
            
            window.location.href = "confirmation.html";
        });
    }
});
