// https://app.codility.com/demo/results/trainingTRJWKV-3D3/

function solution(A, B) {
  let count = 0;
  let cursor = 0;  // 이전 세그먼트를 가르키는 커서
  for(let i = 0; i < B.length; i += 1){
      if(i === 0) {
        count += 1;
        continue;
      }

      if ( B[cursor] < A[i] ) { // 현재 세그먼트를 이을수 있으면 카운팅을 + 1하고 , cursor를  이동한다.
          count += 1; 
          cursor = i;
      }
  }
  
  return count;
}
