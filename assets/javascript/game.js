
// Assign game variables

var gameNumber = Math.floor((Math.random() * 100) + 1);
var userNumber = 0;
var allNumbers = [];
var wins = 0;
var losses = 0;


// Assign random numbers to each jewel

var allJewels = [];


// Add event listener to page load and run gamestart 

document.addEventListener("load", gameStart());

function gameStart() {
	document.getElementById("game-number").innerHTML = gameNumber;
	document.getElementById("game-number").style.fontSize = "xx-large";
	
	document.getElementById("user-number").innerHTML = 0;
	document.getElementById("user-number").style.fontSize = "xx-large";
	
	console.log(userNumber);

	// Assign random numbers to each jewel on page load
	function jewelScores() {
		for (i = 0; i < 4; i++) {
			x = Math.floor((Math.random() * 10) + 1);
			allJewels.push(x);
			y = document.getElementById("jewel-value");
			y.value = allJewels[i];
			y.id = "btn" + i;
		}
	}

	jewelScores();

	console.log(allJewels);

	document.getElementById("scores").innerHTML =
	"<h3>Wins: " + wins + "   " +
	"Losses: " + losses + "</h3>";

}

// Adds number from jewel to the total score

$(".jewel-btn").click(function() {
	console.log($(this).val());
	x = $(this).val();
	var buttonNumber = parseInt(x) + userNumber;
	console.log(buttonNumber);
	userNumber = buttonNumber;
	console.log(userNumber);
	document.getElementById("user-number").innerHTML = userNumber;
	results();
})


// Increment score and alert user to win/loss

function results() {

	if (userNumber === gameNumber) {
		wins++;
		printScores();
		alert("You win");
		endGame();
	}

	else if (userNumber > gameNumber) {
		losses++;
		printScores();
		alert("You lose");
		endGame();
	}

	function printScores() { 
		document.getElementById("scores").innerHTML =
		"<h3>Wins: " + wins + "   " +
		"Losses: " + losses + "</h3>";
	}

}


// Ends game and resets variables

function endGame() {
	console.log("endgame");
	gameNumber = Math.floor((Math.random() * 100) + 1);
	userNumber = 0;
	allNumbers = [];
	allJewels = [];

	for (i = 0; i < 4; i++) {
			x = document.getElementById("btn" + i);
			x.id = "jewel-value";
		}

	gameStart();

}



