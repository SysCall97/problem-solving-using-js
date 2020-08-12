function mergeOverlappingIntervals(intervals) {
    intervals.sort(function order(a, b){
        if(a[0]<b[0]) return -1;
        else if(a[0]===b[0]) {
            if(a[1]<b[1]) return -1;
            else if(a[1]===b[1]) return 0;
            else return 1;
        }
        return 1;
    });
    let result = [], newIntervals = [intervals[0][0], intervals[0][1]];
    let size = intervals.length;
    for(let i = 1; i<size; ++i) {
        if(intervals[i][0]<=newIntervals[1]) newIntervals[1] = intervals[i][1];
        else {
            result.push(newIntervals);
            newIntervals = [intervals[i][0], intervals[i][1]];
        }
    }
    result.push(newIntervals);
    return result;
}

let intervals = [[1, 3], [2, 6], [6, 8], [15, 20], [10, 14], [13, 16], [23, 26], [16, 22]];

result = mergeOverlappingIntervals(intervals);
console.log(result);  //result = [[1, 8], [10, 22], [23, 26]]

intervals.push([6, 12]);

result = mergeOverlappingIntervals(intervals);
console.log(result);  //result = [[1, 22], [23, 26]]