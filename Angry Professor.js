function angryProfessor(k, a) {
    // Write your code here
    a = a.filter(el => el <= 0)
    
    return a.length < k ? 'YES' : 'NO' 
}