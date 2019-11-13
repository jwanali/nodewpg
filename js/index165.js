function greet() {
  
    let otherFunction = function() {
      console.log('I don\'t know you but this drives me crazzy!!!');
    }
    
    return otherFunction;
  }
  let myFunction = greet(); // Calling the greet function we get other function back
  
  console.log(typeof myFunction); // function
  
  myFunction(); 