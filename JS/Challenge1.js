function BMI(mass, height) {
    return mass / (height * height)
}
let MarkMass = 95 
let MarkHeight = 1.88  

var MarkBMI = BMI(MarkMass, MarkHeight)
console.log("Mark's BMI: " + MarkBMI);

let JohnMass = 85 
let JonhHeight = 1.76

var JohnBMI = BMI(JohnMass, JonhHeight)
console.log("John's BMI: " + JohnBMI);

var markHigherBMI = MarkBMI > JohnBMI
console.log(markHigherBMI);