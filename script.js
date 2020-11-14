let turn = 'X';
var x = new Array();
var o = new Array();

// checkWin = (id) => {
// 	if (id == `col_${id+1}`)
// }

checkArray = (who) => {
	if (who == 'x'){
		turn = x;
	} else {
		turn = o;
	}
	if (turn.includes('1')){
		if (turn.includes('2') && turn.includes('3')){
			alert(`${who.toUpperCase()} Win`);
		} else if (turn.includes('4') && turn.includes('7')){
			alert(`${who.toUpperCase()} Win`);
		} else if (turn.includes('5') && turn.includes('9')){
			alert(`${who.toUpperCase()} Win`);
		}
	}  else if (turn.includes('9')){
		if (turn.includes('3') && turn.includes('6')){
			alert(`${who.toUpperCase()} Win`);
		} else if (turn.includes('7') && turn.includes('8')){
			alert(`${who.toUpperCase()} Win`);
		}
	} else if (turn.includes('5')){
		if (turn.includes('2') && turn.includes('8')){
			alert(`${who.toUpperCase()} Win`);
		} else if (turn.includes('4') && turn.includes('6')){
			alert(`${who.toUpperCase()} Win`);
		} else if (turn.includes('1') && turn.includes('9')){
			alert(`${who.toUpperCase()} Win`);
		} else if (turn.includes('3') && turn.includes('7')){
			alert(`${who.toUpperCase()} Win`);
		} 
	} else if (x.length >= 5 || o.length >= 5){
		alert('It\'s a Tie');
	}
	console.log(turn);
}

col_click = () => {
	console.log(event);
	console.log(event.explicitOriginalTarget.innerHTML);
	if(event.explicitOriginalTarget.innerHTML.length == 0){
		event.explicitOriginalTarget.innerHTML = turn;
		if(turn == 'X'){
			x.push(event.explicitOriginalTarget.id);
			checkArray(turn.toLowerCase());
			turn = 'O';
		}else{
			o.push(event.explicitOriginalTarget.id);
			checkArray(turn.toLowerCase());
			turn = 'X';
		}
	}
}