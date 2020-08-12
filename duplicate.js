let roll = [1, 3, 5, 3, 4, 6, 8, 6, 7, 8, 11, 2, 4, 44, 3, 2];
let unique = [];

for(let i=0; i<roll.length; ++i) {
    let element = roll[i];
    if(unique.indexOf(element)==-1) {
        unique.push(element);
    }
}

console.log(unique);