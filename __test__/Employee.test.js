const Employee = require("../lib/Employee");

describe("Employee Class", () => {
	describe("Initialize", () => {
		it("should get the employee name", () => {
			const employee = new Employee("Jim", 11, "@gmail.com");

			expect(employee.getName()).toEqual("Jim");
		});
		
		it("should get employee's id", () => {
			const employee = new Employee("Jim", 11, "@gmail.com");

			expect(employee.getId()).toEqual(11);
		});

		it("should get the employee email", () => {
			const employee = new Employee("Jim", 11, "@gmail.com");

			expect(employee.getEmail()).toEqual("@gmail.com");
		});		

		it("should get employee's role", () => {
			const employee = new Employee("Jim", 11, "@gmail.com");

			expect(employee.getRole()).toEqual("Employee");
		});
	});
});
