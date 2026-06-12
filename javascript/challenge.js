/*
const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Mary", salary: 70000, department: "HR" },
    { name: "Alex", salary: 45000, department: "IT" },
    { name: "Sara", salary: 80000, department: "Finance" }
Use map() to get all employee names.
Use filter() to get employees from "IT".
Use reduce() to calculate the total salary.
Use filter() and map() together to get names of employees earning more than 50000.
Use reduce() to find the employee with the highest salary.
];
*/

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Mary", salary: 70000, department: "HR" },
    { name: "Alex", salary: 45000, department: "IT" },
    { name: "Sara", salary: 80000, department: "Finance" }
];

const employeesName = employees.map((employee)=>{
    return employee.name;
});
console.log(employeesName);

const itEmployee = employees.filter((employee) => {
    return employee.department == "IT"
});
console.log(itEmployee);


const earnEmployees = employees.filter((employee) => {
    return employee.salary > 50000 
})
console.log(earnEmployees);

const highestPaidEmployee  = employees.reduce((acc,employee) => {
    acc = Math.max(acc,employee.salary);
    return acc;
},0);   

console.log("The Highest Employee salary : " + highestPaidEmployee);