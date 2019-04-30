
function solution(H) {
    let N = H.length;
    let blocks = [];
    let height = 0;
    let i = 0;
    let c = 0;
    while(i < N){
        if(H[i] > height){
            let newBlock = H[i] - height;
            blocks.push(newBlock);
            height = H[i];
            c++;
        }else if(H[i] < height){
            let lastBlock = blocks.pop();
            height -= lastBlock
        }else{ 
            i++;
        }
    }
    
    return c;
}