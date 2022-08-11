function catAndMouse(x, y, z) {
    let catA = Math.abs(z-x)
       //debugger
    let catB = Math.abs(z-y)
        //debugger
    return !(catA-catB) ? 'Mouse C' :
    catA > catB ? 'Cat B' : 'Cat A' 
}