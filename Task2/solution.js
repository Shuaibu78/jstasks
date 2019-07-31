// this an object with the name values
const values = {
    firstName: "shuaibu",
    surnName: "Muhammad",
    department: "computer science",
    nickName: "freezzemx"
}

// Destructuring object
const {firstName:fn, surnName:sn, department:dp, nickName:nn} = values;

// outputing using console.log
console.log(`my name is ${fn} ${sn} and i am from ${dp} department`);