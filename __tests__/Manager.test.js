const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("returns the name, id, email, and office number of the manager", () => {
            const obj = new Manager("employee name", "employee id", "employee email", "office number");

            expect(obj instanceof Manager).toEqual(true)
        });
   });
});