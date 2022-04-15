const inquirer = require("inquirer");
const fs = require("fs");

//Import Roles
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//Import Questions
const employeeQuestions = require("./lib/Questions/EmployeeQuestions");
const engineerQuestions = require("./lib/Questions/EngineerQuestions");
const internQuestions = require("./lib/Questions/InternQuestions");
const managerQuestions = require("./lib/Questions/ManagerQuestions");
const actionQuestions = require("./lib/Questions/ActionQuestions");


const generateHTML = require("./lib/generateHTML");

var employees = [];

function addManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const newManager = new Manager(
            answers.manager.name,
            answers.manager.id,
            answers.manager.email,
            answers.manager.officeNumber
        );

        employees.push(newManager);

        addAnother();
    });
};

function addEngineer() {
	inquirer.prompt(engineerQuestions).then((answers) => {
        const newEngineer = new Engineer(
			answers.engineer.name,
			answers.engineer.id,
			answers.engineer.email,
			answers.engineer.github
		);
		employees.push(newEngineer);
        
        addAnother();
    });


}

function addIntern() {
	inquirer.prompt(internQuestions).then((answers) => {
		const newIntern = new Intern(
			answers.intern.name,
			answers.intern.id,
			answers.intern.email,
			answers.intern.school
		);
		employees.push(newIntern);

		addAnother();
	});
}

function addEmployee() {
	inquirer.prompt(employeeQuestions).then((answers) => {
		const newEmployee = new Employee(
			answers.employee.name,
			answers.employee.id,
			answers.employee.email,
		);
		employees.push(newEmployee);

		addAnother();
	});
}

function addAnother() {
    inquirer.prompt(actionQuestions).then((answers) => {
        switch (answers.role) {
            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            case "Employee":
                addEmployee();
                break;

            default:
                if (answers.next === "Finish") {

                    print();
                } else {
                    console.log("Error");
                    break;
                }
        };
    });

};

function print() {

    var content = generateHTML(employees);

    try {
        fs.writeFileSync("index.html", content);
        console.log("HTML Generated!!!");
	} catch (err) {
		console.error(err);
	}
        
	
        
    process.exit(1);
}

function init() {
    addManager();
};
//Run Function On Startup

init();








