let result = 0 ;
for (let i = 0; i <= 1000; i++) { 
    if (result > 400) {
        break;
} else {
    result = result + i;
}
} console.log(result);