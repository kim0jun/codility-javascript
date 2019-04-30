function solution(A) {
    const N = A.length;
    const hash = {}
    for(let i = 0; i < N; i++){
        if(hash[A[i]]) hash[A[i]].push(i);
        else hash[A[i]] = [i];
        
        if(hash[A[i]].length > N / 2){
            return hash[A[i]][0]
        }
    }
    return -1;
 }