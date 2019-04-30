// https://app.codility.com/demo/results/trainingA6MUNY-H7Y/

function solution(A) {
    A.sort((a,b) => a - b);
    let count = 0;
    for ( let p = 0; p < A.length - 2; p += 1) {
        let r = p + 2;  
        for ( let q = p + 1; q < A.length - 1; q += 1) {
          while(r < A.length && A[p] + A[q] > A[r]){
            r += 1;
          }
          count += r - q - 1;
        }
    }

    return count;
}

console.log(solution(  [10, 2, 5, 1, 8, 12] ));