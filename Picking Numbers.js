function pickingNumbers(a) {
    // Write your code here
    let result = [];
    for(let i=0; i<a.length; i++){
        //debugger
         let newArr = a.filter(el => {
            return  el - a[i] <=1 && el - a[i] >= 0
        })   
        result.length < newArr.length ? result = newArr : ''
    }
    return result.length;
} 