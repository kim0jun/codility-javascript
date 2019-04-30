// https://app.codility.com/demo/results/trainingEVEXZ5-KHV/

function solution(S) {
    if(S.length % 2 === 0) return -1;
    const i = Math.floor(S.length / 2);
    left = S.slice(0,i).split('').reverse().join('');
    right = S.slice(i + 1, S.length);
    return left === right ? i : -1;
}