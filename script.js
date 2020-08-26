const generateMd = require("./generateMarkdown")
const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your github name?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of you App?",
        name: "Title"
    },
    {
        type: "input",
        message: "Who did you work with?",
        name: "names"
    },
    {
        type: "list",
        message: "What did you use to create this App?",
        name: "Apps",
        choices: [
            "HTML",
            "JavaScript",
            "CSS",
            "Love",
            "React.js"
        ]
    },
    {
        type: "input",
        message: "Any Licenses?",
        name: "license"
    },
    {
        type: "input",
        message: "Who will use this App?",
        name: "forWho"
    },
    {
        type: "input",
        message: "Now! Decribe the app.",
        name: "description"
    },
    {
        type: "",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
     
]).then((inputs) => {
    let fileName = inputs.name.toLowerCase().trim().split(" ").join("") + ".json"
    console.log(inputs); 
    generateMd(inputs);
    let md = generateMd(inputs);
    console.log(md); 
    fs.writeFile("goodReadMe.md", md, (err) => {
        if (err) throw err;
        console.log("Now, Get working!!!");
    });
})