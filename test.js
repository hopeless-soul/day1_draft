function sum(startNum, endNum) {
    let sum = 0; 
    for(let i=Math.min(startNum, endNum); i<Math.max(startNum, endNum); i++)
        sum += i;
    return sum;
}
// console.log(sum(15, 10));

function doFactorial(endNum) {
    let result = 1; 
    for(let i=1; i<=endNum; i++)
        result *= i;
    return result;
}
// console.log(doFactorial(5));

function pl(count, one, few, many) {
    if(count > 10 && count < 20 ){ return `${count} ${many}`; }
    else if(count % 10 == 1){ return `${count} ${one}`; }
    else if( count % 10 >= 2 && count % 10 <= 4 ){ return `${count} ${few}`; }
    else if( count % 10 >= 5 && count % 10 < 10 || count % 10 == 0){ return `${count} ${many}`; }
    return;
}
console.log(pl(0, 'стул', 'стула', 'стульев'));

