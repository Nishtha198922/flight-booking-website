
var allFlights = [
    { id: 1, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 4500, class: "Economy" },
    { id: 2, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 5200, class: "Economy" },
    { id: 3, airline: "IndiGo", from: "New Delhi", to: "Goa", price: 4800, class: "Economy" },
    { id: 5, airline: "Air India", from: "New Delhi", to: "Dubai", price: 18500, class: "Economy" },
    { id: 7, airline: "British Airways", from: "New Delhi", to: "London", price: 42500, class: "Economy" },
    { id: 9, airline: "Air India", from: "Mumbai", to: "New Delhi", price: 4600, class: "Economy" },
    { id: 24, airline: "IndiGo", from: "Mumbai", to: "Bangalore", price: 3200, class: "Economy" },
    { id: 27, airline: "Air India", from: "Mumbai", to: "Dubai", price: 17500, class: "Economy" },
    { id: 10, airline: "IndiGo", from: "New Delhi", to: "Hyderabad", price: 4300, class: "Economy" },
    { id: 11, airline: "Vistara", from: "New Delhi", to: "Mumbai", price: 4700, class: "Economy" },
    { id: 12, airline: "SpiceJet", from: "New Delhi", to: "Goa", price: 4600, class: "Economy" },
    { id: 13, airline: "IndiGo", from: "New Delhi", to: "Bangalore", price: 5100, class: "Economy" },
    { id: 14, airline: "Air India", from: "New Delhi", to: "Hyderabad", price: 4400, class: "Economy" },
    { id: 15, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 19500, class: "Economy" },
    { id: 16, airline: "Qatar Airways", from: "New Delhi", to: "Dubai", price: 18000, class: "Economy" },
    { id: 17, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 34500, class: "Economy" },
    { id: 18, airline: "Scoot", from: "New Delhi", to: "Singapore", price: 28000, class: "Economy" },
    { id: 19, airline: "British Airways", from: "New Delhi", to: "London", price: 43500, class: "Economy" },
    { id: 20, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 44000, class: "Economy" },
    { id: 21, airline: "Air France", from: "New Delhi", to: "Paris", price: 41500, class: "Economy" },
    { id: 22, airline: "Lufthansa", from: "New Delhi", to: "Paris", price: 40500, class: "Economy" },

    { id: 25, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 6200, class: "Premium Economy" },
    { id: 26, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 7100, class: "Premium Economy" },
    { id: 28, airline: "IndiGo", from: "New Delhi", to: "Goa", price: 6800, class: "Premium Economy" },
    { id: 29, airline: "Air India", from: "New Delhi", to: "Dubai", price: 24500, class: "Premium Economy" },
    { id: 30, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 45000, class: "Premium Economy" },
    { id: 31, airline: "British Airways", from: "New Delhi", to: "London", price: 55000, class: "Premium Economy" },
    { id: 32, airline: "Air France", from: "New Delhi", to: "Paris", price: 53000, class: "Premium Economy" },

    { id: 33, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 9500, class: "Business" },
    { id: 34, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 10800, class: "Business" },
    { id: 35, airline: "IndiGo", from: "New Delhi", to: "Goa", price: 10200, class: "Business" },
    { id: 36, airline: "Air India", from: "New Delhi", to: "Dubai", price: 38000, class: "Business" },
    { id: 37, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 72000, class: "Business" },
    { id: 38, airline: "British Airways", from: "New Delhi", to: "London", price: 88000, class: "Business" },
    { id: 39, airline: "Air France", from: "New Delhi", to: "Paris", price: 85000, class: "Business" },

    { id: 40, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 14500, class: "First Class" },
    { id: 41, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 16800, class: "First Class" },
    { id: 42, airline: "Air India", from: "New Delhi", to: "Dubai", price: 58000, class: "First Class" },
    { id: 43, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 110000, class: "First Class" },
    { id: 44, airline: "British Airways", from: "New Delhi", to: "London", price: 145000, class: "First Class" },
    { id: 45, airline: "Air France", from: "New Delhi", to: "Paris", price: 140000, class: "First Class" },

    { id: 46, airline: "IndiGo", from: "Mumbai", to: "New Delhi", price: 4700, class: "Economy" },
    { id: 47, airline: "Air India", from: "Mumbai", to: "New Delhi", price: 4900, class: "Economy" },
    { id: 48, airline: "Vistara", from: "Mumbai", to: "New Delhi", price: 5100, class: "Economy" },
    { id: 49, airline: "IndiGo", from: "Mumbai", to: "Bangalore", price: 3300, class: "Economy" },
    { id: 50, airline: "SpiceJet", from: "Mumbai", to: "Goa", price: 3500, class: "Economy" },
    { id: 51, airline: "IndiGo", from: "Mumbai", to: "Hyderabad", price: 3400, class: "Economy" },
    { id: 52, airline: "Air India", from: "Mumbai", to: "Dubai", price: 17500, class: "Economy" },
    { id: 53, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 19000, class: "Economy" },

    { id: 54, airline: "Air India", from: "Bangalore", to: "New Delhi", price: 5300, class: "Economy" },
    { id: 55, airline: "IndiGo", from: "Bangalore", to: "Mumbai", price: 3200, class: "Economy" },
    { id: 56, airline: "Vistara", from: "Bangalore", to: "Mumbai", price: 3400, class: "Economy" },

    { id: 57, airline: "IndiGo", from: "Goa", to: "New Delhi", price: 4900, class: "Economy" },
    { id: 58, airline: "SpiceJet", from: "Goa", to: "Mumbai", price: 3600, class: "Economy" },

    { id: 59, airline: "Go First", from: "Hyderabad", to: "New Delhi", price: 4400, class: "Economy" },
    { id: 60, airline: "IndiGo", from: "Hyderabad", to: "Mumbai", price: 3500, class: "Economy" },

    { id: 61, airline: "Emirates", from: "Dubai", to: "New Delhi", price: 19500, class: "Economy" },
    { id: 62, airline: "Air India", from: "Dubai", to: "Mumbai", price: 18000, class: "Economy" },

    { id: 63, airline: "Singapore Airlines", from: "Singapore", to: "New Delhi", price: 35500, class: "Economy" },
    { id: 64, airline: "Scoot", from: "Singapore", to: "New Delhi", price: 29000, class: "Economy" },

    { id: 65, airline: "British Airways", from: "London", to: "New Delhi", price: 43500, class: "Economy" },
    { id: 66, airline: "Virgin Atlantic", from: "London", to: "New Delhi", price: 44500, class: "Economy" },

    { id: 67, airline: "Air France", from: "Paris", to: "New Delhi", price: 42500, class: "Economy" },
    { id: 68, airline: "Lufthansa", from: "Paris", to: "New Delhi", price: 41500, class: "Economy" },
    { id: 101, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 6500, class: "Premium Economy" },
    { id: 102, airline: "Vistara", from: "New Delhi", to: "Mumbai", price: 6800, class: "Premium Economy" },
    { id: 103, airline: "IndiGo", from: "New Delhi", to: "Mumbai", price: 6200, class: "Premium Economy" },

    { id: 104, airline: "Air India", from: "New Delhi", to: "Bangalore", price: 7200, class: "Premium Economy" },
    { id: 105, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 7500, class: "Premium Economy" },
    { id: 106, airline: "IndiGo", from: "New Delhi", to: "Bangalore", price: 7000, class: "Premium Economy" },

    { id: 107, airline: "Air India", from: "New Delhi", to: "Goa", price: 6900, class: "Premium Economy" },
    { id: 108, airline: "Vistara", from: "New Delhi", to: "Goa", price: 7100, class: "Premium Economy" },
    { id: 109, airline: "SpiceJet", from: "New Delhi", to: "Goa", price: 6700, class: "Premium Economy" },

    { id: 110, airline: "Air India", from: "New Delhi", to: "Hyderabad", price: 6400, class: "Premium Economy" },
    { id: 111, airline: "IndiGo", from: "New Delhi", to: "Hyderabad", price: 6300, class: "Premium Economy" },

    { id: 112, airline: "Air India", from: "New Delhi", to: "Dubai", price: 25000, class: "Premium Economy" },
    { id: 113, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 26500, class: "Premium Economy" },
    { id: 114, airline: "Qatar Airways", from: "New Delhi", to: "Dubai", price: 24500, class: "Premium Economy" },

    { id: 115, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 46000, class: "Premium Economy" },
    { id: 116, airline: "Scoot", from: "New Delhi", to: "Singapore", price: 38000, class: "Premium Economy" },

    { id: 117, airline: "British Airways", from: "New Delhi", to: "London", price: 56000, class: "Premium Economy" },
    { id: 118, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 57000, class: "Premium Economy" },

    { id: 119, airline: "Air France", from: "New Delhi", to: "Paris", price: 54000, class: "Premium Economy" },
    { id: 120, airline: "Lufthansa", from: "New Delhi", to: "Paris", price: 53000, class: "Premium Economy" },

    { id: 201, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 9800, class: "Business" },
    { id: 202, airline: "Vistara", from: "New Delhi", to: "Mumbai", price: 10200, class: "Business" },
    { id: 203, airline: "IndiGo", from: "New Delhi", to: "Mumbai", price: 9500, class: "Business" },

    { id: 204, airline: "Air India", from: "New Delhi", to: "Bangalore", price: 11000, class: "Business" },
    { id: 205, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 11500, class: "Business" },
    { id: 206, airline: "IndiGo", from: "New Delhi", to: "Bangalore", price: 10800, class: "Business" },

    { id: 207, airline: "Air India", from: "New Delhi", to: "Goa", price: 10500, class: "Business" },
    { id: 208, airline: "Vistara", from: "New Delhi", to: "Goa", price: 10900, class: "Business" },
    { id: 209, airline: "SpiceJet", from: "New Delhi", to: "Goa", price: 10300, class: "Business" },

    { id: 210, airline: "Air India", from: "New Delhi", to: "Hyderabad", price: 9900, class: "Business" },
    { id: 211, airline: "IndiGo", from: "New Delhi", to: "Hyderabad", price: 9700, class: "Business" },

    { id: 212, airline: "Air India", from: "New Delhi", to: "Dubai", price: 39000, class: "Business" },
    { id: 213, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 41000, class: "Business" },
    { id: 214, airline: "Qatar Airways", from: "New Delhi", to: "Dubai", price: 38000, class: "Business" },

    { id: 215, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 73000, class: "Business" },
    { id: 216, airline: "Scoot", from: "New Delhi", to: "Singapore", price: 62000, class: "Business" },

    { id: 217, airline: "British Airways", from: "New Delhi", to: "London", price: 90000, class: "Business" },
    { id: 218, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 92000, class: "Business" },

    { id: 219, airline: "Air France", from: "New Delhi", to: "Paris", price: 87000, class: "Business" },
    { id: 220, airline: "Lufthansa", from: "New Delhi", to: "Paris", price: 85000, class: "Business" },

    { id: 301, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 15000, class: "First Class" },
    { id: 302, airline: "Vistara", from: "New Delhi", to: "Mumbai", price: 15500, class: "First Class" },

    { id: 303, airline: "Air India", from: "New Delhi", to: "Bangalore", price: 17000, class: "First Class" },
    { id: 304, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 17500, class: "First Class" },

    { id: 305, airline: "Air India", from: "New Delhi", to: "Goa", price: 16500, class: "First Class" },
    { id: 306, airline: "Vistara", from: "New Delhi", to: "Goa", price: 16800, class: "First Class" },

    { id: 307, airline: "Air India", from: "New Delhi", to: "Hyderabad", price: 16000, class: "First Class" },

    { id: 308, airline: "Air India", from: "New Delhi", to: "Dubai", price: 59000, class: "First Class" },
    { id: 309, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 62000, class: "First Class" },

    { id: 310, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 112000, class: "First Class" },

    { id: 311, airline: "British Airways", from: "New Delhi", to: "London", price: 148000, class: "First Class" },
    { id: 312, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 150000, class: "First Class" },

    { id: 313, airline: "Air France", from: "New Delhi", to: "Paris", price: 143000, class: "First Class" },
    { id: 314, airline: "Lufthansa", from: "New Delhi", to: "Paris", price: 141000, class: "First Class" },

    { id: 315, airline: "Air India", from: "Mumbai", to: "New Delhi", price: 15200, class: "First Class" },
    { id: 316, airline: "Vistara", from: "Mumbai", to: "New Delhi", price: 15600, class: "First Class" },

    { id: 317, airline: "Air India", from: "Mumbai", to: "Dubai", price: 60000, class: "First Class" },
    { id: 318, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 63000, class: "First Class" },

    { id: 319, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 115000, class: "First Class" },

    { id: 320, airline: "British Airways", from: "Mumbai", to: "London", price: 150000, class: "First Class" },
    { id: 321, airline: "Air France", from: "Mumbai", to: "Paris", price: 145000, class: "First Class" }
];



