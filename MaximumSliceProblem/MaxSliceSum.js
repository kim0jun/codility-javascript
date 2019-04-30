function solution(A) {
   let cur = -Infinity;
   let max = cur;
   for(let i = 0; i < A.length; i += 1) {
       cur = Math.max(cur + A[i], A[i]);
       max = Math.max(max, cur);
   }
   
   return max
}