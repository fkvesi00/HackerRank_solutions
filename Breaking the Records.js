const breakingRecords = scores => {
    // Write your code here
    let min = scores[0]; 
    let max = scores[0];
    
    let result=[0,0]
    
    //for(item of scores)
    
    scores.forEach(item => {
        if(min > item){
            min=item;
            result[1]++;
        }
        if(max < item){
            max = item
            result[0]++;
        }
    })
    return result;
}