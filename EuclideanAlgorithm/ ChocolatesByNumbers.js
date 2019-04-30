function solution(N, M) {
    return N / gcd(N, M);
}

function gcd(A, B){
    let C = A%B;
    while(C){
        A = B;
        B = C;
        C = A % B;
    }
    return B;
}