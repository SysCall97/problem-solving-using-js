function isPossible(arivals, departures, numberOfRooms) {
    arivals.sort();
    departures.sort();
    let numberOfGuests = Math.max(arivals.length, departures.length);
    let i = 0, j = 0, count = 0;

    while(i<numberOfGuests && j<numberOfGuests) {
        if(arivals[i]<departures[j]) {
            ++count;
            if(count>numberOfRooms)  return false;
            ++i;
        } else {
            --count;
            ++j;
        }
    }
    
    return true;
}

let arivals = [1, 3, 5];
let departures = [2, 5, 8];
let numberOfRooms = 1;
console.log(isPossible(arivals, departures, numberOfRooms));