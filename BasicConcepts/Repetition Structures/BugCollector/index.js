// A bug collector collects bugs every day for specific number of days. Write a program that keeps a running total of the number of bugs collected during the desired days. The loop should ask for the number of bugs collected for each day, and when the loop is finished, the program should display the total number of bugs collected.
function main() {
    const duration = document.getElementById("bugsCollector").value;
    let total = 0;
    let i = 1;
    while(i <= duration) {
        let input = Number(prompt(`Enter the input ${i}:`));
        total += input;
        i++
    }
    let message = total;
    document.getElementById("output").innerHTML = message;
}
