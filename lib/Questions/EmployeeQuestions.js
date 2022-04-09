const baseQuestions = [
	{
		type: "list",
		name: "next",
		message: "What do you want to do next?",
		choices: ["Add Team Member", "Finish"],
	},
	{
		type: "list",
		name: "role",
		message: "What role do you want to add?",
		choices: ["Engineer", "Intern"],
        when(answers) {
            return answers.next === "Add Team Member";
        },
	},
];

module.exports = baseQuestions;
