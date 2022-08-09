function migratoryBirds(arr) {
    // Write your code here
    let gCnt=0;
    let result=0;
    let alreadyCheked=[]
    
    //debugger
    arr.map(x => {

        let lCnt=0;
        for(let i=0;i <= arr.length; i++){
            if(x===arr[i])
                lCnt++;
        }
        //debugger
          if(gCnt===lCnt){
            if(x<result)
                result = x
        }
        if(gCnt<lCnt){
            gCnt=lCnt;
            result = x;
        }
      
        alreadyCheked.push(x)
        arr = arr.filter(x => {
            return !alreadyCheked.includes(x)
        })        
        return 
    })
    return result
    
} 