function solution(A) {
    let N = A.length;
    if(A.length < 3){
        return 0;
    }
    A.sort((a,b) => a - b);
    for(let P = 0; P < N - 2; P++){
        let Q = P+1;
        let R = P+2;
        if(validation(A[P], A[Q], A[R])) return 1;
 
    }
    
    return 0;
    
}

function validation(P, Q, R){
    let validP = P < Q + R;
    let validQ = Q < P + R;
    let validR = R < P + Q;
    return validP & validQ & validR
}