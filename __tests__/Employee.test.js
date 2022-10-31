const Employee = require("../lib/Employee");

test("Employee" , () => {
    const employee = new Employee()
    expect(typeof(employee).toBe("object"))
})