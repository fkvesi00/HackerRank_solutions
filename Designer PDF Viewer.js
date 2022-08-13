function designerPdfViewer(h, word) {
    // Write your code here
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let i=0;

    let newArr = [];
    let result = [];
    while(i<alphabet.length){
        newArr.push(alphabet[i])
        newArr.push(h[i])
        //debugger
        i++;
        //debugger
    }
    //debugger
    word = word.split('');
    
    word.map(el => {
    //debugger    
    for(let j=0;j<newArr.length;j+=2){
            //debugger
            if(el===newArr[j]){
                newest.push(newArr[j+1]);
                break;
            } 
        }
        //debugger
    })
   return (Math.max(...newest) * word.length)
} 