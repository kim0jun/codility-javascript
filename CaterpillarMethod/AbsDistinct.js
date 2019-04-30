// https://app.codility.com/demo/results/trainingZ53B7U-5NS/

function solution(A) {
    let hash = {};
    let count = 0;
    for(let i = 0 ; i < A.length; i += 1) {
        const cur = Math.abs(A[i]);
        if(!hash[cur])  {
            hash[cur] = true;
            count += 1;
        }
    }
    
    return count;
}