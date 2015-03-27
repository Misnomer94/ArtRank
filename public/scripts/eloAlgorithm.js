function eloAlgorithm(ratingA, ratingB, scoreA, scoreB){ //win = 1, loss = 0, draw = .5
	var k = 32;
	var constant = 400;

	var expectedA = 1/(1 + Math.pow(10, (ratingB - ratingA)/constant)); //calculates expected outcome
	var expectedB = 1 - expectedA;
	
	var newRatingA = ratingA + k*(scoreA - expectedA);
	var newRatingB = ratingB + k*(scoreB - expectedB);

	var array = [newRatingA, newRatingB];
	return array;
}
