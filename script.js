var turn = 'X';
var x = new Array();
var o = new Array();
var player_versus = 'player';
var is_game_over = false;

levelChooser = (nameEnemy) => {
	let playerEnemy;
	if (nameEnemy == 'human'){
		playerEnemy = 'player';
	} else if (nameEnemy == 'AI - Easy') {
		playerEnemy = 'tic_AI';
	} else if (nameEnemy == 'AI - Medium') {
		playerEnemy = 'tac_AI';
	} else {
		playerEnemy = 'player';
	}
	document.getElementById('popup-level').classList.toggle('hide');
	return playerEnemy;
}

playerChooseLevel = () => {
	player_versus = levelChooser(event.target.attributes.name.value);
}

checkArray = (turn) => {
	console.log(`value of O : ${o}`);
	console.log(`value of X : ${x}`);
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
		} else if (x.length >= 5 || o.length >= 5){
			console.log('Goes here 41');
			return 'tie';
		}
	} else if (turn.includes('3') && turn.includes('7')) {
		if (turn.includes('5')){
			return 'win';
		} else if (x.length >= 5 || o.length >= 5){
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
		} else if (x.length >= 5 || o.length >= 5){
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
		} else if (x.length >= 5 || o.length >= 5){
			console.log('Goes here 72');
			return 'tie';
		}
	} else if (x.length >= 5 || o.length >= 5){
		console.log('Goes here 76');
		return 'tie';
	} else {
		console.log('Goes here 79');
	}
}

tic_AI = () => {
	apply_col = (check_col, random_choose) => {
		if (check_col.classList.length == 1){
			check_col.innerHTML = turn;
			check_col.classList.add(`${turn.toLowerCase()}`);
			o.push(`${random_choose}`);
			let isPlayerWin = checkArray(o);
			if (isPlayerWin == 'win'){
				alert(`O Win`);
				is_game_over = true;
				document.getElementById('retry_button').classList.toggle('hide');
			} else if (isPlayerWin == 'tie') {
				alert('It\'s a Tie')
				is_game_over = true;
				document.getElementById('retry_button').classList.toggle('hide');
			}
			turn = 'X';
		} else {
			if (is_game_over == false){
				random_num();
			}
		}
	}
	random_num = () => {
		let random_choose = Math.ceil(Math.random()*9);
		let check_col = document.getElementById(random_choose);
		if (is_game_over == false){
			apply_col(check_col, random_choose);
		}
	}
	random_num();
	console.log('Goes here 114');
}

var o_strategy = new Array();
tac_AI = () => {
	apply_col = (blocked_col) => {
		if (document.getElementById(blocked_col).classList.length == 1) {
			let col_block = document.getElementById(`${blocked_col}`);
			col_block.innerHTML = turn;
			col_block.classList.add(`${turn.toLowerCase()}`);
			o.push(`${blocked_col}`);
			if (checkArray(o) == 'win') {
				alert('O Win');
				is_game_over = true;
				document.getElementById('retry_button').classList.toggle('hide');
			}
			turn = 'X';
		} else {
			check_center();
		}
	}
	blocked_num = ()  => {
		random_num = () => {
			let num = Math.ceil(Math.random()*9);
			return num;
		}
		if (o_strategy.includes('1')) {
			if (o_strategy.includes('2')) {
				if (!o_strategy.includes('3')) {
					o_strategy = [];
					return '3';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('4')) {
				if (!o_strategy.includes('7')) {
					o_strategy = [];
					return '7';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('3')) {
				if (!o_strategy.includes('2')) {
					o_strategy = [];
					return '2';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('7')) {
				if (!o_strategy.includes('4')) {
					o_strategy = [];
					return '4';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('5')) {
				if (!o_strategy.includes('9')) {
					o_strategy = [];
					return '9';
				} else {
					random_num();
				}
			} else {
				return random_num();
			}
		} else if (o_strategy.includes('5')) {
			if (o_strategy.includes('2')) {
				if (!o_strategy.includes('8')) {
					o_strategy = [];
					return '8';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('3')) {
				if (!o_strategy.includes('7')) {
					o_strategy = [];
					return '7';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('4')) {
				if (!o_strategy.includes('6')) {
					o_strategy = [];
					return '6';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('6')) {
				if (!o_strategy.includes('4')) {
					o_strategy = [];
					return '4';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('7')) {
				if (!o_strategy.includes('3')) {
					o_strategy = [];
					return '3';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('8')) {
				if (!o_strategy.includes('2')) {
					o_strategy = [];
					return '2';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('9')) {
				if (!o_strategy.includes('5')) {
					o_strategy = [];
					return '1';
				} else {
					random_num();
				}
			} else {
				return random_num();
			}
		} else if (o_strategy.includes('9')) {
			if (o_strategy.includes('6')) {
				if (!o_strategy.includes('3')) {
					o_strategy = [];
					return '3';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('8')) {
				if (!o_strategy.includes('7')) {
					o_strategy = [];
					return '7';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('3')) {
				if (!o_strategy.includes('6')) {
					o_strategy = [];
					return '6';
				} else {
					random_num();
				}
			} else if (o_strategy.includes('7')) {
				if (!o_strategy.includes('8')) {
					o_strategy = [];
					return '8';
				} else {
					random_num();
				}
			} else {
				return random_num();
			}
		} else {
			return random_num();
		}
	}
	check_center = (numblock) => {
		if (is_game_over == false){
			if (numblock == undefined){
				numblock = Math.ceil(Math.random()*9);
			}
			var randomednum = numblock;
			if (document.getElementById(randomednum).classList.length > 1){
				apply_col(Math.ceil(Math.random()*9));
			} else {
				apply_col(randomednum);
			}
		}
	}
check_center(blocked_num());
}

col_click = () => {
	if (is_game_over == false) {
		if(event.target.innerHTML.length == 0){
			event.target.innerHTML = turn;
			event.target.classList.add(turn.toLowerCase());
			if (player_versus == 'player'){
				if (turn == 'O') {
					o.push(event.target.id);
					if (checkArray(o) == 'win'){
						alert(`O Win`);
						is_game_over = true;
						document.getElementById('retry_button').classList.toggle('hide');
					}
					turn = 'X';
				} else {
					x.push(event.target.id);
					if (checkArray(x) == 'win'){
						alert(`X Win`);
						is_game_over = true;
						document.getElementById('retry_button').classList.toggle('hide');
					}
					turn = 'O';
				}
			} else if (player_versus == 'tic_AI'){
				if (is_game_over == false) {
					if (turn == 'O') {
						tic_AI();
						turn = 'X';
						console.log('Goes here 307');
					} else {
						x.push(event.target.id);
						let isPlayerWin = checkArray(x);
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
						tic_AI();
						console.log('Goes here 322');
					}
				}
			} else if (player_versus == 'tac_AI'){
				if (is_game_over == false) {
					if (turn == 'O') {
						turn = 'X';
						tac_AI();
					} else {
						x.push(event.target.id);
						o_strategy.push(event.target.id);
						if (checkArray(x) == 'win') {
							alert('X Win');
							is_game_over = true;
							document.getElementById('retry_button').classList.toggle('hide');
						}
						turn = 'O';
						tac_AI();
					}
				}
			}
		}
	}
}

retry_button = () => {
	let retry_el = document.getElementsByClassName('col');
	for (var i = retry_el.length - 1; i >= 0; i--) {
		if (retry_el[i].classList.length >= 2) {
			retry_el[i].classList.remove('x');
			retry_el[i].classList.remove('o');
			retry_el[i].innerHTML = '';
			x = [];
			o = [];
		}
	}
	is_game_over = false;
	turn = 'X';
	document.getElementById('retry_button').classList.toggle('hide');
}