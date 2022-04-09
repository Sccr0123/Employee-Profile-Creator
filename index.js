var inquirer = require("inquirer");

var employees = [];

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
const actionQuestions = require("./lib/Questions/ActionQuestions")

function addEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        console.log(answers);
        console.log("Added Engineer");
    });
    
};

function addIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        console.log(answers);
        console.log("Added Intern");
    });
    
};

function addEmployee() {
    inquirer.prompt(employeeQuestions).then((answers) => {
        console.log(answers);
        console.log("Added Employee");
    });
    
}

async function init() {
    await inquirer.prompt(managerQuestions).then((answers) => {
        const newEmployee = new Manager(
			answers.manager.name,
			answers.manager.id,
			answers.manager.email,
			answers.manager.officeNumber
		);
        employees.push(newEmployee); 
    });

    var completed = false;

    while (completed != true) {
        await inquirer.prompt(actionQuestions).then((answers) => {
            if (answers.next === "Finish") {
                completed = true;
            };

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
                    break;
			};
        });
    };

    console.log(employees);
};

//Run Function On Startup
init()