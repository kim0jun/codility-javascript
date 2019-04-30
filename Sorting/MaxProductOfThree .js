function solution(A) {
    let N = A.length;
    A.sort((a,b) => a-b );
    let result1 = A[N-1] * A[N-2] * A[N-3];
    let result2 = A[0] * A[1] * A[N-1];
    return Math.max(result1, result2);
}

console.log(solution([-5, -6, -4, -7, -10]));