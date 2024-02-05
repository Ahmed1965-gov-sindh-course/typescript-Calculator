import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Enter First Number",
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Enter Second Number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "select operator",
    },
]);

