// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    let N = A.length;
    let c = 0;
    let stack = [];
    for(let i = 0; i < N ; i++) {
        const Qsize = A[i];
        const Qdir = B[i];
        if(Qdir === 0){
          if(stack.length == 0){
            c++;
          } else {
            for(let j = stack.length - 1; j >= 0; j-- ){
                if(Qsize > stack[j]){
                    stack.pop();
                } else {
                    break;
                }
            }

            if(stack.length === 0) c++; 
          }
        } else { 
          stack.push(Qsize);
        }
    }
    return c + stack.length;
  }