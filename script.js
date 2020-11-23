var turn = 'X';
var x = new Array();
var o = new Array();
var player_versus = 'tac_AI';
var is_game_over = false;

level_click = () => {
	let player_enemy = event.target.attributes.name.value;
	if (player_enemy == 'human'){
		player_versus = 'player';
	} else if (player_enemy == 'AI - Easy') {
		player_versus = 'tic_AI';
	} else if (player_enemy == 'AI - Medium') {
		player_versus = 'tac_AI';
	} else {
		player_versus = 'player';
	}
	document.getElementById('popup-level').classList.add('hide');
}

// checkWin = (id) => {
// 	if (id == `col_${id+1}`)
// }

checkArray = (turn) => {
	if (turn.includes('1') && (turn.includes('3') || turn.includes('4'))){
		if (turn.includes('2') && turn.includes('3')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('4') && turn.includes('7')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('5') && turn.includes('9')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('5') && turn.includes('7')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('4') && (turn.includes('5') && turn.includes('6'))){
			is_game_over = true;
			return 'win';
		} else if (x.length >= 5 || o.length >= 5){
			is_game_over = true;
			alert('It\'s a Tie');
			document.getElementById('retry_button').classList.toggle('hide');
		}
		console.log('turn.includes 1 ');
	} else if (turn.includes('3') && turn.includes('7')) {
		if (turn.includes('5')){
			is_game_over = true;
			return 'win';
		} else if (x.length >= 5 || o.length >= 5){
			is_game_over = true;
			alert('It\'s a Tie');
			document.getElementById('retry_button').classList.toggle('hide');
		}
	} else if (turn.includes('9') && (turn.includes('3') || turn.includes('7'))){
		if (turn.includes('6') && turn.includes('3')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('8') && turn.includes('7')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('1') && turn.includes('5')){
			is_game_over = true;
			return 'win';
		} else if (x.length >= 5 || o.length >= 5){
			is_game_over = true;
			alert('It\'s a Tie');
			document.getElementById('retry_button').classList.toggle('hide');
		}
		console.log('turn.includes 9 ');
	} else if (turn.includes('5')){
		if (turn.includes('2') && turn.includes('8')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('4') && turn.includes('6')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('1') && turn.includes('9')){
			is_game_over = true;
			return 'win';
		} else if (turn.includes('3') && turn.includes('7')){
			is_game_over = true;
			return 'win';
		} else if (x.length >= 5 || o.length >= 5){
			is_game_over = true;
			alert('It\'s a Tie');
			document.getElementById('retry_button').classList.toggle('hide');
		}
		console.log('turn.includes 5 ');
	} else if (x.length >= 5 || o.length >= 5){
		is_game_over = true;
		alert('It\'s a Tie');
		document.getElementById('retry_button').classList.toggle('hide');
	}
	console.log(turn);
}

tic_AI = () => {
	apply_col = (check_col, random_choose) => {
		if (check_col.classList.length == 1){
			check_col.innerHTML = turn;
			check_col.classList.add(`${turn.toLowerCase()}`);
			o.push(`${random_choose}`);
			console.log(o);
			if (checkArray(o) == 'win'){
					alert(`O Win`);
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
		console.log(random_choose);
		console.log(check_col.classList);
		if (is_game_over == false){
			apply_col(check_col, random_choose);
		}
	}
	random_num();
}

var o_strategy = new Array();
tac_AI = () => {
	apply_col = (blocked_col) => {
		console.log(`${blocked_col} in apply_col func`);
		if (document.getElementById(blocked_col).classList.length == 1) {
			let col_block = document.getElementById(`${blocked_col}`);
			col_block.innerHTML = turn;
			col_block.classList.add(`${turn.toLowerCase()}`);
			o.push(`${blocked_col}`);
			if (checkArray(o) == 'win') {
				alert('O Win');
				document.getElementById('retry_button').classList.toggle('hide');
			}
			turn = 'X';
		} else {
			check_center();
		}
	}
	blocked_num = ()  => {
		random_num = () => {
			console.log('Randoming Number from Blocked Num')
			let num = Math.ceil(Math.random()*9);
			console.log(num);
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
			console.log('Not finding match array')
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
				console.log(`${randomednum} Exists`);
				apply_col(Math.ceil(Math.random()*9));
			} else {
				console.log(`${randomednum} Doesnt Exists`);
				apply_col(randomednum);
			}
		}
	}
check_center(blocked_num());
}

col_click = () => {
	if (is_game_over == false) {
		console.log(event);
		console.log(event.target.innerHTML);
		if(event.target.innerHTML.length == 0){
			event.target.innerHTML = turn;
			event.target.classList.add(turn.toLowerCase());
			if (player_versus == 'player'){
				if (turn == 'O') {
					o.push(event.target.id);
					if (checkArray(o) == 'win'){
						alert(`O Win`);
						document.getElementById('retry_button').classList.toggle('hide');
					}
					turn = 'X';
				} else {
					x.push(event.target.id);
					if (checkArray(x) == 'win'){
						alert(`X Win`);
						document.getElementById('retry_button').classList.toggle('hide');
					}
					turn = 'O';
				}
			} else if (player_versus == 'tic_AI'){
				if (is_game_over == false) {
					if (turn == 'O') {
						turn = 'X';
						tic_AI();
						console.log('tic_AI');
					} else {
						x.push(event.target.id);
						if (checkArray(x) == 'win'){
							alert(`X Win`);
							document.getElementById('retry_button').classList.toggle('hide');
						}
						turn = 'O';
						tic_AI();
						console.log('tic_AI');
					}
				}
			} else if (player_versus == 'tac_AI'){
				console.log('Enemy : tac_AI');
				if (is_game_over == false) {
					if (turn == 'O') {
						turn = 'X';
						tac_AI();
						console.log('tac_AI');
					} else {
						x.push(event.target.id);
						o_strategy.push(event.target.id);
						if (checkArray(x) == 'win') {
							alert('X Win');
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
			document.getElementById('retry_button').classList.toggle('hide');
		}
	}
	is_game_over = false;
	turn = 'X';
}