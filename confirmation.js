var confirmPage = document.querySelector(".confirm-page");

if (confirmPage) {
    // Inject the saved data into the HTML spans
    document.getElementById("c-name").textContent = localStorage.getItem("bookName");
    document.getElementById("c-email").textContent = localStorage.getItem("bookEmail");
    document.getElementById("c-phone").textContent = localStorage.getItem("bookPhone");
    document.getElementById("c-from").textContent = localStorage.getItem("bookFrom");
    document.getElementById("c-to").textContent = localStorage.getItem("bookTo");
    document.getElementById("c-id").textContent = localStorage.getItem("bookId");
    document.getElementById("c-date").textContent = localStorage.getItem("bookDate");
    document.getElementById("c-passengers").textContent = localStorage.getItem("bookPassengers");
    document.getElementById("c-class").textContent = localStorage.getItem("bookClass");
    document.getElementById("c-return").textContent = localStorage.getItem("bookReturn");
    document.getElementById("c-baggage").textContent = localStorage.getItem("bookBaggage");
}
