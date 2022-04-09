const Manager = require("../lib/Manager");

describe("Manager Class", () => {
	describe("Initialize", () => {
		it("should get the manager's name", () => {
			const manager = new Manager("Jim", 11, "@gmail.com", 111);

			expect(manager.getName()).toEqual("Jim");
		});

		it("should get manger's id", () => {
			const manager = new Manager("Jim", 11, "@gmail.com");

			expect(manager.getId()).toEqual(11);
		});

		it("should get the manager's email", () => {
			const manager = new Manager("Jim", 11, "@gmail.com", 111);

			expect(manager.getEmail()).toEqual("@gmail.com");
		});

		it("should get manager's role", () => {
			const manager = new Manager("Jim", 11, "@gmail.com", 111);

			expect(manager.getRole()).toEqual("Manager");
		});
	});
});
