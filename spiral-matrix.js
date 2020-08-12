function spiralMatrix(matrix) {
    const row = matrix.length;
    const column = matrix[row-1].length;
    const totElement = row * column;
    let result = [];
    let direction = 0;
    let left = 0, right = column-1, top = 0, bottom = row-1;

    while(true) {
        if(direction == 0) {
            // traverse left to right
            for(let i = left; i <= right; ++i) {
                result.push(matrix[top][i]);
            }
            ++top;
        } else if(direction == 1) {
            // traverse up to down
            for(let i = top; i <= bottom; ++i) {
                result.push(matrix[i][right]);
            }
            --right;
        } else if(direction == 2) {
            // traverse right to left
            for(let i = right; i >= left; --i) {
                result.push(matrix[bottom][i]);
            }
            --bottom;
        } else if(direction == 3) {
            // traverse down to up
            for(i = bottom; i >= top; --i) {
                result.push(matrix[i][left]);
            }
            ++left;
        }
        direction = (direction + 1) % 4;

        if(result.length == totElement) break;
    }

    return result;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = spiralMatrix(matrix);
console.log("result: ", result);
// extected result: [1, 2, 3, 6, 9, 8, 7, 4, 5]

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

result = spiralMatrix(matrix);
console.log("result: ", result);
// extected result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]