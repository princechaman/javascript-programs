let age = 20;
let showTiming = "2 AM";

let price;
if (age < 12) {
    price = (showTiming === "11 AM" || showTiming === "2 PM") ? 6 : 8;
} else if (age >= 12 && age <= 60) {
    price = (showTiming === "11 AM" || showTiming === "2 PM") ? 10 : 12; 
} else {
    price = (showTiming === "11 AM" || showTiming === "2 PM") ? 4 : 5; 
}

console.log("Price "+price);
