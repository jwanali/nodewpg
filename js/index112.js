function showNumbers(startNumber, endNumber) {
    if (typeof startNumber === 'number' && typeof endNumber === 'number') {
      if( startNumber > endNumber) {
        for(let index1 = startNumber;index1 >= endNumber; index1--){
            console.log(index1);
        }
       } else if (endNumber > startNumber) {
        for(let index1 = startNumber;index1 <= endNumber; index1++){
            console.log(index1);
        }
       } else if (startNumber === endNumber) {
        console .log(`${startNumber}`)
       }
     } else {
        console.log('please make sure that you enter numbers');
       }
}
showNumbers(0,1000);
showNumbers(1000,0);
showNumbers(100,100);
showNumbers(100,300);
showNumbers('ee',300);