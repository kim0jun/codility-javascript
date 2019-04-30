function solution(K, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = 0 ;
    let lope = 0;
    for(let i = 0; i < A.length; i += 1) {
        stack += A[i];
        if(stack >= K) {
            stack = 0 ;
            lope += 1;
        }
    }
    
    return lope
}