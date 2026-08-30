
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
    { id: 321, airline: "Air France", from: "Mumbai", to: "Paris", price: 145000, class: "First Class" },

    // ---------- PREMIUM ECONOMY ----------
    { id: 401, airline: "Air India", from: "New Delhi", to: "Jaipur", price: 4200, class: "Premium Economy" },
    { id: 402, airline: "IndiGo", from: "New Delhi", to: "Jaipur", price: 4000, class: "Premium Economy" },
    { id: 403, airline: "Vistara", from: "New Delhi", to: "Jaipur", price: 4300, class: "Premium Economy" },

{ id: 404, airline: "Air India", from: "New Delhi", to: "Chandigarh", price: 3800, class: "Premium Economy" },
{ id: 405, airline: "IndiGo", from: "New Delhi", to: "Chandigarh", price: 3600, class: "Premium Economy" },
{ id: 406, airline: "SpiceJet", from: "New Delhi", to: "Chandigarh", price: 3700, class: "Premium Economy" },

{ id: 407, airline: "Air India", from: "New Delhi", to: "Lucknow", price: 4100, class: "Premium Economy" },
{ id: 408, airline: "IndiGo", from: "New Delhi", to: "Lucknow", price: 3900, class: "Premium Economy" },

{ id: 409, airline: "Air India", from: "New Delhi", to: "Amritsar", price: 4300, class: "Premium Economy" },
{ id: 410, airline: "IndiGo", from: "New Delhi", to: "Amritsar", price: 4100, class: "Premium Economy" },
{ id: 411, airline: "SpiceJet", from: "New Delhi", to: "Amritsar", price: 4200, class: "Premium Economy" },

{ id: 412, airline: "Air India", from: "New Delhi", to: "Kolkata", price: 5800, class: "Premium Economy" },
{ id: 413, airline: "IndiGo", from: "New Delhi", to: "Kolkata", price: 5600, class: "Premium Economy" },
{ id: 414, airline: "Vistara", from: "New Delhi", to: "Kolkata", price: 5900, class: "Premium Economy" },

{ id: 415, airline: "Air India", from: "New Delhi", to: "Chennai", price: 6800, class: "Premium Economy" },
{ id: 416, airline: "IndiGo", from: "New Delhi", to: "Chennai", price: 6600, class: "Premium Economy" },
{ id: 417, airline: "Vistara", from: "New Delhi", to: "Chennai", price: 6900, class: "Premium Economy" },

{ id: 418, airline: "Air India", from: "New Delhi", to: "Ahmedabad", price: 5200, class: "Premium Economy" },
{ id: 419, airline: "IndiGo", from: "New Delhi", to: "Ahmedabad", price: 5000, class: "Premium Economy" },
{ id: 420, airline: "SpiceJet", from: "New Delhi", to: "Ahmedabad", price: 5100, class: "Premium Economy" },

{ id: 421, airline: "Air India", from: "New Delhi", to: "Pune", price: 5900, class: "Premium Economy" },
{ id: 422, airline: "IndiGo", from: "New Delhi", to: "Pune", price: 5700, class: "Premium Economy" },
{ id: 423, airline: "Vistara", from: "New Delhi", to: "Pune", price: 6000, class: "Premium Economy" },

{ id: 424, airline: "Air India", from: "Mumbai", to: "Jaipur", price: 4500, class: "Premium Economy" },
{ id: 425, airline: "IndiGo", from: "Mumbai", to: "Jaipur", price: 4300, class: "Premium Economy" },

{ id: 426, airline: "Air India", from: "Mumbai", to: "Chandigarh", price: 4900, class: "Premium Economy" },
{ id: 427, airline: "IndiGo", from: "Mumbai", to: "Chandigarh", price: 4700, class: "Premium Economy" },

{ id: 428, airline: "Air India", from: "Mumbai", to: "Kolkata", price: 6200, class: "Premium Economy" },
{ id: 429, airline: "IndiGo", from: "Mumbai", to: "Kolkata", price: 6000, class: "Premium Economy" },
{ id: 430, airline: "Vistara", from: "Mumbai", to: "Kolkata", price: 6300, class: "Premium Economy" },

{ id: 431, airline: "Air India", from: "Mumbai", to: "Chennai", price: 7200, class: "Premium Economy" },
{ id: 432, airline: "IndiGo", from: "Mumbai", to: "Chennai", price: 7000, class: "Premium Economy" },

{ id: 433, airline: "Air India", from: "Mumbai", to: "Ahmedabad", price: 4200, class: "Premium Economy" },
{ id: 434, airline: "IndiGo", from: "Mumbai", to: "Ahmedabad", price: 4000, class: "Premium Economy" },

{ id: 435, airline: "Air India", from: "Mumbai", to: "Pune", price: 3500, class: "Premium Economy" },
{ id: 436, airline: "IndiGo", from: "Mumbai", to: "Pune", price: 3300, class: "Premium Economy" },

{ id: 437, airline: "Air India", from: "Bangalore", to: "Mumbai", price: 5100, class: "Premium Economy" },
{ id: 438, airline: "IndiGo", from: "Bangalore", to: "Mumbai", price: 4900, class: "Premium Economy" },
{ id: 439, airline: "Vistara", from: "Bangalore", to: "Mumbai", price: 5200, class: "Premium Economy" },

{ id: 440, airline: "Air India", from: "Bangalore", to: "New Delhi", price: 7300, class: "Premium Economy" },
{ id: 441, airline: "IndiGo", from: "Bangalore", to: "New Delhi", price: 7100, class: "Premium Economy" },

{ id: 442, airline: "Air India", from: "Bangalore", to: "Kolkata", price: 6400, class: "Premium Economy" },
{ id: 443, airline: "IndiGo", from: "Bangalore", to: "Kolkata", price: 6200, class: "Premium Economy" },

{ id: 444, airline: "Air India", from: "Bangalore", to: "Chennai", price: 3200, class: "Premium Economy" },
{ id: 445, airline: "IndiGo", from: "Bangalore", to: "Chennai", price: 3000, class: "Premium Economy" },

{ id: 446, airline: "Air India", from: "Bangalore", to: "Hyderabad", price: 3600, class: "Premium Economy" },
{ id: 447, airline: "IndiGo", from: "Bangalore", to: "Hyderabad", price: 3400, class: "Premium Economy" },

{ id: 448, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 27000, class: "Premium Economy" },
{ id: 449, airline: "Air India", from: "Mumbai", to: "Dubai", price: 26000, class: "Premium Economy" },

{ id: 450, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 47000, class: "Premium Economy" },
{ id: 451, airline: "Scoot", from: "Mumbai", to: "Singapore", price: 39000, class: "Premium Economy" },

{ id: 452, airline: "British Airways", from: "Mumbai", to: "London", price: 57000, class: "Premium Economy" },
{ id: 453, airline: "Virgin Atlantic", from: "Mumbai", to: "London", price: 58000, class: "Premium Economy" },

{ id: 454, airline: "Air France", from: "Mumbai", to: "Paris", price: 55000, class: "Premium Economy" },
{ id: 455, airline: "Lufthansa", from: "Mumbai", to: "Paris", price: 54000, class: "Premium Economy" },

{ id: 456, airline: "Emirates", from: "Bangalore", to: "Dubai", price: 28000, class: "Premium Economy" },
{ id: 457, airline: "Singapore Airlines", from: "Bangalore", to: "Singapore", price: 48000, class: "Premium Economy" },

{ id: 458, airline: "British Airways", from: "Kolkata", to: "London", price: 59000, class: "Premium Economy" },
{ id: 459, airline: "Air India", from: "Kolkata", to: "Dubai", price: 26000, class: "Premium Economy" },

{ id: 460, airline: "Thai Airways", from: "New Delhi", to: "Bangkok", price: 32000, class: "Premium Economy" },
{ id: 461, airline: "IndiGo", from: "New Delhi", to: "Bangkok", price: 30000, class: "Premium Economy" },

{ id: 462, airline: "Malaysia Airlines", from: "New Delhi", to: "Kuala Lumpur", price: 34000, class: "Premium Economy" },
{ id: 463, airline: "Air India", from: "New Delhi", to: "Kuala Lumpur", price: 35000, class: "Premium Economy" },

{ id: 464, airline: "Qatar Airways", from: "New Delhi", to: "Doha", price: 29000, class: "Premium Economy" },
{ id: 465, airline: "IndiGo", from: "New Delhi", to: "Doha", price: 27000, class: "Premium Economy" },

// ---------- BUSINESS ----------
{ id: 501, airline: "Air India", from: "New Delhi", to: "Jaipur", price: 6500, class: "Business" },
{ id: 502, airline: "IndiGo", from: "New Delhi", to: "Jaipur", price: 6300, class: "Business" },
{ id: 503, airline: "Vistara", from: "New Delhi", to: "Jaipur", price: 6600, class: "Business" },

{ id: 504, airline: "Air India", from: "New Delhi", to: "Chandigarh", price: 6000, class: "Business" },
{ id: 505, airline: "IndiGo", from: "New Delhi", to: "Chandigarh", price: 5800, class: "Business" },

{ id: 506, airline: "Air India", from: "New Delhi", to: "Lucknow", price: 6400, class: "Business" },
{ id: 507, airline: "IndiGo", from: "New Delhi", to: "Lucknow", price: 6200, class: "Business" },

{ id: 508, airline: "Air India", from: "New Delhi", to: "Amritsar", price: 6700, class: "Business" },
{ id: 509, airline: "IndiGo", from: "New Delhi", to: "Amritsar", price: 6500, class: "Business" },

{ id: 510, airline: "Air India", from: "New Delhi", to: "Kolkata", price: 9000, class: "Business" },
{ id: 511, airline: "IndiGo", from: "New Delhi", to: "Kolkata", price: 8800, class: "Business" },
{ id: 512, airline: "Vistara", from: "New Delhi", to: "Kolkata", price: 9200, class: "Business" },

{ id: 513, airline: "Air India", from: "New Delhi", to: "Chennai", price: 10500, class: "Business" },
{ id: 514, airline: "IndiGo", from: "New Delhi", to: "Chennai", price: 10300, class: "Business" },
{ id: 515, airline: "Vistara", from: "New Delhi", to: "Chennai", price: 10700, class: "Business" },

{ id: 516, airline: "Air India", from: "New Delhi", to: "Ahmedabad", price: 8000, class: "Business" },
{ id: 517, airline: "IndiGo", from: "New Delhi", to: "Ahmedabad", price: 7800, class: "Business" },

{ id: 518, airline: "Air India", from: "New Delhi", to: "Pune", price: 9200, class: "Business" },
{ id: 519, airline: "IndiGo", from: "New Delhi", to: "Pune", price: 9000, class: "Business" },
{ id: 520, airline: "Vistara", from: "New Delhi", to: "Pune", price: 9300, class: "Business" },

{ id: 521, airline: "Air India", from: "Mumbai", to: "Jaipur", price: 6800, class: "Business" },
{ id: 522, airline: "IndiGo", from: "Mumbai", to: "Jaipur", price: 6600, class: "Business" },

{ id: 523, airline: "Air India", from: "Mumbai", to: "Chandigarh", price: 7200, class: "Business" },
{ id: 524, airline: "IndiGo", from: "Mumbai", to: "Chandigarh", price: 7000, class: "Business" },

{ id: 525, airline: "Air India", from: "Mumbai", to: "Kolkata", price: 9500, class: "Business" },
{ id: 526, airline: "IndiGo", from: "Mumbai", to: "Kolkata", price: 9300, class: "Business" },
{ id: 527, airline: "Vistara", from: "Mumbai", to: "Kolkata", price: 9600, class: "Business" },

{ id: 528, airline: "Air India", from: "Mumbai", to: "Chennai", price: 11000, class: "Business" },
{ id: 529, airline: "IndiGo", from: "Mumbai", to: "Chennai", price: 10800, class: "Business" },

{ id: 530, airline: "Air India", from: "Mumbai", to: "Ahmedabad", price: 6500, class: "Business" },
{ id: 531, airline: "IndiGo", from: "Mumbai", to: "Ahmedabad", price: 6300, class: "Business" },

{ id: 532, airline: "Air India", from: "Mumbai", to: "Pune", price: 5500, class: "Business" },
{ id: 533, airline: "IndiGo", from: "Mumbai", to: "Pune", price: 5300, class: "Business" },

{ id: 534, airline: "Air India", from: "Bangalore", to: "Mumbai", price: 7800, class: "Business" },
{ id: 535, airline: "IndiGo", from: "Bangalore", to: "Mumbai", price: 7600, class: "Business" },
{ id: 536, airline: "Vistara", from: "Bangalore", to: "Mumbai", price: 7900, class: "Business" },

{ id: 537, airline: "Air India", from: "Bangalore", to: "New Delhi", price: 11000, class: "Business" },
{ id: 538, airline: "IndiGo", from: "Bangalore", to: "New Delhi", price: 10800, class: "Business" },

{ id: 539, airline: "Air India", from: "Bangalore", to: "Kolkata", price: 9800, class: "Business" },
{ id: 540, airline: "IndiGo", from: "Bangalore", to: "Kolkata", price: 9600, class: "Business" },

{ id: 541, airline: "Air India", from: "Bangalore", to: "Chennai", price: 5000, class: "Business" },
{ id: 542, airline: "IndiGo", from: "Bangalore", to: "Chennai", price: 4800, class: "Business" },

{ id: 543, airline: "Air India", from: "Bangalore", to: "Hyderabad", price: 5600, class: "Business" },
{ id: 544, airline: "IndiGo", from: "Bangalore", to: "Hyderabad", price: 5400, class: "Business" },

{ id: 545, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 42000, class: "Business" },
{ id: 546, airline: "Air India", from: "Mumbai", to: "Dubai", price: 40000, class: "Business" },

{ id: 547, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 74000, class: "Business" },
{ id: 548, airline: "Scoot", from: "Mumbai", to: "Singapore", price: 63000, class: "Business" },

{ id: 549, airline: "British Airways", from: "Mumbai", to: "London", price: 91000, class: "Business" },
{ id: 550, airline: "Virgin Atlantic", from: "Mumbai", to: "London", price: 93000, class: "Business" },

{ id: 551, airline: "Air France", from: "Mumbai", to: "Paris", price: 88000, class: "Business" },
{ id: 552, airline: "Lufthansa", from: "Mumbai", to: "Paris", price: 86000, class: "Business" },

{ id: 553, airline: "Emirates", from: "Bangalore", to: "Dubai", price: 43000, class: "Business" },
{ id: 554, airline: "Singapore Airlines", from: "Bangalore", to: "Singapore", price: 75000, class: "Business" },

{ id: 555, airline: "British Airways", from: "Kolkata", to: "London", price: 94000, class: "Business" },
{ id: 556, airline: "Air India", from: "Kolkata", to: "Dubai", price: 41000, class: "Business" },

{ id: 557, airline: "Thai Airways", from: "New Delhi", to: "Bangkok", price: 52000, class: "Business" },
{ id: 558, airline: "IndiGo", from: "New Delhi", to: "Bangkok", price: 49000, class: "Business" },

{ id: 559, airline: "Malaysia Airlines", from: "New Delhi", to: "Kuala Lumpur", price: 56000, class: "Business" },
{ id: 560, airline: "Air India", from: "New Delhi", to: "Kuala Lumpur", price: 57000, class: "Business" },

{ id: 561, airline: "Qatar Airways", from: "New Delhi", to: "Doha", price: 48000, class: "Business" },
{ id: 562, airline: "IndiGo", from: "New Delhi", to: "Doha", price: 45000, class: "Business" },

{ id: 563, airline: "Emirates", from: "New Delhi", to: "New York", price: 120000, class: "Business" },
{ id: 564, airline: "Air India", from: "New Delhi", to: "New York", price: 115000, class: "Business" },

{ id: 565, airline: "Lufthansa", from: "New Delhi", to: "Frankfurt", price: 95000, class: "Business" },
{ id: 566, airline: "Air India", from: "New Delhi", to: "Frankfurt", price: 93000, class: "Business" },

{ id: 567, airline: "Japanese Airlines", from: "New Delhi", to: "Tokyo", price: 105000, class: "Business" },
{ id: 568, airline: "Singapore Airlines", from: "New Delhi", to: "Tokyo", price: 110000, class: "Business" },

// ---------- FIRST CLASS ----------
{ id: 601, airline: "Air India", from: "New Delhi", to: "Mumbai", price: 15500, class: "First Class" },
{ id: 602, airline: "Vistara", from: "New Delhi", to: "Mumbai", price: 16000, class: "First Class" },

{ id: 603, airline: "Air India", from: "New Delhi", to: "Bangalore", price: 17500, class: "First Class" },
{ id: 604, airline: "Vistara", from: "New Delhi", to: "Bangalore", price: 18000, class: "First Class" },

{ id: 605, airline: "Air India", from: "New Delhi", to: "Kolkata", price: 14000, class: "First Class" },
{ id: 606, airline: "Vistara", from: "New Delhi", to: "Kolkata", price: 14500, class: "First Class" },

{ id: 607, airline: "Air India", from: "New Delhi", to: "Chennai", price: 16500, class: "First Class" },
{ id: 608, airline: "Vistara", from: "New Delhi", to: "Chennai", price: 17000, class: "First Class" },

{ id: 609, airline: "Air India", from: "New Delhi", to: "Ahmedabad", price: 12500, class: "First Class" },
{ id: 610, airline: "Vistara", from: "New Delhi", to: "Ahmedabad", price: 13000, class: "First Class" },

{ id: 611, airline: "Air India", from: "New Delhi", to: "Pune", price: 14500, class: "First Class" },
{ id: 612, airline: "Vistara", from: "New Delhi", to: "Pune", price: 15000, class: "First Class" },

{ id: 613, airline: "Air India", from: "Mumbai", to: "New Delhi", price: 15800, class: "First Class" },
{ id: 614, airline: "Vistara", from: "Mumbai", to: "New Delhi", price: 16200, class: "First Class" },

{ id: 615, airline: "Air India", from: "Mumbai", to: "Bangalore", price: 17200, class: "First Class" },
{ id: 616, airline: "Vistara", from: "Mumbai", to: "Bangalore", price: 17600, class: "First Class" },

{ id: 617, airline: "Air India", from: "Mumbai", to: "Kolkata", price: 14200, class: "First Class" },
{ id: 618, airline: "Vistara", from: "Mumbai", to: "Kolkata", price: 14600, class: "First Class" },

{ id: 619, airline: "Air India", from: "Mumbai", to: "Chennai", price: 16800, class: "First Class" },
{ id: 620, airline: "Vistara", from: "Mumbai", to: "Chennai", price: 17200, class: "First Class" },

{ id: 621, airline: "Air India", from: "Bangalore", to: "New Delhi", price: 17800, class: "First Class" },
{ id: 622, airline: "Vistara", from: "Bangalore", to: "New Delhi", price: 18200, class: "First Class" },

{ id: 623, airline: "Air India", from: "Bangalore", to: "Mumbai", price: 16000, class: "First Class" },
{ id: 624, airline: "Vistara", from: "Bangalore", to: "Mumbai", price: 16400, class: "First Class" },

{ id: 625, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 62000, class: "First Class" },
{ id: 626, airline: "Air India", from: "New Delhi", to: "Dubai", price: 60000, class: "First Class" },

{ id: 627, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 63000, class: "First Class" },
{ id: 628, airline: "Air India", from: "Mumbai", to: "Dubai", price: 61000, class: "First Class" },

{ id: 629, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 115000, class: "First Class" },
{ id: 630, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 118000, class: "First Class" },

{ id: 631, airline: "British Airways", from: "New Delhi", to: "London", price: 150000, class: "First Class" },
{ id: 632, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 152000, class: "First Class" },

{ id: 633, airline: "British Airways", from: "Mumbai", to: "London", price: 153000, class: "First Class" },
{ id: 634, airline: "Virgin Atlantic", from: "Mumbai", to: "London", price: 155000, class: "First Class" },

{ id: 635, airline: "Air France", from: "New Delhi", to: "Paris", price: 145000, class: "First Class" },
{ id: 636, airline: "Lufthansa", from: "New Delhi", to: "Paris", price: 143000, class: "First Class" },

{ id: 637, airline: "Air France", from: "Mumbai", to: "Paris", price: 148000, class: "First Class" },
{ id: 638, airline: "Lufthansa", from: "Mumbai", to: "Paris", price: 146000, class: "First Class" },

{ id: 639, airline: "Emirates", from: "New Delhi", to: "New York", price: 190000, class: "First Class" },
{ id: 640, airline: "Air India", from: "New Delhi", to: "New York", price: 185000, class: "First Class" },

{ id: 641, airline: "Emirates", from: "Mumbai", to: "New York", price: 195000, class: "First Class" },

{ id: 642, airline: "Lufthansa", from: "New Delhi", to: "Frankfurt", price: 160000, class: "First Class" },
{ id: 643, airline: "Air India", from: "New Delhi", to: "Frankfurt", price: 158000, class: "First Class" },

{ id: 644, airline: "Japanese Airlines", from: "New Delhi", to: "Tokyo", price: 175000, class: "First Class" },
{ id: 645, airline: "Singapore Airlines", from: "New Delhi", to: "Tokyo", price: 180000, class: "First Class" },

{ id: 646, airline: "Thai Airways", from: "New Delhi", to: "Bangkok", price: 85000, class: "First Class" },
{ id: 647, airline: "Air India", from: "New Delhi", to: "Bangkok", price: 82000, class: "First Class" },

{ id: 648, airline: "Malaysia Airlines", from: "New Delhi", to: "Kuala Lumpur", price: 95000, class: "First Class" },
{ id: 649, airline: "Air India", from: "New Delhi", to: "Kuala Lumpur", price: 93000, class: "First Class" },

{ id: 650, airline: "Qatar Airways", from: "New Delhi", to: "Doha", price: 78000, class: "First Class" },
{ id: 651, airline: "Air India", from: "New Delhi", to: "Doha", price: 76000, class: "First Class" },
    // ECONOMY
{ id: 701, airline: "Air India", from: "New Delhi", to: "Toronto", price: 62000, class: "Economy" },
{ id: 702, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 64000, class: "Economy" },
{ id: 703, airline: "British Airways", from: "New Delhi", to: "London", price: 43000, class: "Economy" },
{ id: 704, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 44500, class: "Economy" },
{ id: 705, airline: "Air India", from: "New Delhi", to: "New York", price: 68000, class: "Economy" },
{ id: 706, airline: "Emirates", from: "New Delhi", to: "New York", price: 70000, class: "Economy" },
{ id: 707, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 52000, class: "Economy" },
{ id: 708, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 54000, class: "Economy" },
{ id: 709, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 3500, class: "Economy" },
{ id: 710, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 3300, class: "Economy" },
{ id: 711, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 45000, class: "Economy" },
{ id: 712, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 44000, class: "Economy" },
{ id: 713, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 65000, class: "Economy" },
{ id: 714, airline: "Air India", from: "New Delhi", to: "Sydney", price: 63000, class: "Economy" },

// PREMIUM ECONOMY
{ id: 715, airline: "Air India", from: "New Delhi", to: "Toronto", price: 76000, class: "Premium Economy" },
{ id: 716, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 78000, class: "Premium Economy" },
{ id: 717, airline: "British Airways", from: "New Delhi", to: "London", price: 56000, class: "Premium Economy" },
{ id: 718, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 57500, class: "Premium Economy" },
{ id: 719, airline: "Air India", from: "New Delhi", to: "New York", price: 82000, class: "Premium Economy" },
{ id: 720, airline: "Emirates", from: "New Delhi", to: "New York", price: 84000, class: "Premium Economy" },
{ id: 721, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 64000, class: "Premium Economy" },
{ id: 722, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 66000, class: "Premium Economy" },
{ id: 723, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 4800, class: "Premium Economy" },
{ id: 724, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 4600, class: "Premium Economy" },
{ id: 725, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 58000, class: "Premium Economy" },
{ id: 726, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 57000, class: "Premium Economy" },
{ id: 727, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 78000, class: "Premium Economy" },
{ id: 728, airline: "Air India", from: "New Delhi", to: "Sydney", price: 76000, class: "Premium Economy" },

// BUSINESS
{ id: 729, airline: "Air India", from: "New Delhi", to: "Toronto", price: 105000, class: "Business" },
{ id: 730, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 108000, class: "Business" },
{ id: 731, airline: "British Airways", from: "New Delhi", to: "London", price: 90000, class: "Business" },
{ id: 732, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 92000, class: "Business" },
{ id: 733, airline: "Air India", from: "New Delhi", to: "New York", price: 115000, class: "Business" },
{ id: 734, airline: "Emirates", from: "New Delhi", to: "New York", price: 120000, class: "Business" },
{ id: 735, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 95000, class: "Business" },
{ id: 736, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 98000, class: "Business" },
{ id: 737, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 7800, class: "Business" },
{ id: 738, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 7500, class: "Business" },
{ id: 739, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 89000, class: "Business" },
{ id: 740, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 88000, class: "Business" },
{ id: 741, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 118000, class: "Business" },
{ id: 742, airline: "Air India", from: "New Delhi", to: "Sydney", price: 114000, class: "Business" },

// FIRST CLASS
{ id: 743, airline: "Air India", from: "New Delhi", to: "Toronto", price: 155000, class: "First Class" },
{ id: 744, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 160000, class: "First Class" },
{ id: 745, airline: "British Airways", from: "New Delhi", to: "London", price: 148000, class: "First Class" },
{ id: 746, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 150000, class: "First Class" },
{ id: 747, airline: "Air India", from: "New Delhi", to: "New York", price: 185000, class: "First Class" },
{ id: 748, airline: "Emirates", from: "New Delhi", to: "New York", price: 190000, class: "First Class" },
{ id: 749, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 175000, class: "First Class" },
{ id: 750, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 180000, class: "First Class" },
{ id: 751, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 11500, class: "First Class" },
{ id: 752, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 11000, class: "First Class" },
{ id: 753, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 145000, class: "First Class" },
{ id: 754, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 142000, class: "First Class" },
{ id: 755, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 195000, class: "First Class" },
{ id: 756, airline: "Air India", from: "New Delhi", to: "Sydney", price: 190000, class: "First Class" },

// A few more from other origins to those cities
{ id: 757, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 65000, class: "Economy" },
{ id: 758, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 79000, class: "Premium Economy" },
{ id: 759, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 110000, class: "Business" },
{ id: 760, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 160000, class: "First Class" },

{ id: 761, airline: "British Airways", from: "Mumbai", to: "London", price: 60000, class: "Economy" },
{ id: 762, airline: "British Airways", from: "Mumbai", to: "London", price: 78000, class: "Premium Economy" },
{ id: 763, airline: "British Airways", from: "Mumbai", to: "London", price: 118000, class: "Business" },
{ id: 764, airline: "British Airways", from: "Mumbai", to: "London", price: 155000, class: "First Class" },

{ id: 765, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 68000, class: "Economy" },
{ id: 766, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 82000, class: "Premium Economy" },
{ id: 767, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 120000, class: "Business" },
{ id: 768, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 190000, class: "First Class" },

{ id: 769, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 54000, class: "Economy" },
{ id: 770, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 66000, class: "Premium Economy" },
{ id: 771, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 98000, class: "Business" },
{ id: 772, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 178000, class: "First Class" },
    // ECONOMY
{ id: 801, airline: "Air India", from: "New Delhi", to: "Toronto", price: 61000, class: "Economy" },
{ id: 802, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 63000, class: "Economy" },
{ id: 803, airline: "Lufthansa", from: "New Delhi", to: "Toronto", price: 65000, class: "Economy" },

{ id: 804, airline: "British Airways", from: "New Delhi", to: "London", price: 42000, class: "Economy" },
{ id: 805, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 43500, class: "Economy" },
{ id: 806, airline: "Air India", from: "New Delhi", to: "London", price: 44000, class: "Economy" },

{ id: 807, airline: "Air India", from: "New Delhi", to: "New York", price: 67000, class: "Economy" },
{ id: 808, airline: "Emirates", from: "New Delhi", to: "New York", price: 69000, class: "Economy" },
{ id: 809, airline: "Lufthansa", from: "New Delhi", to: "New York", price: 71000, class: "Economy" },

{ id: 810, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 51000, class: "Economy" },
{ id: 811, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 53000, class: "Economy" },
{ id: 812, airline: "Singapore Airlines", from: "New Delhi", to: "Tokyo", price: 55000, class: "Economy" },

{ id: 813, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 3400, class: "Economy" },
{ id: 814, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 3200, class: "Economy" },
{ id: 815, airline: "SpiceJet", from: "Amritsar", to: "New Delhi", price: 3300, class: "Economy" },

{ id: 816, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 44000, class: "Economy" },
{ id: 817, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 43000, class: "Economy" },
{ id: 818, airline: "Air France", from: "New Delhi", to: "Brussels", price: 45000, class: "Economy" },

{ id: 819, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 64000, class: "Economy" },
{ id: 820, airline: "Air India", from: "New Delhi", to: "Sydney", price: 62000, class: "Economy" },
{ id: 821, airline: "Singapore Airlines", from: "New Delhi", to: "Sydney", price: 66000, class: "Economy" },

// PREMIUM ECONOMY
{ id: 822, airline: "Air India", from: "New Delhi", to: "Toronto", price: 75000, class: "Premium Economy" },
{ id: 823, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 77000, class: "Premium Economy" },
{ id: 824, airline: "Lufthansa", from: "New Delhi", to: "Toronto", price: 79000, class: "Premium Economy" },

{ id: 825, airline: "British Airways", from: "New Delhi", to: "London", price: 55000, class: "Premium Economy" },
{ id: 826, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 56500, class: "Premium Economy" },
{ id: 827, airline: "Air India", from: "New Delhi", to: "London", price: 57000, class: "Premium Economy" },

{ id: 828, airline: "Air India", from: "New Delhi", to: "New York", price: 81000, class: "Premium Economy" },
{ id: 829, airline: "Emirates", from: "New Delhi", to: "New York", price: 83000, class: "Premium Economy" },
{ id: 830, airline: "Lufthansa", from: "New Delhi", to: "New York", price: 85000, class: "Premium Economy" },

{ id: 831, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 63000, class: "Premium Economy" },
{ id: 832, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 65000, class: "Premium Economy" },
{ id: 833, airline: "Singapore Airlines", from: "New Delhi", to: "Tokyo", price: 67000, class: "Premium Economy" },

{ id: 834, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 4700, class: "Premium Economy" },
{ id: 835, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 4500, class: "Premium Economy" },
{ id: 836, airline: "Vistara", from: "Amritsar", to: "New Delhi", price: 4800, class: "Premium Economy" },

{ id: 837, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 57000, class: "Premium Economy" },
{ id: 838, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 56000, class: "Premium Economy" },
{ id: 839, airline: "Air France", from: "New Delhi", to: "Brussels", price: 58000, class: "Premium Economy" },

{ id: 840, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 77000, class: "Premium Economy" },
{ id: 841, airline: "Air India", from: "New Delhi", to: "Sydney", price: 75000, class: "Premium Economy" },
{ id: 842, airline: "Singapore Airlines", from: "New Delhi", to: "Sydney", price: 79000, class: "Premium Economy" },

// BUSINESS
{ id: 843, airline: "Air India", from: "New Delhi", to: "Toronto", price: 103000, class: "Business" },
{ id: 844, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 106000, class: "Business" },
{ id: 845, airline: "Lufthansa", from: "New Delhi", to: "Toronto", price: 109000, class: "Business" },

{ id: 846, airline: "British Airways", from: "New Delhi", to: "London", price: 88000, class: "Business" },
{ id: 847, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 90000, class: "Business" },
{ id: 848, airline: "Air India", from: "New Delhi", to: "London", price: 92000, class: "Business" },

{ id: 849, airline: "Air India", from: "New Delhi", to: "New York", price: 112000, class: "Business" },
{ id: 850, airline: "Emirates", from: "New Delhi", to: "New York", price: 118000, class: "Business" },
{ id: 851, airline: "Lufthansa", from: "New Delhi", to: "New York", price: 122000, class: "Business" },

{ id: 852, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 93000, class: "Business" },
{ id: 853, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 96000, class: "Business" },
{ id: 854, airline: "Singapore Airlines", from: "New Delhi", to: "Tokyo", price: 99000, class: "Business" },

{ id: 855, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 7600, class: "Business" },
{ id: 856, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 7300, class: "Business" },
{ id: 857, airline: "Vistara", from: "Amritsar", to: "New Delhi", price: 7800, class: "Business" },

{ id: 858, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 87000, class: "Business" },
{ id: 859, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 86000, class: "Business" },
{ id: 860, airline: "Air France", from: "New Delhi", to: "Brussels", price: 89000, class: "Business" },

{ id: 861, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 115000, class: "Business" },
{ id: 862, airline: "Air India", from: "New Delhi", to: "Sydney", price: 112000, class: "Business" },
{ id: 863, airline: "Singapore Airlines", from: "New Delhi", to: "Sydney", price: 118000, class: "Business" },

// FIRST CLASS
{ id: 864, airline: "Air India", from: "New Delhi", to: "Toronto", price: 152000, class: "First Class" },
{ id: 865, airline: "Air Canada", from: "New Delhi", to: "Toronto", price: 158000, class: "First Class" },
{ id: 866, airline: "Lufthansa", from: "New Delhi", to: "Toronto", price: 162000, class: "First Class" },

{ id: 867, airline: "British Airways", from: "New Delhi", to: "London", price: 146000, class: "First Class" },
{ id: 868, airline: "Virgin Atlantic", from: "New Delhi", to: "London", price: 149000, class: "First Class" },
{ id: 869, airline: "Air India", from: "New Delhi", to: "London", price: 152000, class: "First Class" },

{ id: 870, airline: "Air India", from: "New Delhi", to: "New York", price: 180000, class: "First Class" },
{ id: 871, airline: "Emirates", from: "New Delhi", to: "New York", price: 188000, class: "First Class" },
{ id: 872, airline: "Lufthansa", from: "New Delhi", to: "New York", price: 195000, class: "First Class" },

{ id: 873, airline: "Air India", from: "New Delhi", to: "Tokyo", price: 170000, class: "First Class" },
{ id: 874, airline: "Japan Airlines", from: "New Delhi", to: "Tokyo", price: 176000, class: "First Class" },
{ id: 875, airline: "Singapore Airlines", from: "New Delhi", to: "Tokyo", price: 182000, class: "First Class" },

{ id: 876, airline: "Air India", from: "Amritsar", to: "New Delhi", price: 11200, class: "First Class" },
{ id: 877, airline: "IndiGo", from: "Amritsar", to: "New Delhi", price: 10800, class: "First Class" },
{ id: 878, airline: "Vistara", from: "Amritsar", to: "New Delhi", price: 11500, class: "First Class" },

{ id: 879, airline: "Brussels Airlines", from: "New Delhi", to: "Brussels", price: 140000, class: "First Class" },
{ id: 880, airline: "Lufthansa", from: "New Delhi", to: "Brussels", price: 138000, class: "First Class" },
{ id: 881, airline: "Air France", from: "New Delhi", to: "Brussels", price: 143000, class: "First Class" },

{ id: 882, airline: "Qantas", from: "New Delhi", to: "Sydney", price: 188000, class: "First Class" },
{ id: 883, airline: "Air India", from: "New Delhi", to: "Sydney", price: 185000, class: "First Class" },
{ id: 884, airline: "Singapore Airlines", from: "New Delhi", to: "Sydney", price: 192000, class: "First Class" },

// From other Indian cities to these international destinations (all classes)

// Mumbai to Toronto, London, New York, Tokyo, Brussels, Sydney
{ id: 885, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 64000, class: "Economy" },
{ id: 886, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 78000, class: "Premium Economy" },
{ id: 887, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 108000, class: "Business" },
{ id: 888, airline: "Air Canada", from: "Mumbai", to: "Toronto", price: 158000, class: "First Class" },

{ id: 889, airline: "British Airways", from: "Mumbai", to: "London", price: 45000, class: "Economy" },
{ id: 890, airline: "British Airways", from: "Mumbai", to: "London", price: 58000, class: "Premium Economy" },
{ id: 891, airline: "British Airways", from: "Mumbai", to: "London", price: 92000, class: "Business" },
{ id: 892, airline: "British Airways", from: "Mumbai", to: "London", price: 150000, class: "First Class" },

{ id: 893, airline: "Emirates", from: "Mumbai", to: "New York", price: 72000, class: "Economy" },
{ id: 894, airline: "Emirates", from: "Mumbai", to: "New York", price: 86000, class: "Premium Economy" },
{ id: 895, airline: "Emirates", from: "Mumbai", to: "New York", price: 122000, class: "Business" },
{ id: 896, airline: "Emirates", from: "Mumbai", to: "New York", price: 190000, class: "First Class" },

{ id: 897, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 55000, class: "Economy" },
{ id: 898, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 68000, class: "Premium Economy" },
{ id: 899, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 98000, class: "Business" },
{ id: 900, airline: "Japan Airlines", from: "Mumbai", to: "Tokyo", price: 178000, class: "First Class" },

{ id: 901, airline: "Lufthansa", from: "Mumbai", to: "Brussels", price: 46000, class: "Economy" },
{ id: 902, airline: "Lufthansa", from: "Mumbai", to: "Brussels", price: 59000, class: "Premium Economy" },
{ id: 903, airline: "Lufthansa", from: "Mumbai", to: "Brussels", price: 89000, class: "Business" },
{ id: 904, airline: "Lufthansa", from: "Mumbai", to: "Brussels", price: 145000, class: "First Class" },

{ id: 905, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 67000, class: "Economy" },
{ id: 906, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 80000, class: "Premium Economy" },
{ id: 907, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 118000, class: "Business" },
{ id: 908, airline: "Qantas", from: "Mumbai", to: "Sydney", price: 188000, class: "First Class" },

// Bangalore to London, New York, Tokyo, Sydney
{ id: 909, airline: "British Airways", from: "Bangalore", to: "London", price: 48000, class: "Economy" },
{ id: 910, airline: "British Airways", from: "Bangalore", to: "London", price: 60000, class: "Premium Economy" },
{ id: 911, airline: "British Airways", from: "Bangalore", to: "London", price: 95000, class: "Business" },
{ id: 912, airline: "British Airways", from: "Bangalore", to: "London", price: 152000, class: "First Class" },

{ id: 913, airline: "Emirates", from: "Bangalore", to: "New York", price: 74000, class: "Economy" },
{ id: 914, airline: "Emirates", from: "Bangalore", to: "New York", price: 88000, class: "Premium Economy" },
{ id: 915, airline: "Emirates", from: "Bangalore", to: "New York", price: 125000, class: "Business" },
{ id: 916, airline: "Emirates", from: "Bangalore", to: "New York", price: 192000, class: "First Class" },

{ id: 917, airline: "Singapore Airlines", from: "Bangalore", to: "Tokyo", price: 58000, class: "Economy" },
{ id: 918, airline: "Singapore Airlines", from: "Bangalore", to: "Tokyo", price: 70000, class: "Premium Economy" },
{ id: 919, airline: "Singapore Airlines", from: "Bangalore", to: "Tokyo", price: 100000, class: "Business" },
{ id: 920, airline: "Singapore Airlines", from: "Bangalore", to: "Tokyo", price: 180000, class: "First Class" },

{ id: 921, airline: "Qantas", from: "Bangalore", to: "Sydney", price: 69000, class: "Economy" },
{ id: 922, airline: "Qantas", from: "Bangalore", to: "Sydney", price: 82000, class: "Premium Economy" },
{ id: 923, airline: "Qantas", from: "Bangalore", to: "Sydney", price: 120000, class: "Business" },
{ id: 924, airline: "Qantas", from: "Bangalore", to: "Sydney", price: 190000, class: "First Class" },

// Kolkata to London, Toronto, Sydney
{ id: 925, airline: "British Airways", from: "Kolkata", to: "London", price: 46000, class: "Economy" },
{ id: 926, airline: "British Airways", from: "Kolkata", to: "London", price: 59000, class: "Premium Economy" },
{ id: 927, airline: "British Airways", from: "Kolkata", to: "London", price: 93000, class: "Business" },
{ id: 928, airline: "British Airways", from: "Kolkata", to: "London", price: 151000, class: "First Class" },

{ id: 929, airline: "Air Canada", from: "Kolkata", to: "Toronto", price: 66000, class: "Economy" },
{ id: 930, airline: "Air Canada", from: "Kolkata", to: "Toronto", price: 80000, class: "Premium Economy" },
{ id: 931, airline: "Air Canada", from: "Kolkata", to: "Toronto", price: 110000, class: "Business" },
{ id: 932, airline: "Air Canada", from: "Kolkata", to: "Toronto", price: 160000, class: "First Class" },

{ id: 933, airline: "Qantas", from: "Kolkata", to: "Sydney", price: 70000, class: "Economy" },
{ id: 934, airline: "Qantas", from: "Kolkata", to: "Sydney", price: 83000, class: "Premium Economy" },
{ id: 935, airline: "Qantas", from: "Kolkata", to: "Sydney", price: 122000, class: "Business" },
{ id: 936, airline: "Qantas", from: "Kolkata", to: "Sydney", price: 192000, class: "First Class" },
// PREMIUM ECONOMY
{ id: 801, airline: "Air India", from: "New Delhi", to: "San Francisco", price: 88000, class: "Premium Economy" },
{ id: 802, airline: "United Airlines", from: "New Delhi", to: "San Francisco", price: 90000, class: "Premium Economy" },
{ id: 803, airline: "Lufthansa", from: "New Delhi", to: "Munich", price: 58000, class: "Premium Economy" },
{ id: 804, airline: "Air India", from: "New Delhi", to: "Munich", price: 57000, class: "Premium Economy" },
{ id: 805, airline: "KLM", from: "New Delhi", to: "Amsterdam", price: 59000, class: "Premium Economy" },
{ id: 806, airline: "Air India", from: "New Delhi", to: "Amsterdam", price: 58000, class: "Premium Economy" },
{ id: 807, airline: "Swiss", from: "New Delhi", to: "Zurich", price: 60000, class: "Premium Economy" },
{ id: 808, airline: "Air India", from: "New Delhi", to: "Zurich", price: 59000, class: "Premium Economy" },
{ id: 809, airline: "Turkish Airlines", from: "New Delhi", to: "Istanbul", price: 49000, class: "Premium Economy" },
{ id: 810, airline: "IndiGo", from: "New Delhi", to: "Istanbul", price: 48000, class: "Premium Economy" },
{ id: 811, airline: "Etihad", from: "New Delhi", to: "Abu Dhabi", price: 27000, class: "Premium Economy" },
{ id: 812, airline: "Air India", from: "New Delhi", to: "Abu Dhabi", price: 26000, class: "Premium Economy" },
{ id: 813, airline: "Oman Air", from: "New Delhi", to: "Muscat", price: 28000, class: "Premium Economy" },
{ id: 814, airline: "Air India", from: "New Delhi", to: "Muscat", price: 27000, class: "Premium Economy" },
{ id: 815, airline: "SriLankan Airlines", from: "New Delhi", to: "Colombo", price: 24000, class: "Premium Economy" },
{ id: 816, airline: "IndiGo", from: "New Delhi", to: "Colombo", price: 23000, class: "Premium Economy" },
{ id: 817, airline: "Biman Bangladesh", from: "New Delhi", to: "Dhaka", price: 22000, class: "Premium Economy" },
{ id: 818, airline: "Air India", from: "New Delhi", to: "Dhaka", price: 21000, class: "Premium Economy" },
{ id: 819, airline: "Thai Airways", from: "New Delhi", to: "Phuket", price: 36000, class: "Premium Economy" },
{ id: 820, airline: "IndiGo", from: "New Delhi", to: "Phuket", price: 34000, class: "Premium Economy" },
{ id: 821, airline: "Vietnam Airlines", from: "New Delhi", to: "Ho Chi Minh City", price: 38000, class: "Premium Economy" },
{ id: 822, airline: "IndiGo", from: "New Delhi", to: "Ho Chi Minh City", price: 36000, class: "Premium Economy" },
{ id: 823, airline: "Malaysia Airlines", from: "New Delhi", to: "Penang", price: 40000, class: "Premium Economy" },
{ id: 824, airline: "Air India", from: "New Delhi", to: "Penang", price: 39000, class: "Premium Economy" },
{ id: 825, airline: "Air India", from: "Mumbai", to: "San Francisco", price: 89000, class: "Premium Economy" },
{ id: 826, airline: "United Airlines", from: "Mumbai", to: "San Francisco", price: 91000, class: "Premium Economy" },
{ id: 827, airline: "Air India", from: "Mumbai", to: "Munich", price: 59000, class: "Premium Economy" },
{ id: 828, airline: "Lufthansa", from: "Mumbai", to: "Munich", price: 60000, class: "Premium Economy" },
{ id: 829, airline: "KLM", from: "Mumbai", to: "Amsterdam", price: 61000, class: "Premium Economy" },
{ id: 830, airline: "Air India", from: "Mumbai", to: "Amsterdam", price: 60000, class: "Premium Economy" },
{ id: 831, airline: "Etihad", from: "Mumbai", to: "Abu Dhabi", price: 26000, class: "Premium Economy" },
{ id: 832, airline: "Air India", from: "Mumbai", to: "Abu Dhabi", price: 25000, class: "Premium Economy" },
{ id: 833, airline: "Oman Air", from: "Mumbai", to: "Muscat", price: 27000, class: "Premium Economy" },
{ id: 834, airline: "Air India", from: "Mumbai", to: "Muscat", price: 26000, class: "Premium Economy" },
{ id: 835, airline: "SriLankan Airlines", from: "Mumbai", to: "Colombo", price: 25000, class: "Premium Economy" },
{ id: 836, airline: "IndiGo", from: "Mumbai", to: "Colombo", price: 24000, class: "Premium Economy" },
{ id: 837, airline: "Air India", from: "Bangalore", to: "San Francisco", price: 90000, class: "Premium Economy" },
{ id: 838, airline: "United Airlines", from: "Bangalore", to: "San Francisco", price: 92000, class: "Premium Economy" },
{ id: 839, airline: "Lufthansa", from: "Bangalore", to: "Frankfurt", price: 62000, class: "Premium Economy" },
{ id: 840, airline: "Air India", from: "Bangalore", to: "Frankfurt", price: 61000, class: "Premium Economy" },

// BUSINESS
{ id: 841, airline: "Air India", from: "New Delhi", to: "San Francisco", price: 125000, class: "Business" },
{ id: 842, airline: "United Airlines", from: "New Delhi", to: "San Francisco", price: 128000, class: "Business" },
{ id: 843, airline: "Lufthansa", from: "New Delhi", to: "Munich", price: 85000, class: "Business" },
{ id: 844, airline: "Air India", from: "New Delhi", to: "Munich", price: 83000, class: "Business" },
{ id: 845, airline: "KLM", from: "New Delhi", to: "Amsterdam", price: 87000, class: "Business" },
{ id: 846, airline: "Air India", from: "New Delhi", to: "Amsterdam", price: 85000, class: "Business" },
{ id: 847, airline: "Swiss", from: "New Delhi", to: "Zurich", price: 88000, class: "Business" },
{ id: 848, airline: "Air India", from: "New Delhi", to: "Zurich", price: 86000, class: "Business" },
{ id: 849, airline: "Turkish Airlines", from: "New Delhi", to: "Istanbul", price: 68000, class: "Business" },
{ id: 850, airline: "IndiGo", from: "New Delhi", to: "Istanbul", price: 66000, class: "Business" },
{ id: 851, airline: "Etihad", from: "New Delhi", to: "Abu Dhabi", price: 42000, class: "Business" },
{ id: 852, airline: "Air India", from: "New Delhi", to: "Abu Dhabi", price: 40000, class: "Business" },
{ id: 853, airline: "Oman Air", from: "New Delhi", to: "Muscat", price: 44000, class: "Business" },
{ id: 854, airline: "Air India", from: "New Delhi", to: "Muscat", price: 42000, class: "Business" },
{ id: 855, airline: "SriLankan Airlines", from: "New Delhi", to: "Colombo", price: 36000, class: "Business" },
{ id: 856, airline: "IndiGo", from: "New Delhi", to: "Colombo", price: 34000, class: "Business" },
{ id: 857, airline: "Biman Bangladesh", from: "New Delhi", to: "Dhaka", price: 32000, class: "Business" },
{ id: 858, airline: "Air India", from: "New Delhi", to: "Dhaka", price: 30000, class: "Business" },
{ id: 859, airline: "Thai Airways", from: "New Delhi", to: "Phuket", price: 56000, class: "Business" },
{ id: 860, airline: "IndiGo", from: "New Delhi", to: "Phuket", price: 54000, class: "Business" },
{ id: 861, airline: "Vietnam Airlines", from: "New Delhi", to: "Ho Chi Minh City", price: 58000, class: "Business" },
{ id: 862, airline: "IndiGo", from: "New Delhi", to: "Ho Chi Minh City", price: 56000, class: "Business" },
{ id: 863, airline: "Malaysia Airlines", from: "New Delhi", to: "Penang", price: 60000, class: "Business" },
{ id: 864, airline: "Air India", from: "New Delhi", to: "Penang", price: 58000, class: "Business" },
{ id: 865, airline: "Air India", from: "Mumbai", to: "San Francisco", price: 126000, class: "Business" },
{ id: 866, airline: "United Airlines", from: "Mumbai", to: "San Francisco", price: 129000, class: "Business" },
{ id: 867, airline: "Air India", from: "Mumbai", to: "Munich", price: 86000, class: "Business" },
{ id: 868, airline: "Lufthansa", from: "Mumbai", to: "Munich", price: 87000, class: "Business" },
{ id: 869, airline: "KLM", from: "Mumbai", to: "Amsterdam", price: 88000, class: "Business" },
{ id: 870, airline: "Air India", from: "Mumbai", to: "Amsterdam", price: 86000, class: "Business" },
{ id: 871, airline: "Etihad", from: "Mumbai", to: "Abu Dhabi", price: 41000, class: "Business" },
{ id: 872, airline: "Air India", from: "Mumbai", to: "Abu Dhabi", price: 39000, class: "Business" },
{ id: 873, airline: "Oman Air", from: "Mumbai", to: "Muscat", price: 43000, class: "Business" },
{ id: 874, airline: "Air India", from: "Mumbai", to: "Muscat", price: 41000, class: "Business" },
{ id: 875, airline: "SriLankan Airlines", from: "Mumbai", to: "Colombo", price: 37000, class: "Business" },
{ id: 876, airline: "IndiGo", from: "Mumbai", to: "Colombo", price: 35000, class: "Business" },
{ id: 877, airline: "Air India", from: "Bangalore", to: "San Francisco", price: 127000, class: "Business" },
{ id: 878, airline: "United Airlines", from: "Bangalore", to: "San Francisco", price: 130000, class: "Business" },
{ id: 879, airline: "Lufthansa", from: "Bangalore", to: "Frankfurt", price: 90000, class: "Business" },
{ id: 880, airline: "Air India", from: "Bangalore", to: "Frankfurt", price: 88000, class: "Business" },

// FIRST CLASS
{ id: 881, airline: "Air India", from: "New Delhi", to: "San Francisco", price: 195000, class: "First Class" },
{ id: 882, airline: "United Airlines", from: "New Delhi", to: "San Francisco", price: 200000, class: "First Class" },
{ id: 883, airline: "Lufthansa", from: "New Delhi", to: "Munich", price: 140000, class: "First Class" },
{ id: 884, airline: "Air India", from: "New Delhi", to: "Munich", price: 138000, class: "First Class" },
{ id: 885, airline: "KLM", from: "New Delhi", to: "Amsterdam", price: 145000, class: "First Class" },
{ id: 886, airline: "Air India", from: "New Delhi", to: "Amsterdam", price: 142000, class: "First Class" },
{ id: 887, airline: "Swiss", from: "New Delhi", to: "Zurich", price: 148000, class: "First Class" },
{ id: 888, airline: "Air India", from: "New Delhi", to: "Zurich", price: 145000, class: "First Class" },
{ id: 889, airline: "Turkish Airlines", from: "New Delhi", to: "Istanbul", price: 110000, class: "First Class" },
{ id: 890, airline: "IndiGo", from: "New Delhi", to: "Istanbul", price: 105000, class: "First Class" },
{ id: 891, airline: "Etihad", from: "New Delhi", to: "Abu Dhabi", price: 68000, class: "First Class" },
{ id: 892, airline: "Air India", from: "New Delhi", to: "Abu Dhabi", price: 65000, class: "First Class" },
{ id: 893, airline: "Oman Air", from: "New Delhi", to: "Muscat", price: 72000, class: "First Class" },
{ id: 894, airline: "Air India", from: "New Delhi", to: "Muscat", price: 70000, class: "First Class" },
{ id: 895, airline: "SriLankan Airlines", from: "New Delhi", to: "Colombo", price: 58000, class: "First Class" },
{ id: 896, airline: "IndiGo", from: "New Delhi", to: "Colombo", price: 55000, class: "First Class" },
{ id: 897, airline: "Biman Bangladesh", from: "New Delhi", to: "Dhaka", price: 52000, class: "First Class" },
{ id: 898, airline: "Air India", from: "New Delhi", to: "Dhaka", price: 50000, class: "First Class" },
{ id: 899, airline: "Thai Airways", from: "New Delhi", to: "Phuket", price: 92000, class: "First Class" },
{ id: 900, airline: "IndiGo", from: "New Delhi", to: "Phuket", price: 88000, class: "First Class" },
{ id: 901, airline: "Vietnam Airlines", from: "New Delhi", to: "Ho Chi Minh City", price: 95000, class: "First Class" },
{ id: 902, airline: "IndiGo", from: "New Delhi", to: "Ho Chi Minh City", price: 90000, class: "First Class" },
{ id: 903, airline: "Malaysia Airlines", from: "New Delhi", to: "Penang", price: 98000, class: "First Class" },
{ id: 904, airline: "Air India", from: "New Delhi", to: "Penang", price: 95000, class: "First Class" },
{ id: 905, airline: "Air India", from: "Mumbai", to: "San Francisco", price: 198000, class: "First Class" },
{ id: 906, airline: "United Airlines", from: "Mumbai", to: "San Francisco", price: 205000, class: "First Class" },
{ id: 907, airline: "Air India", from: "Mumbai", to: "Munich", price: 142000, class: "First Class" },
{ id: 908, airline: "Lufthansa", from: "Mumbai", to: "Munich", price: 144000, class: "First Class" },
{ id: 909, airline: "KLM", from: "Mumbai", to: "Amsterdam", price: 147000, class: "First Class" },
{ id: 910, airline: "Air India", from: "Mumbai", to: "Amsterdam", price: 145000, class: "First Class" },
{ id: 911, airline: "Etihad", from: "Mumbai", to: "Abu Dhabi", price: 67000, class: "First Class" },
{ id: 912, airline: "Air India", from: "Mumbai", to: "Abu Dhabi", price: 64000, class: "First Class" },
{ id: 913, airline: "Oman Air", from: "Mumbai", to: "Muscat", price: 71000, class: "First Class" },
{ id: 914, airline: "Air India", from: "Mumbai", to: "Muscat", price: 69000, class: "First Class" },
{ id: 915, airline: "SriLankan Airlines", from: "Mumbai", to: "Colombo", price: 59000, class: "First Class" },
{ id: 916, airline: "IndiGo", from: "Mumbai", to: "Colombo", price: 56000, class: "First Class" },
{ id: 917, airline: "Air India", from: "Bangalore", to: "San Francisco", price: 200000, class: "First Class" },
{ id: 918, airline: "United Airlines", from: "Bangalore", to: "San Francisco", price: 208000, class: "First Class" },
{ id: 919, airline: "Lufthansa", from: "Bangalore", to: "Frankfurt", price: 150000, class: "First Class" },
{ id: 920, airline: "Air India", from: "Bangalore", to: "Frankfurt", price: 148000, class: "First Class" },
    // PREMIUM ECONOMY
{ id: 921, airline: "Air India", from: "New Delhi", to: "Seattle", price: 92000, class: "Premium Economy" },
{ id: 922, airline: "United Airlines", from: "New Delhi", to: "Seattle", price: 94000, class: "Premium Economy" },
{ id: 923, airline: "Air France", from: "New Delhi", to: "Nice", price: 62000, class: "Premium Economy" },
{ id: 924, airline: "Lufthansa", from: "New Delhi", to: "Nice", price: 61000, class: "Premium Economy" },
{ id: 925, airline: "British Airways", from: "New Delhi", to: "Manchester", price: 59000, class: "Premium Economy" },
{ id: 926, airline: "Virgin Atlantic", from: "New Delhi", to: "Manchester", price: 60000, class: "Premium Economy" },
{ id: 927, airline: "Qatar Airways", from: "New Delhi", to: "Doha", price: 31000, class: "Premium Economy" },
{ id: 928, airline: "IndiGo", from: "New Delhi", to: "Doha", price: 29000, class: "Premium Economy" },
{ id: 929, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 28000, class: "Premium Economy" },
{ id: 930, airline: "Air India", from: "New Delhi", to: "Dubai", price: 27000, class: "Premium Economy" },
{ id: 931, airline: "Etihad", from: "New Delhi", to: "Abu Dhabi", price: 28000, class: "Premium Economy" },
{ id: 932, airline: "Air India", from: "New Delhi", to: "Abu Dhabi", price: 27000, class: "Premium Economy" },
{ id: 933, airline: "Thai Airways", from: "New Delhi", to: "Bangkok", price: 34000, class: "Premium Economy" },
{ id: 934, airline: "IndiGo", from: "New Delhi", to: "Bangkok", price: 32000, class: "Premium Economy" },
{ id: 935, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 48000, class: "Premium Economy" },
{ id: 936, airline: "Scoot", from: "New Delhi", to: "Singapore", price: 40000, class: "Premium Economy" },
{ id: 937, airline: "Malaysia Airlines", from: "New Delhi", to: "Kuala Lumpur", price: 36000, class: "Premium Economy" },
{ id: 938, airline: "Air India", from: "New Delhi", to: "Kuala Lumpur", price: 35000, class: "Premium Economy" },
{ id: 939, airline: "Cathay Pacific", from: "New Delhi", to: "Hong Kong", price: 44000, class: "Premium Economy" },
{ id: 940, airline: "Air India", from: "New Delhi", to: "Hong Kong", price: 43000, class: "Premium Economy" },
{ id: 941, airline: "Air India", from: "Mumbai", to: "Seattle", price: 93000, class: "Premium Economy" },
{ id: 942, airline: "United Airlines", from: "Mumbai", to: "Seattle", price: 95000, class: "Premium Economy" },
{ id: 943, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 27000, class: "Premium Economy" },
{ id: 944, airline: "Air India", from: "Mumbai", to: "Dubai", price: 26000, class: "Premium Economy" },
{ id: 945, airline: "Etihad", from: "Mumbai", to: "Abu Dhabi", price: 27000, class: "Premium Economy" },
{ id: 946, airline: "Air India", from: "Mumbai", to: "Abu Dhabi", price: 26000, class: "Premium Economy" },
{ id: 947, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 49000, class: "Premium Economy" },
{ id: 948, airline: "Scoot", from: "Mumbai", to: "Singapore", price: 41000, class: "Premium Economy" },
{ id: 949, airline: "Cathay Pacific", from: "Mumbai", to: "Hong Kong", price: 45000, class: "Premium Economy" },
{ id: 950, airline: "Air India", from: "Mumbai", to: "Hong Kong", price: 44000, class: "Premium Economy" },
{ id: 951, airline: "Air India", from: "Bangalore", to: "Singapore", price: 50000, class: "Premium Economy" },
{ id: 952, airline: "Singapore Airlines", from: "Bangalore", to: "Singapore", price: 51000, class: "Premium Economy" },
{ id: 953, airline: "Air India", from: "Bangalore", to: "Dubai", price: 30000, class: "Premium Economy" },
{ id: 954, airline: "Emirates", from: "Bangalore", to: "Dubai", price: 31000, class: "Premium Economy" },
{ id: 955, airline: "Air India", from: "Bangalore", to: "London", price: 60000, class: "Premium Economy" },
{ id: 956, airline: "British Airways", from: "Bangalore", to: "London", price: 61000, class: "Premium Economy" },

// BUSINESS
{ id: 957, airline: "Air India", from: "New Delhi", to: "Seattle", price: 130000, class: "Business" },
{ id: 958, airline: "United Airlines", from: "New Delhi", to: "Seattle", price: 133000, class: "Business" },
{ id: 959, airline: "Air France", from: "New Delhi", to: "Nice", price: 88000, class: "Business" },
{ id: 960, airline: "Lufthansa", from: "New Delhi", to: "Nice", price: 87000, class: "Business" },
{ id: 961, airline: "British Airways", from: "New Delhi", to: "Manchester", price: 86000, class: "Business" },
{ id: 962, airline: "Virgin Atlantic", from: "New Delhi", to: "Manchester", price: 87000, class: "Business" },
{ id: 963, airline: "Qatar Airways", from: "New Delhi", to: "Doha", price: 50000, class: "Business" },
{ id: 964, airline: "IndiGo", from: "New Delhi", to: "Doha", price: 47000, class: "Business" },
{ id: 965, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 43000, class: "Business" },
{ id: 966, airline: "Air India", from: "New Delhi", to: "Dubai", price: 41000, class: "Business" },
{ id: 967, airline: "Etihad", from: "New Delhi", to: "Abu Dhabi", price: 44000, class: "Business" },
{ id: 968, airline: "Air India", from: "New Delhi", to: "Abu Dhabi", price: 42000, class: "Business" },
{ id: 969, airline: "Thai Airways", from: "New Delhi", to: "Bangkok", price: 54000, class: "Business" },
{ id: 970, airline: "IndiGo", from: "New Delhi", to: "Bangkok", price: 51000, class: "Business" },
{ id: 971, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 76000, class: "Business" },
{ id: 972, airline: "Scoot", from: "New Delhi", to: "Singapore", price: 64000, class: "Business" },
{ id: 973, airline: "Malaysia Airlines", from: "New Delhi", to: "Kuala Lumpur", price: 58000, class: "Business" },
{ id: 974, airline: "Air India", from: "New Delhi", to: "Kuala Lumpur", price: 56000, class: "Business" },
{ id: 975, airline: "Cathay Pacific", from: "New Delhi", to: "Hong Kong", price: 70000, class: "Business" },
{ id: 976, airline: "Air India", from: "New Delhi", to: "Hong Kong", price: 68000, class: "Business" },
{ id: 977, airline: "Air India", from: "Mumbai", to: "Seattle", price: 131000, class: "Business" },
{ id: 978, airline: "United Airlines", from: "Mumbai", to: "Seattle", price: 134000, class: "Business" },
{ id: 979, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 42000, class: "Business" },
{ id: 980, airline: "Air India", from: "Mumbai", to: "Dubai", price: 40000, class: "Business" },
{ id: 981, airline: "Etihad", from: "Mumbai", to: "Abu Dhabi", price: 43000, class: "Business" },
{ id: 982, airline: "Air India", from: "Mumbai", to: "Abu Dhabi", price: 41000, class: "Business" },
{ id: 983, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 77000, class: "Business" },
{ id: 984, airline: "Scoot", from: "Mumbai", to: "Singapore", price: 65000, class: "Business" },
{ id: 985, airline: "Cathay Pacific", from: "Mumbai", to: "Hong Kong", price: 71000, class: "Business" },
{ id: 986, airline: "Air India", from: "Mumbai", to: "Hong Kong", price: 69000, class: "Business" },
{ id: 987, airline: "Air India", from: "Bangalore", to: "Singapore", price: 78000, class: "Business" },
{ id: 988, airline: "Singapore Airlines", from: "Bangalore", to: "Singapore", price: 79000, class: "Business" },
{ id: 989, airline: "Air India", from: "Bangalore", to: "Dubai", price: 46000, class: "Business" },
{ id: 990, airline: "Emirates", from: "Bangalore", to: "Dubai", price: 47000, class: "Business" },
{ id: 991, airline: "Air India", from: "Bangalore", to: "London", price: 92000, class: "Business" },
{ id: 992, airline: "British Airways", from: "Bangalore", to: "London", price: 94000, class: "Business" },

// FIRST CLASS
{ id: 993, airline: "Air India", from: "New Delhi", to: "Seattle", price: 205000, class: "First Class" },
{ id: 994, airline: "United Airlines", from: "New Delhi", to: "Seattle", price: 210000, class: "First Class" },
{ id: 995, airline: "Air France", from: "New Delhi", to: "Nice", price: 145000, class: "First Class" },
{ id: 996, airline: "Lufthansa", from: "New Delhi", to: "Nice", price: 143000, class: "First Class" },
{ id: 997, airline: "British Airways", from: "New Delhi", to: "Manchester", price: 140000, class: "First Class" },
{ id: 998, airline: "Virgin Atlantic", from: "New Delhi", to: "Manchester", price: 142000, class: "First Class" },
{ id: 999, airline: "Qatar Airways", from: "New Delhi", to: "Doha", price: 82000, class: "First Class" },
{ id: 1000, airline: "IndiGo", from: "New Delhi", to: "Doha", price: 78000, class: "First Class" },
{ id: 1001, airline: "Emirates", from: "New Delhi", to: "Dubai", price: 70000, class: "First Class" },
{ id: 1002, airline: "Air India", from: "New Delhi", to: "Dubai", price: 67000, class: "First Class" },
{ id: 1003, airline: "Etihad", from: "New Delhi", to: "Abu Dhabi", price: 72000, class: "First Class" },
{ id: 1004, airline: "Air India", from: "New Delhi", to: "Abu Dhabi", price: 69000, class: "First Class" },
{ id: 1005, airline: "Thai Airways", from: "New Delhi", to: "Bangkok", price: 95000, class: "First Class" },
{ id: 1006, airline: "IndiGo", from: "New Delhi", to: "Bangkok", price: 90000, class: "First Class" },
{ id: 1007, airline: "Singapore Airlines", from: "New Delhi", to: "Singapore", price: 120000, class: "First Class" },
{ id: 1008, airline: "Scoot", from: "New Delhi", to: "Singapore", price: 110000, class: "First Class" },
{ id: 1009, airline: "Malaysia Airlines", from: "New Delhi", to: "Kuala Lumpur", price: 98000, class: "First Class" },
{ id: 1010, airline: "Air India", from: "New Delhi", to: "Kuala Lumpur", price: 95000, class: "First Class" },
{ id: 1011, airline: "Cathay Pacific", from: "New Delhi", to: "Hong Kong", price: 115000, class: "First Class" },
{ id: 1012, airline: "Air India", from: "New Delhi", to: "Hong Kong", price: 112000, class: "First Class" },
{ id: 1013, airline: "Air India", from: "Mumbai", to: "Seattle", price: 208000, class: "First Class" },
{ id: 1014, airline: "United Airlines", from: "Mumbai", to: "Seattle", price: 215000, class: "First Class" },
{ id: 1015, airline: "Emirates", from: "Mumbai", to: "Dubai", price: 69000, class: "First Class" },
{ id: 1016, airline: "Air India", from: "Mumbai", to: "Dubai", price: 66000, class: "First Class" },
{ id: 1017, airline: "Etihad", from: "Mumbai", to: "Abu Dhabi", price: 71000, class: "First Class" },
{ id: 1018, airline: "Air India", from: "Mumbai", to: "Abu Dhabi", price: 68000, class: "First Class" },
{ id: 1019, airline: "Singapore Airlines", from: "Mumbai", to: "Singapore", price: 122000, class: "First Class" },
{ id: 1020, airline: "Scoot", from: "Mumbai", to: "Singapore", price: 112000, class: "First Class" },
{ id: 1021, airline: "Cathay Pacific", from: "Mumbai", to: "Hong Kong", price: 117000, class: "First Class" },
{ id: 1022, airline: "Air India", from: "Mumbai", to: "Hong Kong", price: 114000, class: "First Class" },
{ id: 1023, airline: "Air India", from: "Bangalore", to: "Singapore", price: 125000, class: "First Class" },
{ id: 1024, airline: "Singapore Airlines", from: "Bangalore", to: "Singapore", price: 128000, class: "First Class" },
{ id: 1025, airline: "Air India", from: "Bangalore", to: "Dubai", price: 75000, class: "First Class" },
{ id: 1026, airline: "Emirates", from: "Bangalore", to: "Dubai", price: 77000, class: "First Class" },
{ id: 1027, airline: "Air India", from: "Bangalore", to: "London", price: 150000, class: "First Class" },
{ id: 1028, airline: "British Airways", from: "Bangalore", to: "London", price: 153000, class: "First Class" }
];



