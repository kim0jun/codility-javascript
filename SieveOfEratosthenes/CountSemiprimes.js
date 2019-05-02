// https://app.codility.com/demo/results/training4XBSB3-78C/


function solution(N, P, Q) {
  const A = new Array(N).fill(0);
  let idx = 2;
  while( idx ** 2  <= N ) {
    if(A[idx] % idx === 0) { 
      let k = idx ** 2;
      while( k <= N) {
        count += 1;
        A[k] = idx;
        k += idx
      }
    }
    idx += 1;
  }
  let counts = [0]; // 카운트를 저장해서 반복문을 간소화 
  A.forEach((value, index) => {
    let c = counts[counts.length - 1];
    if(A[index/ value] === 0) {
      c += 1;
    }
    counts[index] = c;
  })

  return P.map( (start,idx) => {
    return counts[Q[idx]] - counts[start - 1] || 0
  })
}