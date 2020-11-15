let turn = 'X';
var x = new Array();
var o = new Array();
let player_versus = 'tic_AI';

// checkWin = (id) => {
// 	if (id == `col_${id+1}`)
// }

checkArray = (who) => {
	if (who == 'x'){
		turn = x;
	} else {
		turn = o;
	}
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
		}
		console.log('turn.includes 1 ');
	} else if (turn.includes('3') && turn.includes('7')) {
		if (turn.includes('5')){
			return 'win';
		}
	} else if (turn.includes('9') && (turn.includes('3') || turn.includes('7'))){
		if (turn.includes('6') && turn.includes('3')){
			return 'win';
		} else if (turn.includes('8') && turn.includes('7')){
			return 'win';
		} else if (turn.includes('1') && turn.includes('5')){
			return 'win';
		}
		console.log('turn.includes 9 ');
	} else if (turn.includes('5')){
		if (turn.includes('2') && turn.includes('8')){
			return 'win';
		} else if (turn.includes('4') && turn.includes('6')){
			return 'win';
		} else if (turn.includes('1') && turn.includes('9')){
			return 'win';
		} else if (turn.includes('3') && turn.includes('7')){
			return 'win';
		}
		console.log('turn.includes 5 ');
	} else if (x.length >= 5 || o.length >= 5){
		alert('It\'s a Tie');
	}
	console.log(turn);
}

var check_col;
tic_AI = () => {
	apply_col = () => {
		if (check_col.classList.length == 1){
			check_col.innerHTML = turn;
			check_col.classList.add(`${turn.toLowerCase()}`);
			if (checkArray(turn.toLowerCase()) == 'win'){
				alert(`O Win`);
			}
			turn = 'X';
		} else {
			random_num();
		}
	}
	random_num = () => {
		let random_choose = Math.ceil(Math.random()*9);
		check_col = document.getElementById(random_choose);
		console.log(random_choose);
		console.log(check_col.classList);
		apply_col();
	}
	random_num();
}

col_click = () => {
	console.log(event);
	console.log(event.explicitOriginalTarget.innerHTML);
	if(event.explicitOriginalTarget.innerHTML.length == 0){
		event.explicitOriginalTarget.innerHTML = turn;
		event.explicitOriginalTarget.classList.add(turn.toLowerCase());
		if (player_versus == 'player'){
			if(turn == 'X'){
				x.push(event.explicitOriginalTarget.id);
				if (checkArray(turn.toLowerCase()) == 'win'){
					alert(`X Win`);
				}
				turn = 'O';
			}else{
				o.push(event.explicitOriginalTarget.id);
				if (checkArray(turn.toLowerCase()) == 'win'){
					alert(`O Win`);
				}
				turn = 'X';
			}
		} else if (player_versus == 'tic_AI'){
			x.push(event.explicitOriginalTarget.id);
			if (checkArray(turn.toLowerCase()) == 'win'){
				alert(`X Win`);
			}
			turn = 'O';
			tic_AI();
			console.log('tic_AI');
		}
	}
}