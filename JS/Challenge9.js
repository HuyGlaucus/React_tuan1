//your task 1
function printForecast(array) {
    let forecaast ='';
    for (let i = 0; i < array.length; i++) {
        forecaast += `${array[i]}C in ${i+1} days ... `;
    }
    console.log(forecaast);
}

//your task 2 
let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

printForecast(data1);
console.log("data1: ", data1);

printForecast(data2);
console.log("data2: ", data2);