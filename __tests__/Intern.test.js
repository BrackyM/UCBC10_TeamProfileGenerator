const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("returns the name, id, email, and school of the intern", () => {
            const obj = new Intern("employee name", "employee id", "employee email", "school");

            expect(obj instanceof Intern).toEqual(true)
        });
   });
});