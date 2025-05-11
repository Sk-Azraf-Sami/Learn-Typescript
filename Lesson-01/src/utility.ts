/****************** Partial *********************/
interface Assignment{
    studentId: string;
    title: string; 
    grade: number; 
    verified?: boolean 
}

// not passing all of the props by using 'Partial' utility 
const updateAssignment = (assign: Assignment, 
    propsToUpdate:Partial<Assignment>) : Assignment => {
        return {...assign, ...propsToUpdate}; 
    }

const assign1: Assignment = {
    studentId: "ntm", 
    title: "Computer Graphics", 
    grade: 90
}
console.log(updateAssignment(assign1,{grade: 100})); 
const assignGraded: Assignment = updateAssignment(assign1, {grade: 100}); 



/****************** Required and Readonly *******************/

// Required: all of the properties are required even optional property like 'verified'
const recordAssignment = (assign:Required<Assignment>): Assignment => {
    // send to database, etc. 
    return assign; 
}

const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}; 
// get Error 
// because assignVerified is Readonly 
// assignVerified.grade = 90; 

recordAssignment({...assign1, verified: true});


/****************** Record *******************/
// Record<string,string>
// key --> string 
// value --> string 
const hexColorMap: Record<string,string>= {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type studentName = "azraf" | "sami"
type LetterGrades = "A" | "B" | "C" | "D" | "U"; 
const finalGrades: Record<studentName, LetterGrades> = {
    azraf: "A",
    sami: "B"
}

// another example 
interface Grades {
    assign1: number, 
    assign2: number
}
const gradeData: Record<studentName, Grades> = {
    azraf: {assign1: 90, assign2: 93}, 
    sami: {assign1: 85, assign2: 98}
}

/****************** Pick & Omit *******************/
