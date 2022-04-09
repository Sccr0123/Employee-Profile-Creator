const Intern = require("../lib/Intern");

describe("Intern Class", () => {
	describe("Initialize", () => {
		it("should get the intern's name", () => {
			const intern = new Intern("Jim", 11, "@gmail.com", "MIT");

			expect(intern.getName()).toEqual("Jim");
		});

		it("should get intern's id", () => {
			const intern = new Intern("Jim", 11, "@gmail.com");

			expect(intern.getId()).toEqual(11);
		});

		it("should get the intern's email", () => {
			const intern = new Intern("Jim", 11, "@gmail.com", "MIT");

			expect(intern.getEmail()).toEqual("@gmail.com");
		});

		it("should get intern's school", () => {
			const intern = new Intern("Jim", 11, "@gmail.com", "MIT");

			expect(intern.getSchool()).toEqual("MIT");
		});

		it("should get intern's role", () => {
			const intern = new Intern("Jim", 11, "@gmail.com", "MIT");

			expect(intern.getRole()).toEqual("Intern");
		});
	});
});
