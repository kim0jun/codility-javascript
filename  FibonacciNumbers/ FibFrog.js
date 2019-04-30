function solution(A)  {
    // if(A.length === 0) return 1;
    let fibo = [0,1,1];
    for(let i = 2; fibo[i-1] <= A.length; i += 1 ) { 
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
        
    return jump(fibo, A, A.length, 0);
}

function jump(fibo, A, cur, count){
  // console.log(cur, fibo);
  for(let i = fibo.length - 1; i > 1; i -= 1) {
    let nextPos = cur - fibo[i];
    if(nextPos === -1) return count + 1;
    if(A[nextPos]) {
      // 갈수있는곳이 있다면?
      let next = jump(fibo, A, nextPos, count + 1);
      if(next >= 0) return next;
      else continue;
    }
  }

  return - 1;
}

// console.log(solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0] ));
console.log(solution([0,0,0,0]))
console.log(solution( [1, 1, 0, 0, 0] ));