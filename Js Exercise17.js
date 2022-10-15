function secondsSum(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let secondSums = first + second + third;
    let minutes = Math.floor(secondSums / 60);
    let seconds = secondSums % 60;
    
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`)
    }
    
}

secondsSum(["35", "45", "44"])