function gradingStudents(grades) {
    // Write your code here
    const n=grades[0]
    const justGrades = grades.filter((el,i) => i!==0)
    
    console.log(justGrades)
    const roundingSistem = justGrades =>{
       justGrades= justGrades.map(el => {
            let acc=40;
            if(el<38)
                return el
            while(acc<101){
                if(acc>el){
                if((acc-el)<3){
                    el = acc
                }
                }
                debugger
                acc+=5

            }
            return el
       })
       return justGrades
    }
    return roundingSistem(justGrades)
}

gradingStudents([4, 55, 90, 78, 11, 38, 40, 69])
