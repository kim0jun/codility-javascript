function solution(A) {
    let hash={}
    let m = 0;
    for(i in A){
        hash[A[i]] = 1;
        m = Math.max(m, A[i]);
    }
    for(let i = 1; i <= m+1; i++){
        if(hash[i] !== 1) return i;   
    }
    return 1;
}