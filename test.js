function sumEven(endNum) {
    let sum = 0; 
    for(let i=0; i<endNum; i++)
        sum += i;
    return sum;
}
// console.log(sumEven(10).toString(), " >> '45'" );

function doFactorial(endNum) {
    let result = 1; 
    for(let i=1; i<=endNum; i++)
        result *= i;
    return result;
}
// console.log(doFactorial(5), " >> '120'");

function pl(count, one, few, many) {
    if(count % 10 == 1){ return `${count} ${one}`; }
    else if( count % 10 >= 2 && count % 10 <= 4 ){ return `${count} ${few}`; }
    else if( count % 10 >= 5 && count % 10 < 10 || count % 10 == 0){ return `${count} ${many}`; }
    return;
}
console.log(pl(10359, 'стул', 'стула', 'стульев'));
