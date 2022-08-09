const countingValleys = (steps, path) => {
    // Write your code here
    let cntU=0;
    let cntD=0;
    let cntVally=0
    
    path.split('').map(el=>{
        el ==='U' ? cntU++ : cntD++
                //debugger
        cntD - cntU !== 0 ? 0 :
        el==='U' ? cntVally++ : 0
        
        return
    })
    return cntVally;
}