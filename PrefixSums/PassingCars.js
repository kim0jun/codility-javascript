function solution(A) {
    let t = 0;
    let s = 0;
    for(let i = 0; i < A.length; i++){
        if(A[i] === 0){
            t ++;  
        } else {
            s += t;
        }
    }
    return s >  1000000000 ? -1 : s;
}