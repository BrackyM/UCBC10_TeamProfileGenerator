const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("returns the name, id, email, and GitHub of the engineer", () => {
            const obj = new Engineer("employee name", "employee id", "employee email", "github");

            expect(obj instanceof Engineer).toEqual(true)
        });
   });
});