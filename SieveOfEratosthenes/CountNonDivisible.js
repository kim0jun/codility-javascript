// https://app.codility.com/demo/results/training6NJ7XH-N6G/

// 인수
function solution(A) {
  let numberCounts =[]
  A.forEach(e => {
    numberCounts[e] = numberCounts[e] + 1 || 1
  })

  let factorCounters = [];
  numberCounts.forEach((curCount, cur) => {
    for(let i = cur; i < numberCounts.length; i += cur) {
      factorCounters[i] = factorCounters[i] + curCount || curCount; // 인수가 중복하여 등장할 수 있기때문에 인수의 카운트를 더함 ex) 6 - 2 2 3  => 인수 3개
    }
  })
  return A.map( e => A.length - factorCounters[e]); // 전체 배열길이 - 인수 = 나눌수 없는수 
}
