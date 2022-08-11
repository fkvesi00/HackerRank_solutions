function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let prices = drives.map(el => {
        return keyboards.map(x => x + el)
    }).flat()
    //debugger    
    prices = prices.filter(el => el <= b)
    //debugger
    prices.sort((a,b) => b-a)
    
    return prices.length ? prices[0] : -1 
}