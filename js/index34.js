let income = 1000;
let revenue = 600;
let taxes = 500;
const lowestIncome = 800;
const highestSpendOnTax = 400;
const payForBonus = 600;
console.log('income Objective:',income >= lowestIncome);
console.log('Taxes Objective:', taxes < highestSpendOnTax);
console.log('Bonus Objective:', revenue == payForBonus);