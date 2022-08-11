function utopianTree(n) {
    // Write your code here
    let cnt=0;
    let h=1
    while(n){
        cnt % 2 == 0 ? h*=2 : h+=1
        cnt++; n--;
    } 
    return h;
}
