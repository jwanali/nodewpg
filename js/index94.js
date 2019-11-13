let n = 14;
for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0 ) {
        let c = 1;
        let s = '';
        while (c <= i) {
           s =  s + '*';
            c++ 
        }
       
        console.log(s);
}
}