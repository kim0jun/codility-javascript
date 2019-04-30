function solution(S) {
	const N = S.length;
	const stack = [];
	for(let i = 0; i < N; i++){
		let c = S[i];
		if (isOpener(c)) {
			stack.push(c);
		} else {
			if (stack.length === 0 ) return 0;
			if( !isMatch(stack.pop(), c) ) return 0;
		} 
	}
	return stack.length === 0 ? 1 : 0;
}

function isOpener(bracket){
	switch(bracket){
	case "{":
	case "[":
	case "(":
		return true;
	default:
		return false;
	}
}

function isMatch(opener,closer){
	switch(opener){
	case "{":
		return closer === "}";
	case "[":
		return closer === "]";
	case "(":
		return closer === ")";
	default:
		return false;
	}	
}