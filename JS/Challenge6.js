// your task 1 
function calcTip (bill){
    return (bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2);
}

var tip=calcTip(100);
console.log("Tip for 100 is " + tip);

//your task 2
let bills = [125, 555, 44];

//your task 3 
var tips = bills.map(calcTip)

//your task 4 
var totals = bills.map((bill, index) => bill + tips[index]);

console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);