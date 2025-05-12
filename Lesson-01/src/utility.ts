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
type AssignmentResult = Pick<Assignment, "studentId" | "grade">
const score: AssignmentResult = {
    studentId: "ntm",
    grade: 100
}

type AssignmentPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignmentPreview = {
    studentId: "ntm", 
    title: "Test Project"
}

/****************** Exclude & Extract *******************/
type adjustGrades = Exclude<LetterGrades, "U"> // represents "A", "B", "C", "D" 
type highGrades = Extract<LetterGrades, "A" | "B"> // represents "A", "B"

/****************** NonNullable *******************/
type AllPossibleGrades = "ntm" | "sas" | null | undefined; 
type NamesOnly = NonNullable<AllPossibleGrades> // represents "ntm" | "sas" 

/****************** ReturnType *******************/
type newAssign = {title: string, point: number}
const createNewAssign = (title: string, point: number): newAssign => {
    return {title, point};
}

type newAssign2 = ReturnType<typeof createNewAssign> 
const tAssign: newAssign2 = createNewAssign("Utility Types", 100)
console.log(tAssign);


/****************** Parameters *******************/
type AssignParams = Parameters<typeof createNewAssign> 
const assignArgs: AssignParams = ["Image Processing Project", 100]; 
const tAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tAssign2); 

/****************** Awaited-> helps with the return type of Promise *******************/
interface User{
    id: number, 
    name: string, 
    username: string, 
    email: string 
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users') 
                            .then(res=>{
                                return res.json()
                            })
                            .catch(err=>{
                                if(err instanceof Error){
                                    console.log(err.message)
                                }
                            })

                return data; 
    
}

// But here return type is Promise 
// type FetchUsersReturnType = Promise<User[]>
// But we need Users[] array 
// type FetchUsersReturnType = ReturnType<typeof fetchUsers>

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(users => console.log(users)); 