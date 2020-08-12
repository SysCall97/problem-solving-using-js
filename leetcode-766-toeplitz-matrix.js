/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
    let outerLength = matrix.length;
    let innerLength = matrix[0].length;

    console.log(innerLength);
    console.log(outerLength);
    
    for(let i = 0; i < innerLength; ++i) {
        let row = 0, column = i;
        let arr=[];
        while(row<outerLength && column<innerLength) {
            arr.push(matrix[row][column]);
            ++row, ++column;
        }
        console.log(arr);
        if(Math.max.apply(null, arr) != Math.min.apply(null, arr))
            return false;
    }
    
    for(let i = 1; i < outerLength; ++i) {
        let row = i, column = 0;
        let arr=[];
        while(row<outerLength && column<innerLength) {
            arr.push(matrix[row][column]);
            ++row, ++column;
        }
        console.log(arr);
        if(Math.max.apply(null, arr) != Math.min.apply(null, arr))
            return false;
    }
    
    return true;
}


let mat = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
console.log(isToeplitzMatrix(mat));