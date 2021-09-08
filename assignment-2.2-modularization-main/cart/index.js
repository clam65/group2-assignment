// 1. Import tax-calculator.js using CommonJS
let calculate = require("./tax-calculator");

const cart = [
    {
        item:"Toy",
        price:29.90
    },
    {
        item:"Back Pack",
        price:59.90
    },
    {
        item:"Pencil Case",
        price:12.90
    }
];
let finalprice = 0;
// 2. Use array iteration method to produce an amount payable using the property "price".
for (let i = 0; i < cart.length; i++) {
    finalprice += cart[i]["price"];
}
let total_amount = calculate(finalprice);

console.log(total_amount);

// 3. Invoke tax calculator with the payable amount.