function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let breakingLoop = 0;

    if(x1===x2)
        return 'YES'
        
    while(true){
        breakingLoop++;
        x1+=v1
        x2+=v2
        if(x1===x2)
            return 'YES'
        
        if((x1<=x2 && v1<=v2) || (x2<=x1 && v2<=v1))
        return 'NO'
            
        if(breakingLoop>(10**10))
            break;     
    }
    return 'NO'
}