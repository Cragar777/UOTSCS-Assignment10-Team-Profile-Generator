const { expect, test } = require("@jest/globals");
const Intern = require("../lib/Intern");

let intern;

beforeEach(() => {
  intern = new Intern("Lisa", 1, "lisa@email.com", "University of Toronto");
});

test("create intern object", () => {
  expect(intern.name).toBe("Lisa");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("lisa@email.com");
  expect(intern.school).toBe("University of Toronto");
});

test("get intern's school", () => {
  expect(intern.getSchool()).toBe("University of Toronto");
});

test("get intern's role", () => {
  expect(intern.getRole()).toBe("Intern");
});