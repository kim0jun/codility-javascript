function solution(A) {
    const N = A.length;
    let minPrice = 200000;
    let maxProfit = 0;
    
    for(let i = 0; i < N; i++){
        if(A[i] < minPrice){
            minPrice = A[i];        
        }
        maxProfit = Math.max(maxProfit, A[i] - minPrice)
    }
    return maxProfit
}