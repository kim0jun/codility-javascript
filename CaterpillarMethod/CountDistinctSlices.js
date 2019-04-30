function solution(M, A) {
    let  sliceCount = 0;
    let sliceIdx = 0;
    let hash = {};
    for(let i = 0; i < A.length; i += 1) {
        if(hash[A[i]] !== undefined && sliceIdx < hash[A[i]]) {
            sliceIdx = hash[A[i]];    
        }   
        sliceCount += i - sliceIdx + 1;
        hash[A[i]] = i + 1;
        
        if (sliceCount > 1e9) return 1e9
    }
    
    return sliceCount;
}