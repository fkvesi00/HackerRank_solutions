function sockMerchant(n, ar) {
    // Write your code here
    let unique = ar.filter((el, i, arr) => arr.indexOf(el) === i)
    
    let pair=0;
    unique.map(el => {
        let cnt=0;
        for(let i=0; i<ar.length ; i++){
            if(el === ar[i]){
                cnt++
                if(cnt %2 === 0 )
                    pair++;     
            }
        }
    })
    return pair;
}