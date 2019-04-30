// https://app.codility.com/demo/results/trainingBPT8V4-8R3/;

function solution(A) {
  let dp = new Array(A.length).fill(-Infinity);
  for(let i = 0 ; i < A.length; i += 1) {
      if( i === 0) dp[i] = A[i];
      for(let j = Math.max(0, i - 6); j < i ; j += 1){
          dp[i] = Math.max(dp[i], A[i] + dp[j]);
      }
  }
  return dp.pop();
}