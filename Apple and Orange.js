
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const checkDistance = (arr) =>{
    arr = arr.filter(el => {
        return el>=s && el<=t 
    })
    return arr.length
}
    
    distanceApples = apples.map(el => el+a)
    distanceOranges = oranges.map(el => el+b)
    
    let numberOfApples = checkDistance(distanceApples)
    let numberOfOranges = checkDistance(distanceOranges)
    
    console.log(numberOfApples)
    console.log(numberOfOranges)
}

countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]) 