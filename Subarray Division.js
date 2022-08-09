
const birthday = (s, d, m) => {
    // Write your code here
    
    let cnt=0;
    for(let i=0;i+m<=s.length;i++){

        let sum=0;        
        let j=0;
        while(j<m){
            
            sum+=s[i+j];
            j++;
        }
        //debugger
        if(sum===d)
            cnt++
    }
    return cnt
} 