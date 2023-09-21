//your task 1 
var mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
}
var john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
}

//your task 2 
mark.calcBMI = function() {
    mark.BMI = mark.mass / mark.height ** 2;
    return mark.BMI;
}
john.calcBMI = function() {
    john.BMI = john.mass / john.height ** 2;
    return john.BMI;
}

//your task 3 
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than
    ${john.fullName}'s (${john.BMI.toFixed(2)})!`);
} else if (mark.BMI < john.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than 
    ${mark.fullName}'s (${mark.BMI.toFixed(2)})!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is equal to 
    ${john.fullName}'s (${john.BMI.toFixed(2)})!`);
}