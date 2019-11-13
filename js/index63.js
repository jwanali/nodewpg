let year = 2008;
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
} if (champion === null) {
    console.log(`Sorry, please try a differnt year - try between 2006 and 2017`)
} else console.log(`${champion} was the ${year} ${team} year Champion`);