import inquirer from "inquirer"

const answer :{
numberone: number
numbertwo: number
operator: string
}= await inquirer.prompt([
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
        choices: ["+","-","*","/"] ,
        message: "select operator",
        }, 
])
const  {numberone, numbertwo, operator} = answer

if(numberone && numbertwo && operator){
    let result : number= 0
    if(operator==="+"){
      result=numberone+numbertwo
    }else if(operator==="-"){
           result = numberone-numbertwo
    }
        if(operator==="*"){
                let result = numberone*numbertwo
        }        
        }       
        if(operator==="/"){
                    let result = numberone/numbertwo
                }
else{
    console.log("Enter valid number")
}
