var scores = 	[60, 50, 60, 58, 54, 54,
				 58, 50, 52, 54, 48, 69,
				 34, 55, 51, 52, 44, 51,
				 69, 64, 66, 55, 52, 61,
				 46, 31, 57, 52, 44, 18,
				 41, 53, 55, 61, 51, 44];
var highestScore = 0;
var bestSolutions = [];
var i=0;
while (i < scores.length){
	console.log("Bubble solution #" + i + " score: " + scores[i]);
	i++;
	if (highestScore < scores[i]) {
		highestScore = scores[i]
	}
}
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highestScore);

for(var i2 = 0; i2 < scores.length; i2++) {
	if (scores[i2] == highestScore) {
		bestSolutions.push(i2);
	}
}

console.log("Highest bubble score: " + bestSolutions);