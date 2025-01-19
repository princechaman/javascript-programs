let petrol = 10;
let pricePerLiter = 104;
let costPrice = petrol*pricePerLiter;
let sellPerLiter = 120;

let profitPerLiter = sellPerLiter - pricePerLiter;
let totalProfit = profitPerLiter * petrol;

let profitPercentage = (totalProfit/costPrice)*100;

console.log("Petrol : "+petrol);
console.log("Price Per Liter : "+pricePerLiter);
console.log("Cost Price : "+costPrice);
console.log("Selling Price Per Liter : "+sellPerLiter);
console.log("Profit Per Liter: "+profitPerLiter);
console.log("Total Profit : "+totalProfit);
console.log("Profit Percentage : "+profitPercentage.toFixed(2)+"%");