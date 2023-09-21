function CalculateEverage(scores) {
    var totalScore = scores.reduce((acc, scores) => acc + scores, 0)
    return totalScore / scores.length;
}
let dolphinScore = [96, 108, 89];
let koalaScore = [88, 91, 100];

//your task 1
var everageDolphinScore = CalculateEverage(dolphinScore);
console.log("everage DolphinScore: " + everageDolphinScore);
var everageKoalaScore = CalculateEverage(koalaScore);
console.log("everage KoalaScore: " + everageKoalaScore);

//your task 2
function compare(everageDolphinScore, everageKoalaScore) {
    if (everageDolphinScore > everageKoalaScore)
        console.log("Dolphin is winner!");
    else if (everageDolphinScore < everageKoalaScore)
        console.log("Koala is winner!");
    else 
        console.log("the two teams drew");
}
compare(everageDolphinScore, everageKoalaScore)

//your task 3, 4
function checkMinmumScore(scores) {
    return scores >= 100;
}
if (everageDolphinScore > everageKoalaScore && checkMinmumScore(everageDolphinScore))
    console.log("Dolphin is winner!");
else if (everageDolphinScore < everageKoalaScore && checkMinmumScore(everageKoalaScore))
    console.log("Koala is winner!");
else if (everageDolphinScore == everageKoalaScore && checkMinmumScore(everageDolphinScore) && checkMinmumScore(everageKoalaScore))
    console.log("The two teams drew");
else 
    console.log("No one wins to the trophy ");