let n = 14;
let i = 1 ;
do {
    if (i % 2 !== 0 ) {
     let c = 1;
     let s = '';
     while (c <= i) {
        s =  s + '*';
         c++ 
     }
    
     console.log(s);
    }
     i++;
} while (i <= n);