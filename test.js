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
    let plResult;
    
    if(count==1){ plResult = one }
    else if(){}
    return;
}