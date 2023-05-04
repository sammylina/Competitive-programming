function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = [];
    let i;
    
    for (i in grades) {
        let grade = grades[i];
        
        if (grade >= 38 && ((grade % 5) >= 3)) {
                const addUp = 5 - (grade % 5);
                roundedGrades.push(grade + addUp)
        }
        else {
            roundedGrades.push(grade)
        }
    }
    return roundedGrades;
}
