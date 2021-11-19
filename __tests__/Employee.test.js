const Employee = require("../lib/Employee");

let employee;

beforeEach(() => {
  employee = new Employee("Alex", 1, "alex@gmail.com");
});

test("create an engineer object", () => {
  expect(employee.name).toBe("Alex");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("alex@gmail.com");
});

test("get employee name", () => {
  expect(employee.getName()).toBe("Alex");
});

test("get employee id", () => {
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("get employee email", () => {
  expect(employee.getEmail()).toBe("alex@gmail.com");
});

test("get employee role", () => {
  expect(employee.getRole()).toBe("Employee");
});