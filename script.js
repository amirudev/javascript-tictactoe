let turn = 'X';
var x = new Array();
var o = new Array();
let player_versus = 'tic_AI';
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
		} else if (turn.includes('6')){
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
		}
	}
}