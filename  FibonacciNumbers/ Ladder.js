// https://app.codility.com/demo/results/trainingYR2N9A-NM2/

function solution(A, B) {
    const C = [0, 1, 2, 3];
    let maxA = A.reduce((p, c) => Math.max(p, c),0); // 최대로 구해야하는 피보나치수까지 찾아야함
    let maxB = B.reduce((p, c) => Math.max(p, c),0); // 최대 나머지가 필요해서 찾음 
    for (let i=4; i<=maxA; i++) {
        C.push((C[i-2] + C[i-1]) % 2**maxB);   // 값이 너무 커질수있음으로, 최대 나머지로 찾음 
    }
    return A.map((e, i) => {
        return C[e] % 2**B[i] // 실제값은 다시 B[i]의 나머지로 반환한다. B[i] < maxB 임으로 문제없이 적용가능
    });
}
