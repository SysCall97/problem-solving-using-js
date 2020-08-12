function diceRoll() {
    return (Math.round(Math.random()*100)%6)+1;
}

// console.log(diceRoll());

for(let i=0; i<100; ++i) {
    let x = diceRoll();
    console.log(x);
    if(x<=0 || x>6) break;
}