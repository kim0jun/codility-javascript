// https://app.codility.com/demo/results/trainingGCUV9X-TT4/

function solution(N) {
    let i = 0;
    let minPermiter = Infinity;
    while(i * i < N){ // O(sqrt(N)) 연산
        if(N % i === 0 ) minPermiter = Math.min(minPermiter, i + N/i); 
        i += 1;
    }
    if(i * i === N) minPermiter = Math.min(minPermiter, i * 2)
    return minPermiter * 2; // * 2는 반환값에만 반영하자
}