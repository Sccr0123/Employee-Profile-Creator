const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
	describe("Initialize", () => {
		it("should get the engineer's name", () => {
			const engineer = new Engineer("Jim", 11, "@gmail.com", "github.com");

			expect(engineer.getName()).toEqual("Jim");
		});

		it("should get engineer's id", () => {
			const engineer = new Engineer("Jim", 11, "@gmail.com");

			expect(engineer.getId()).toEqual(11);
		});

		it("should get the engineer's email", () => {
			const engineer = new Engineer("Jim", 11, "@gmail.com", "github.com");

			expect(engineer.getEmail()).toEqual("@gmail.com");
		});

		it("should get engineer's Git Hub", () => {
			const engineer = new Engineer("Jim", 11, "@gmail.com", "github.com");

			expect(engineer.getGitHub()).toEqual("github.com");
		})

		it("should get engineer's role", () => {
			const engineer = new Engineer("Jim", 11, "@gmail.com", "github.com");

			expect(engineer.getRole()).toEqual("Engineer");
		});
	});
});
