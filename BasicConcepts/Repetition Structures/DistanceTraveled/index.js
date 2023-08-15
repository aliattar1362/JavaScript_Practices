/* The distance a vehicle travels can be calculated 
as follows:
distance = speed X time

For example, if a train travels 40 miles per hour for 
three hours, the distance traveled is 120 miles. 
Write a program that asks the user for the speed of a vehicle 
(in miles per hour) and the number of hours it has traveled. 
It should then use a loop to display the distance the vehicle 
has traveled for each hour of that time period. */

function main() {
    let speed = parseFloat(prompt("What is the speed of the vehicle in mph? "));
    let duration = parseInt(prompt("How many hours has it traveled? "));

    // Calculate hour and distance and send the data to display fucntion.
    text = CalculateDistance(speed, duration);

    // Display the output table
    Display(text);
}

function CalculateDistance (speed, time) {
    let output = '';

    for (let i = 1; i <= time; i++) {

        output += `${i}         ${i * speed}<br>`; 
    }

    return output;
}

function Display (text) {
    let message = `
    Hour            Distance Traveled
    ---------------------------------`;

    document.getElementById('output').innerHTML = message + text;
}
