var bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get standard values
        var name = document.getElementById("fullname").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var from = document.getElementById("from").value;
        var to = document.getElementById("to").value;

        // Basic validation
        if (name === "" || email === "" || from === "" || to === "") {
            alert("Please fill all required fields.");
            return;
        }

        // Generate a unique ID using the current time in milliseconds
        var timeStamp = Date.now();
        var bookingId = "AB" + timeStamp;

        // Save standard data
        localStorage.setItem("bookName", name);
        localStorage.setItem("bookEmail", email);
        localStorage.setItem("bookPhone", phone);
        localStorage.setItem("bookFrom", from);
        localStorage.setItem("bookTo", to);
        localStorage.setItem("bookId", bookingId);

        // Get the rest of the values from the booking form
        var date = document.getElementById("depart-date").value;
        var returnDate = document.getElementById("return-date").value;
        var passengers = document.getElementById("passengers").value;
        var flightClass = document.getElementById("class").value;
        var baggage = document.getElementById("baggage").value;

        // Save them to localStorage so confirmation.js can find them
        localStorage.setItem("bookDate", date);
        localStorage.setItem("bookReturn", returnDate);
        localStorage.setItem("bookPassengers", passengers);
        localStorage.setItem("bookClass", flightClass);
        localStorage.setItem("bookBaggage", baggage);

        // Redirect to confirmation
        window.location.href = "confirmation.html";
    });
}