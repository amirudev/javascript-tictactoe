var turn = 'X';
var x_array = new Array();
var o_array = new Array();
var player_versus = 'player';
var is_game_over = false;

// Listen what user choose for its enemy
playerChooseLevel = () => {
	player_versus = event.target.attributes.name.value;
	document.getElementById('popup-level').classList.toggle('hide');
}

// Check the board
checkArray = (turn) => {
	console.log(`value of O : ${o_array}`);
	console.log(`value of X : ${x_array}`);
	if (turn.includes('1') && (turn.includes('3') || turn.includes('4'))){
		if (turn.includes('2') && turn.includes('3')){
			return 'win';
		} else if (turn.includes('4') && turn.includes('7')){
			return 'win';
		} else if (turn.includes('5') && turn.includes('9')){
			return 'win';
		} else if (turn.includes('5') && turn.includes('7')){
			return 'win';
		} else if (turn.includes('4') && (turn.includes('5') && turn.includes('6'))){
			return 'win';
		} else if (x_array.length >= 5 || o_array.length >= 5){
			console.log('Goes here 41');
			return 'tie';
		}
	} else if (turn.includes('3') && turn.includes('7')) {
		if (turn.includes('5')){
			return 'win';
		} else if (x_array.length >= 5 || o_array.length >= 5){
			console.log('Goes here 48');
			return 'tie';
		}
	} else if (turn.includes('9') && (turn.includes('3') || turn.includes('7'))){
		if (turn.includes('6') && turn.includes('3')){
			return 'win';
		} else if (turn.includes('8') && turn.includes('7')){
			return 'win';
		} else if (turn.includes('1') && turn.includes('5')){
			return 'win';
		} else if (x_array.length >= 5 || o_array.length >= 5){
			console.log('Goes here 59');
			return 'tie';
		}
	} else if (turn.includes('5')){
		if (turn.includes('2') && turn.includes('8')){
			return 'win';
		} else if (turn.includes('4') && turn.includes('6')){
			return 'win';
		} else if (turn.includes('1') && turn.includes('9')){
			return 'win';
		} else if (turn.includes('3') && turn.includes('7')){
			return 'win';
		} else if (x_array.length >= 5 || o_array.length >= 5){
			console.log('Goes here 72');
			return 'tie';
		}
	} else if (x_array.length >= 5 || o_array.length >= 5){
		console.log('Goes here 76');
		return 'tie';
	} else {
		console.log('Goes here 79');
	}
}

// Generate random number between 0 - 9
numberRandomer = () => {
	return Math.ceil(Math.random()*9);
}

// Check the column is it column empty
getColumnInformation = (column) => {
	let getColumn = document.getElementById(column);
	console.log(getColumn);
	if (getColumn.classList.length == 1) {
		console.log('Success get information');
		return getColumn;
	} else {
		return getColumnInformation(numberRandomer());
	}
}

// Apply AI to the column
columnApplier = (columnInformation) => {
	columnInformation.innerHTML = turn;
	columnInformation.classList.add(`${turn.toLowerCase()}`);
}

// Check matches Array
checkIfPlayerWin = (turn) => {
	console.log(turn);
	let isPlayerWin = checkArray(turn);
	if (isPlayerWin == 'win'){
		alert(`O Win`);
		is_game_over = true;
		document.getElementById('retry_button').classList.toggle('hide');
	} else if (isPlayerWin == 'tie') {
		alert('It\'s a Tie')
		is_game_over = true;
		document.getElementById('retry_button').classList.toggle('hide');
	}
}

// Medium level bot strategy
strategyBotBlocked = (arrayEnemy) => {
	if (arrayEnemy.includes('1') && ((arrayEnemy.includes('2') || arrayEnemy.includes('3')))) {
		if (arrayEnemy.includes('2')) {
			return 3;
		} else if (arrayEnemy.includes('3')) {
			return 2;
		} else {
			return numberRandomer();
		}
	} else if (arrayEnemy.includes('1') && ((arrayEnemy.includes('4') || arrayEnemy.includes('7')))) {
		if (arrayEnemy.includes('4')) {
			return 7;
		} else if (arrayEnemy.includes('7')) {
			return 4;
		} else {
			return numberRandomer();;
		}
	} else if (arrayEnemy.includes('9') && ((arrayEnemy.includes('8') || arrayEnemy.includes('7')))) {
		if (arrayEnemy.includes('8')) {
			return 9;
		} else if (arrayEnemy.includes('7')) {
			return 8;
		} else {
			return numberRandomer();;
		}
	} else if (arrayEnemy.includes('9') && ((arrayEnemy.includes('3') || arrayEnemy.includes('6')))) {
		if (arrayEnemy.includes('3')) {
			return 6;
		} else if (arrayEnemy.includes('6')) {
			return 3;
		} else {
			return numberRandomer();;
		}
	} else if (arrayEnemy.includes('5')) {
		if (arrayEnemy.includes('1')) {
			return 9;
		} else if (arrayEnemy.includes('2')) {
			return 8;
		} else if (arrayEnemy.includes('3')) {
			return 7;
		} else if (arrayEnemy.includes('4')) {
			return 6;
		} else if (arrayEnemy.includes('6')) {
			return 4;
		} else if (arrayEnemy.includes('7')) {
			return 3;
		} else if (arrayEnemy.includes('8')) {
			return 2;
		} else if (arrayEnemy.includes('9')) {
			return 1;
		} else {
			return numberRandomer();;
		}
	} else {
		return numberRandomer();;
	}
}

// AI working on caliing function
easyAI = () => {
	let randomColumn = getColumnInformation(numberRandomer()); // get random number and check is column empty
	if (randomColumn.classList.length == 1){
		columnApplier(randomColumn); // Apply results to column
		o_array.push(`${randomColumn.id}`); // adds number column to array
		checkIfPlayerWin(o_array); // Check is bot win
		turn = 'X'; // Turn game player
	}
}

// AI working on calling function
mediumAI = () => {
	let strategicColumn = getColumnInformation(strategyBotBlocked(x_array));
	if (strategicColumn.classList.length == 1) {
		columnApplier(strategicColumn);
		o_array.push(`${strategicColumn.id}`);
		checkIfPlayerWin(o_array);
		turn = 'X';
	}
}

// System game
gameSystem = () => {
	if (is_game_over == false) {
		if (player_versus == 'player') {
			if (turn == 'O') {
				o_array.push(event.target.id);
				if (checkArray(o) == 'win'){
					alert(`O Win`);
					is_game_over = true;
					document.getElementById('retry_button').classList.toggle('hide');
				}
				turn = 'X';
			} else {
				x_array.push(event.target.id);
				if (checkArray(x) == 'win'){
					alert(`X Win`);
					is_game_over = true;
					document.getElementById('retry_button').classList.toggle('hide');
				}
				turn = 'O';
			}
		} else if (player_versus == 'easyAI'){
			if (is_game_over == false) {
				if (turn == 'X') {
					x_array.push(event.target.id);
					let isPlayerWin = checkArray(x_array);
					if (isPlayerWin == 'win'){
						alert(`X Win`);
						is_game_over = true;
						document.getElementById('retry_button').classList.toggle('hide');
					} else if (isPlayerWin == 'tie') {
						alert(`It\'s a Tie`);
						is_game_over = true;
						document.getElementById('retry_button').classList.toggle('hide');
						console.log('Goes here 321');
					}
					turn = 'O';
					if (is_game_over == false) {
						easyAI();
					}
					console.log('Goes here 322');
				}
			}
		} else if (player_versus == 'mediumAI'){
			if (is_game_over == false) {
				x_array.push(event.target.id);
				if (checkArray(x_array) == 'win') {
					alert('X Win');
					is_game_over = true;
					document.getElementById('retry_button').classList.toggle('hide');
				}
				turn = 'O';
				if (is_game_over == false) {
					mediumAI();						
				}
			}
		}
	}
}

// function run when player click on column
playerClick = () => {
	if(event.target.innerHTML.length == 0){
		event.target.innerHTML = turn;
		event.target.classList.add(turn.toLowerCase());
		gameSystem();
	}
}

// Retry the game when player clicked retry button
retry_button = () => {
	let retry_el = document.getElementsByClassName('col');
	for (var i = retry_el.length - 1; i >= 0; i--) {
		if (retry_el[i].classList.length >= 2) {
			retry_el[i].classList.remove('x');
			retry_el[i].classList.remove('o');
			retry_el[i].innerHTML = '';
			x_array = [];
			o_array = [];
		}
	}
	is_game_over = false;
	turn = 'X';
	document.getElementById('retry_button').classList.toggle('hide');
}

console.log('ready');