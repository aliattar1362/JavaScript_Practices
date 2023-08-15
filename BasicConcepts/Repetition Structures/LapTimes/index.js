// Write a program that asks the user to enter the number of times that they 
// have run around a racetrack, and then uses a loop to prompt them to enter 
// the lap time for each of their laps. 
// When the loop finishes, the program should display the time of their fastest lap, 
// the time of their slowest lap, and their average lap time.

function main() {
    lapTimeFunc ();
}

function lapTimeFunc () {
    const roundNumber = Number(prompt("Enter the number of times you have run around a racetrack:"));
    let lapTime = Number(prompt(`Enter the lap time for round 1:`));
    let minTime = lapTime;
    let maxTime = lapTime;
    let total = 0;
    let i = 2; // counter 
    while (i <= roundNumber) {
        let lapTime = Number(prompt(`Enter the lap time for round ${i}:`));
        total += lapTime;
        if (lapTime > maxTime) maxTime = lapTime;
        if (lapTime < minTime) minTime = lapTime;
        i++;
    }
    let average = Number((total / i).toFixed(2));
    document.write(`The time of fastest lap was ${minTime}s, the time of slowest lap was ${maxTime}s, and the average lap time was ${average}s.`);
}
