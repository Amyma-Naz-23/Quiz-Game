#! /usr/bin/env node

import inquirer from "inquirer"
console.log("\n \t Welcome To Typescipt Quize Game\t \n");
  
let name = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Enter your name"
    }
])



const quiz:{
    question_1 :string
    question_2 :string
    question_3 :string
    question_4 :string
    question_5 :string
} = await inquirer.prompt([
    {
        name:"question_1",
        type:"list",
        message:"Q1. What is tha correct way to check if two values are not equal in typescript",
        choices:["a == b","a === b","a = b","a !== b"]
    },
    {
        name:"question_2",
        type:"list",
        message:"Q2. Which of tha following characters is commonly allowed in variable name in typescript",
        choices:["$","@","#","&"]
    }, 
    {
        name:"question_3",
        type:"list",
        message:"Q3.Which operoter is commonly used for string  concatenation in typescript",
        choices:["+","-","*","$"]
    },
    {
        name:"question_4",
        type:"list",
        message:"Q4. In typescript ,which symbol is commonly used to terminate a statement?",
        choices:[".",":",";",","]
    },
    {
        name:"question_5",
        type:"list",
        message:"Q5. Which method of inquirer .js is used to start tha prompt interface and receive user input ",
        choices:["start()","prompt()","init()","run()"]
    },
])

let score: number = 0;
switch(quiz.question_1){
    case "a !== b":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1.Inncorrect");
}
switch(quiz.question_2){
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2.Inncorrect");
}
switch(quiz.question_3){
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3.Inncorrect");
}
switch(quiz.question_4){
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4.Inncorrect");
}
switch(quiz.question_5){
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5.Inncorrect");
}
console.log(` \n${name.name} score is : ${score}\n`);
console.log("The End!")