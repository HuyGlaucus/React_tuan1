var calculateTip = (bill) => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
var printResult = (bill) => {
    var tip = calculateTip(bill);
    var total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, 
    and the total value ${total.toFixed(2)}`);
}

// test 
var bills = [275, 40, 430];
bills.forEach(bill => {
    printResult(bill);
});