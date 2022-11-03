// base class for others to build off
class Employee {
  constructor(id, email, name) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
