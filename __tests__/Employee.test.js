const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("returns the name, id, and email of the employee", () => {
            const obj = new Employee("employee name", "employee id", "employee email");

            expect(obj instanceof Employee).toEqual(true)
        });
   });
});