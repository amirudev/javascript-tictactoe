let turn = 'X';
var x = new Array();
var o = new Array();
let player_versus = 'tac_AI';
var is_game_over = false;

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
		}
		console.log('turn.includes 1 ');
	} else if (turn.includes('3') && turn.includes('7')) {
		if (turn.includes('5')){
			is_game_over = true;
			return 'win';
		} else if (x.length >= 5 || o.length >= 5){
			is_game_over = true;
			alert('It\'s a Tie');
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
		}
		console.log('turn.includes 5 ');
	} else if (x.length >= 5 || o.length >= 5){
		is_game_over = true;
		alert('It\'s a Tie');
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

tac_AI = () => {
	apply_col = (blocked_col) => {
		if (document.getElementById(`${blocked_col}`).classList.length == 1) {
			let col_block = document.getElementById(`${blocked_col}`);
			col_block.innerHTML = turn;
			col_block.classList.add(`${turn.toLowerCase()}`);
			o.push(`${blocked_col}`);
			if (checkArray(o) == 'win') {
				alert('O Win');
			}
		}
	}
	blocked_num = ()  => {
		random_num = () => {
			return Math.ceil(Math.random()*9);
		}
		if ((o.includes('1') && o.includes('9')) || (o.includes('3') && o.includes('7'))) {
			if (o.includes('5') == false){
				return '5';
			} else {
				random_num();
			}
		} else if (o.includes('1') && (o.includes('2') || o.includes('3'))) {
			if (o.includes('2')) {
				return '3';
			} else if (o.includes('3')) {
				return '2';
			} else {
				random_num();
			}
		} else if (o.includes('1') && (o.includes('4') || o.includes('7'))) {
			if (o.includes('4')) {
				return '7';
			} else if (o.includes('7')) {
				return '4';
			} else {
				random_num();
			}
		} else if (o.includes('3') && (o.includes('7') || o.includes('5'))) {
			if (o.includes('7')) {
				return '5';
			} else if (o.includes('5')) {
				return '7';
			} else {
				random_num();
			}
		} else if ((o.includes('9') && o.includes('3')) || (o.includes('9') && o.includes('7'))) {
			if (o.includes('5') == false) {
				return '5';
			} else {
				random_num();
			}
		} else if (o.includes('5')){
			if (o.includes('2')){
				return '7';
			} else if(o.includes('4')){
				return '4';
			} else if(o.includes('6')){
				return '6';
			} else if (o.includes('8')) {
				return '8';
			}
		} else {
			random_num();
		}
	console.log(o);
	}
	check_center = (numblock) => {
		random_num = () => {
			return numblock = Math.ceil(Math.random()*9);
		}
		if (document.getElementById(numblock).classList.length > 1){
			console.log(`${numblock} Exists`);
			random_num();
		} else {
			console.log('Doesnt Exists');
			return numblock;
		}
	}
	apply_col(check_center(blocked_num()));
}

col_click = () => {
	console.log(event);
	console.log(event.target.innerHTML);
	if(event.target.innerHTML.length == 0){
		event.target.innerHTML = turn;
		event.target.classList.add(turn.toLowerCase());
		if (player_versus == 'player'){
			if(turn == 'X'){
				x.push(event.target.id);
				if (checkArray(x) == 'win'){
					alert(`X Win`);
				}
				turn = 'O';
			}else{
				o.push(event.target.id);
				if (checkArray(o) == 'win'){
					alert(`O Win`);
				}
				turn = 'X';
			}
		} else if (player_versus == 'tic_AI'){
			if (is_game_over == false){
				x.push(event.target.id);
				if (checkArray(x) == 'win'){
					alert(`X Win`);
				}
				turn = 'O';
				tic_AI();
				console.log('tic_AI');
			}
		} else if (player_versus == 'tac_AI'){
			if (is_game_over == false) {
				x.push(event.target.id);
				if (checkArray(x) == 'win') {
					alert('X Win');
				}
				turn = 'O';
				tac_AI();
				console.log('tac_AI');
			}
		}
	}
}
