let stringArr = ['Dhaka', 'Bangladesh', 'Khulna']; 

let mixArr = ['ntm', 83, 'sas', 115]; 

// get error
//stringArr[0] = 115; 

// no error 
// supports union data type 
mixArr[0] = 1907
// facing issue 
// only supports number or string 
//mixArr.unshift(true);

// facing issue 
//stringArr = mixArr; 

// no issue 
mixArr = stringArr; 

// using type for array 
let stuName: string[] = []; 
stuName.push('ntm'); 

// tuple 
// specific position has specific type 
let myTuples: [string, number, boolean] = ['ntm', 83, true]; 

let arrTest = ['ntm', 83, true]; 

// no issue; 
arrTest = myTuples; 

// facing issue 
//myTuples = arrTest; 