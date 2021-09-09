// 1. Import tax-calculator.js using CommonJS
let calculate = require("./tax-calculator");

const cart = [
    {
        item: "Toy",
        price: 29.9,
    },
    {
        item: "Back Pack",
        price: 59.9,
    },
    {
        item: "Pencil Case",
        price: 12.9,
    },
];
let finalprice = 0;
let serviceCharge = 10;
// 2. Use array iteration method to produce an amount payable using the property "price".
for (let i = 0; i < cart.length; i++) {
    finalprice += calculate(cart[i].price, serviceCharge);
}

console.log(parseFloat(finalprice).toFixed(2));

// 3. Invoke tax calculator with the payable amount.
