function solution(S) {
    let parentheses = 0;
    for(let i = 0; i < S.length; i++){
        if(S[i] === "(") parentheses++
        else if(S[i] === ")") parentheses--;
        
        if(parentheses < 0) return 0;
    }
    
    return parentheses === 0 ? 1 : 0;
}