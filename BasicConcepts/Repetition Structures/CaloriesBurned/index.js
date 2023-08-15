// Running on a particular treadmill you burn 4.2 calories per minute.
// Write a program that uses a loop to display the number of calories burned after
// 10, 15, 20, 25, and 30 minutes.

function main() {
    caloriesBurned ()
}

function caloriesBurned () {
    const calPerMin = 4.2;
    for (let i = 10; i <= 30; i += 5) {
        document.write(`After ${i} mins you burned ${calPerMin * i} cals.`);
        document.write("<br>");
    } 
}
