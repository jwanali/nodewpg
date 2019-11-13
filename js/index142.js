let firstPerson, secondPerson;
firstPerson = ['Mark','Carpenter','220 Oakland ave',40];
secondPerson = ['Mark','Carpenter','220 Oakland ave',40];
const person1 = firstPerson.reduce(function(sum,first){
    return sum + first ;
});
const person2 = secondPerson.reduce(function(sum,first){
    return sum + first ;
});
console.log(person1);
console.log(person2);
if (person1 === person2) {
    console.log('They are the same');
} else {
    console.log('They are diferent');
}

//Define a firstPerson variable
//Define a secondPerson variable
//Assign a new array to each defined variable with the following structure
//The first item is the person first name (string)
//The second item is the person last name (string)
//The third item is the person address (string)
//The fourth item is the person age (number)
//Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
//Compare the strings result to see if they are the same person (if they are they should match)
//Try using the same person (with different variables) and also try different people