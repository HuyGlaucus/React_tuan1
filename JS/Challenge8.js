//your task 1 
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

//your task 2 
let tips = [];
let totals = [];
function calcTip (bill){
    return (bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2);
}

//your task 3
for (let i = 0; i < bills.length; i++) {
    var tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log("List bill: ", bills);
console.log("List tip: ", tips);
console.log("List total: ", totals);

//your task 4 
function calcAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return (sum / array.length);
}
var avg = calcAverage(totals);
console.log("Average totals: ", avg);