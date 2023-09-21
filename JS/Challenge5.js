//your task 1 
function calcAverage (score1, score2, score3){
    var calcAverage=(score1 + score2 + score3) / 3;
    return calcAverage;
} 
    
//your task 2 
var avgDolphinsData1 = calcAverage(44, 23, 71);
var avgKoalasData1 = calcAverage(65, 54, 49);

var avgDolphinsData2 = calcAverage(85, 54, 41);
var avgKoalasData2 = calcAverage(23, 34, 27);

//your task 3 
var checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win (" + avgDolphins + ") vs. " + avgKoalas + ")");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win (" + avgKoalas + ") vs. " + avgDolphins + ")");
    } else {
        console.log("No team wins");
    }
}

//your task 4 
checkWinner(avgDolphinsData1, avgKoalasData1);
checkWinner(avgDolphinsData2, avgKoalasData2);