function findDigits(n) {
    // Write your code here
    let divisors = []
    divisors = n.toString().split('')
    //debugger
    divisors = divisors.map(el => parseInt(el))
    //debugger
    divisors= divisors.filter(el => n % el == 0 )
    return divisors.length
}


findDigits(245)