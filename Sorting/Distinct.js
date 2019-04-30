function solution(A) {
    let hash = {}
    let c = 0;
    for(let i = 0; i < A.length; i++){
        if(hash[A[i]] !== 1){
            c ++;
            hash[A[i]] = 1;
        }
    }
    
    return c;
}