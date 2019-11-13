const tripExpenses = [100,85,75];
const budget = tripExpenses.reduce(function(sum, currentValue) {
    return sum + currentValue;
});
console.log(`hotel: ${tripExpenses[0]}`);
console.log(`trip: ${tripExpenses[1]}`);
console.log(`meals: ${tripExpenses[2]}`);
console.log(`______________\nTotal: ${budget}`);