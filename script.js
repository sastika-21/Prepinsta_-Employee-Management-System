// Define an object template for an employee
class Employee {
    constructor(name, age, department, salary) {
      this.name = name;
      this.age = age;
      this.department = department;
      this.salary = salary;
    }
  }
  
  // Calculate Average Salary
  function calculateAverageSalary(employees) {
    const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    return totalSalary / employees.length;
  }
  
  // Find Employees in a Department
  function findEmployeesInDepartment(employees, department) {
    return employees.filter(emp => emp.department === department);
  }
  
  // Increase Salary for Employees
  function increaseSalary(employees, percentage) {
    employees.forEach(emp => {
      emp.salary += (emp.salary * percentage) / 100;
    });
  }
  
  // Sort Employees by Age
  function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
  }
  
  // Sample employee data
  const employees = [
    new Employee('John', 30, 'HR', 50000),
    new Employee('Jane', 35, 'Finance', 60000),
    new Employee('Doe', 25, 'IT', 55000),
    new Employee('Smith', 40, 'HR', 70000)
  ];
  
  // Test the functions
  console.log("Average Salary:", calculateAverageSalary(employees));
  console.log("Employees in HR department:", findEmployeesInDepartment(employees, 'HR'));
  increaseSalary(employees, 10);
  console.log("Employees after salary increase:", employees);
  console.log("Employees sorted by age:", sortEmployeesByAge(employees));
  