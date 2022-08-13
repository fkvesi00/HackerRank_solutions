function bonAppetit(bill, k, b) {
    // Write your code here
    
    const newBill = bill.filter((el,i) =>  i!==k )
    const sum = newBill.reduce((acc,el)=>{
       return acc+=el 
    },0)
    
    return b - sum/2 ? console.log(b - sum/2) : console.log('Bon Appetit') 
}