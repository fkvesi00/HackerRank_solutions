function flatlandSpaceStations(n, c) {

    let distances=[]
    for(let i=0 ; i<n ; i++){
        let min=Math.abs(i-c[0])
        //debugger
        for(let j=0 ; j<c.length ; j++){
            if( Math.abs(i-c[j]) <min){
                min=Math.abs(i-c[j])
            }
        }
        //debugger
        distances.push(min)
    }
    return Math.max(...distances)
}