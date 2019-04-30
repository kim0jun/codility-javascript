function solution(N, A) {
    let a = []
    let m = 0;
    let tempM = 0;
    for(let i = 0; i < N; i++){
        a.push(0);
    }
    
    for(let i = 0; i < A.length; i++){
        let c = A[i] - 1;
        if( c < N ) {
            if( a[c] < m) {
                a[c] = m + 1;
            } else {
                ++a[c];
            }
            tempM = Math.max(tempM, a[c]);
        } else {
            m = tempM;
        }
    }

    for(let i = 0; i < a.length; i++){
        if( a[i] < m) {
            a[i] = m;
        }
    }
    
    return a;
}