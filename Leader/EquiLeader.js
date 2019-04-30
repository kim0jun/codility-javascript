
// 복잡도는 2N
// 앞에서부터 루프, 뒤에서부터 루프를 돌아, 각자리마다 리더를찾는다.
// arr[n] == arr2[n + 1] 이면 리더가 같음 

function solution(A) {
  let hash = {};
  let hash2 = {};
  let arr = [];
  let leader = A[0];
  let leader2 = A[A.length - 1];
  let count = 0;

  for(let i = 0; i < A.length ; i += 1 ) {
    let key = A[i];
    hash[key] = hash[key] != undefined ? hash[key] + 1 : 1; 
    leader = hash[leader] > hash[key] ? leader : key;
    if(hash[leader] > (i + 1) / 2) {
      arr.push(leader);
    } else {
      arr.push(-1);
    }
  }

  for(let i = A.length - 1; i > 0; i -= 1 ) {
    let key = A[i];
    hash2[key] = hash2[key] != undefined ? hash2[key] + 1 : 1; 
    leader2 = hash2[leader2] > hash2[key] ? leader2 : key;
    if(hash2[leader2] > (A.length - i) / 2) {
      if(arr[i-1] === leader2) count += 1;
    }
  }  

  return count
}