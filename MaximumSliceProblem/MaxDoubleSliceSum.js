// https://app.codility.com/demo/results/training2FUSKG-TDD/;

function solution(A) {
  if(A.length < 4 )
    return 0;

  let leftArr = [0]; // 앞에서부터 누적 최대값 배열,
  let rightArr = [0]; // 뒤에서부터서부터 누적 최대값 배열,
  for(let i = 1 ; i < A.length - 1; i += 1 ){
    const backIdx = A.length - i - 1;
    leftArr[i] = Math.max(A[i], A[i] + leftArr[i-1]); // 누적 최고값을 현재 인덱스에 저장
    rightArr[backIdx] = Math.max(A[backIdx] ,A[backIdx] + (rightArr[backIdx+1] || 0)) // 누적 최고값을 현재 인덱스에 저장(뒤에서부터)
  }
  let maxSum = Math.max(leftArr[1],rightArr[2],0); // 만약 총배열이  4일경우에는, 하나의 값만 사용될수있음으로 
  for(let i = 1; i < A.length - 3; i += 1) { // i, i + 2 가 있어야 하기때문에  때문에 배열길이 -3까지만 진행한다. 
    maxSum = Math.max(maxSum, leftArr[i], rightArr[i+2], leftArr[i] + rightArr[i+2]) // 단항의 값이 합한 값보다 커질수 있다.
  }
  return maxSum ;
}

console.log(solution([3,2,6,-1,4,5,-1,2]))