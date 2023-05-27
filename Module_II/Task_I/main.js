// rose
let rosePrice = 8;
let roseQuantity = 70;
const roseValue = rosePrice * roseQuantity;

// lily
let lilyPrice = 10;
let lilyQuantity = 50;
const lilyValue = lilyPrice * lilyQuantity;

// tulip
let tulipPrice = 2;
let tulipQuantity = 120;
const tulipValue = tulipPrice * tulipQuantity;

// total value
const totalValue = roseValue + lilyValue + tulipValue;

console.log(
    "Rose - unit price: " + rosePrice + ", quantity: " + roseQuantity + ", value: " + roseValue +
    "\nLily - unit price: " + lilyPrice + ", quantity: " + lilyQuantity + ", value: " + lilyValue +
    "\nTulip - unit price: " + tulipPrice + ", quantity: " + tulipQuantity + ", value: " + tulipValue +
    "\nTotal: " + totalValue
    )
