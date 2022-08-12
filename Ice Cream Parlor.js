function icecreamParlor(m, arr){
    let result=[]
    arr.map((el, i) => {
        for(let j=i+1; j<arr.length; j++){
            if(el + arr[j] === m){
                result.push(i+1)
                result.push(j+1)
            }
        }
    })
    return result
}