// https://app.codility.com/demo/results/trainingTBXB4Y-G64/

function solution(N) {
    let i = 0;
    let factorCount = 0;
    while(i * i < N){ // O(sqrt(N)) 연산
        if(N % i === 0 ) factorCount += 2;
        i++
    }
    return i * i === N ? factorCount + 1 : factorCount; // 만약 i가 재곱근이면 + 1 해야함 

}

