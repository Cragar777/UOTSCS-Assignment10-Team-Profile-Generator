const Manager = require("../lib/manager");

let manager;

beforeEach(() => {
  manager = new Manager("Monique", 1, "moni@email.com", "416-742-2874");
});

test("create a manager object", () => {
  expect(manager.name).toBe("Monique");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("moni@email.com");
});

test("get manager's office number", () => {
  expect(manager.officeNumber).toBe("416-742-2874");
});

test("get manager's role", () => {
  expect(manager.getRole()).toBe("Manager");
});