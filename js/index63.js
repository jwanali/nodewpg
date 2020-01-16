let year = 2014;
let champion = null;
let team = null;
switch (year){
    case 2017:
        team = "Pittsburgh Penguins";
        champion = year;
        break;
    case 2016:
        team = "Pittsburgh Penguins ";
        champion = year;
        break;
    case 2015:
        team = "Chicago Blackhawks";
        champion = year;
        break;
    case 2014:
        team = "Los Angeles Kings";
        champion = year;
        break;
    case 2013:
        team = "Chicago Blackhawks";
        champion = year;
        break;
    case 2012:
        team = "Los Angeles Kings";
        champion = year;
        break;
    case 2011:
        team = "Boston Bruins";
        champion = year;
        break;
    case 2010:
        team = "Chicago Blackhawks";
        champion = year;
        break;
    case 2009:
        team = "Pittsburgh Penguinas";
        champion = year;
        break;
    case 2008:
        team = "Detroit Red Wings";
        champion = year;
        break;
    case 2007:
        team = "Anaheim Ducks";
        champion = year;
        break;
    case 2006:
        team = "Carolina Hurricanes";
        champion = year;
        break;
    default:
        champion = console.error('Error');
            
} if (champion === null || champion === undefined) {
    console.log(`Sorry, please try a differnt year - try between 2006 and 2017`)
} else console.log(`${champion} was the ${team} year Champion`);
/**
 * Exercise 63
Create a new index63.js file
Define year variable and assign a number between 2006 and 2017
Define champion variable and assing a value between 2006 and 2017
Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
Use a switch statement to check for the selected year value `` 2017 - Pittsburgh Penguins 2016 - Pittsburgh Penguins 2015 - Chicago Blackhawks 2014 - Los Angeles Kings 2013 - Chicago Blackhawks 2012 - Los Angeles Kings 2011 - Boston Bruins 2010 - Chicago Blackhawks 2009 - Pittsburgh Penguinas 2008 - Detroit Red Wings 2007 - Anaheim Ducks 2006 - Carolina Hurricanes
* Try all the posible cases/scenarios (even the error message) by changing the year value

 */