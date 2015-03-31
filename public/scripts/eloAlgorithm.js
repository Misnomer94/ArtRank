function eloAlgorithm(ratingA, ratingB, scoreA, scoreB){ //win = 1, loss = 0, draw = .5
	var k = 32;
	var constant = 400;

	var expectedA = 1/(1 + Math.pow(10, (ratingB - ratingA)/constant)); //calculates expected outcome for A
	var expectedB = 1/(1 + Math.pow(10, (ratingA - ratingB)/constant)); //calculates expected outcome for B
	
	var newRatingA = ratingA + k*(scoreA - expectedA);
	var newRatingB = ratingB + k*(scoreB - expectedB);

	var array = [newRatingA, newRatingB];
	return array;
}
