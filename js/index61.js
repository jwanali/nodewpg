let weekdayNumber = 4;
let dayName;
/*if (weekdayNumber === 1) {
    dayName = 'Monday';
} else if (weekdayNumber === 2) {
    dayName = 'Tuesday';
} else if (weekdayNumber === 3) {
    dayName = 'Wednesday';
} else if (weekdayNumber === 4) {
    dayName = 'Thursday';
} else if (weekdayNumber === 5) {
    dayName = 'Friday';
} else if (weekdayNumber === 6) {
    dayName = 'Saturday';
} else if (weekdayNumber === 7) {
    dayName = 'Sunday';
} else if (weekdayNumber < 1 || weekdayNumber >7 ) {
    dayName = 'Error Please input a number bettwen 1 and 7';
}*/
switch (weekdayNumber) {
    case 1 :
        dayName = 'Monday';
        break;
    case 2 :
        dayName = 'Tuesday';
        break;
    case 3 :
        dayName = 'Wednesday';
        break;
    case 4 :
        dayName = 'Thursday';
        break;
    case 5 :
        dayName = 'Friday';
        break;
    case 6 :
        dayName = 'Saturday';
        break;
    case 7 :
        dayName = 'Sunday';
        break;
    default :
        dayName = 'Error Please input a number bettwen 1 and 7';
        break;
}
console.log(`Today it's ${dayName} `)
/**
 * Exercise 61
Create a new index61.js file
Define weekdayNumber and assign a numeric value between 1 and 7
If weekday number is 1 show the following message: Today it's Monday
If weekday number is 2 show the following message: Today it's Tuesday
If weekday number is 3 show the following message: Today it's Wednesday
If weekday number is 4 show the following message: Today it's Thursday
If weekday number is 5 show the following message: Today it's Friday
If weekday number is 6 show the following message: Today it's Saturday
If weekday number is 7 show the following message: Today it's Sunday
If weekday number it's not bettwen 1 and 7 show an error message: Error: Please input a number bettwen 1 and 7
Switch version:
Use a switch statement to show weekday name using the weekday variable value
IF/ELSE/IF version:
After the switch version create the same functionality but using if/else/if statement

Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value

Refactor
Once you have the code working for both statements refactor the code as follows
Don't use console.log() inside the switch statement
Instead add a message variable so each case only adds the selected weekname message
Use only one console.log() after the switch statement to show the result and error
 */