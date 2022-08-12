function hurdleRace(k, height) {
    // Write your code here
    let maxHeight;
    maxHeight= Math.max(...height)
    
    return maxHeight - k <= 0 ? 0 : maxHeight-k
}