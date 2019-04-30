// https://app.codility.com/demo/results/trainingRQ7WX9-4Q5/

function solution(T) {
    return findTree(T) - 1;
}


function findTree(node) {
    if(!node) return 0;
    return Math.max(findTree(node.l), findTree(node.r)) + 1;
}