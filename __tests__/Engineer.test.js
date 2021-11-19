const Engineer = require("../lib/Engineer");

let engineer;

beforeEach(() => {
  engineer = new Engineer("Alex", 1, "alex@gamil.com", "alexgit");
});

test("create an engineer object", () => {

  expect(engineer.name).toBe("Alex");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("alex@gamil.com");
});

test("get engineers github username", () => {

  expect(engineer.githubUsername).toBe("alexgit");
});

test("get engineers role", () => {

  expect(engineer.getRole()).toBe("Engineer");
});