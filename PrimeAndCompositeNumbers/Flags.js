https://app.codility.com/demo/results/trainingG372S3-HE8/

function solution(A) {
    let peakArr = [];
    for(let i = 1; i < A.length - 1; i += 1) {  // 정상 배열을구함
      const prev = A[i - 1];
      const cur = A[i];
      const next = A[i + 1];
      if( cur > prev && cur > next) peakArr.push(i)
    }

    let maxFlagCount = 1;
    for(let i = 0; i <= peakArr.length; i += 1) { // 깃발을 한번씩 꽂아봄
      let lastIdx = peakArr[0];
      let flagCount = 1;
      let cursor = 1;
      while(flagCount < i)  { // 준비한 깃발이 다 떨어지면 종료
        if(lastIdx + i <= peakArr[cursor] )  { //  깃발사이의 간격은 최소 깃발의수만큼 떨어져야함 
          flagCount += 1;
          lastIdx = peakArr[cursor];
        } 

        cursor += 1;
        if(A[cursor] === undefined) break;
      }
      if(flagCount < maxFlagCount) return maxFlagCount; // 깃발수가 줄어들기 시작하면 종료 
      maxFlagCount = Math.max( maxFlagCount, flagCount);
    }

    return peakArr.length === 0 ? 0 : maxFlagCount;
  }