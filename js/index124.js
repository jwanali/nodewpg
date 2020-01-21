const movies = ['turtles can fly','Incredibles 2','Ready Player One','Mission: Impossible - Fallout','four minutes','Half Moon','The Lord of the Rings','The Legend of 1900','yol "the way"','Bohemian Rhapsody'];
console.log(movies[0].toUpperCase(),'\n',movies[movies.length-1].toUpperCase());
for (let i = 0; i <= movies.length-1; i++) {
    console.log(`the ${i+1}th movie in our list is ${movies[i].toUpperCase()}`);
}
/**
 * Exercise 124
Create a new index124.js file
Define a movies array with at least 10 movies that you really like
Show the first and last movie name from the movies array
To show the last item you need to use the movies lenght property to make it dynamic
 */
