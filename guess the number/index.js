const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let exitGame = false;
let highscore = null;

while (exitGame === false) {     // while (!exitGame) {
	let numberToGuess = getRandomNumber();
	let continueGame = true;
	let tries = 0;

	console.log("numberToGuess:", numberToGuess);
    while (continueGame) {
        let guess = umber(prompt("Pleas guess a number between 1-10"))
        
    }
}
