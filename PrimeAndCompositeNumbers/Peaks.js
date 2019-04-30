// https://app.codility.com/demo/results/trainingU7F39Y-3UN/;

function solution(A) {
  const peaks = [];
  for(let i = 1 ; i < A.length -1 ; i += 1) { 
      if(A[i] > A[i - 1] &&  A[i] > A[i + 1]) peaks.push(i);
  }
  let maxBlocks = 0;
  for(let chunkLength = 1; chunkLength <= peaks.length ; chunkLength += 1) {
    if(A.length % chunkLength !== 0) continue; 
    let find = 0;
    let cursor = 0;    
    let chunkSize = A.length / chunkLength;
    while( find < chunkLength) {
      if( Math.floor(peaks[cursor] / chunkSize) > find  ){
        break;
      }

      if(Math.floor(peaks[cursor] / chunkSize) === find) {
        find += 1;
      }
      
      cursor += 1;
      if(!peaks[cursor]) break;
    }
    if(find === chunkLength) maxBlocks = Math.max(find, maxBlocks);  // 실패해도 해당 카운트를 최고 블럭으로 저장해서 오류가 있었음
  }
  return maxBlocks;
}
