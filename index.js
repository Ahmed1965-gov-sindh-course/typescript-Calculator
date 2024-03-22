#! /usr/bin/env  node
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
const { numberone, numbertwo, operator } = answer;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    if (operator === "*") {
        result = numberone * numbertwo;
    }
    if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("your result is", result);
}
else {
    console.log("Enter valid number");
}
