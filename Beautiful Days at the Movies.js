const reverseNumber = (number) => parseInt(number.toString().split('').reverse().join(''))

function beautifulDays(i, j, k) {
    // Write your code here
    let cnt=0;
    debugger
    for(let y = i; y<=j; y++){
        debugger
        (y-reverseNumber(y)) % k === 0 ? ++cnt : ''
    }
    
    return cnt
}
