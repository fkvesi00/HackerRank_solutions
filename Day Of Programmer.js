const isLeapYear = (year) =>{
    if(year>1919){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
    }else{
        if (0 == year % 4){
            return true
        }else{
            return false
        }
    }
}


function dayOfProgrammer(year) {
    // Write your code here
   if(year===1918){
       return `26.09.1918`
   }
   let result= isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`
    
    return result;
}
    