var fs = require ("fs");
var inquirer = require ("inquirer");
var shields = require ("shields");
const generate = require ("./generateMarkdown");  
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

    function init() {
        return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your program?",
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your program?",
    },
    {
        type: "list",
        name: "license",
        message: "Select a license type:",
        choices: [ "MIT", "Apache 2.0", "Unlicense", "GPLv3", "AGPLv3", "MPL 2.0", "Boost 1.0"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can people contribute to your project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Describe any accompanying tests you have programmed and how to run them. ",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github user name."
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    }
]);
};

// function call to initialize program
init()
// function to write README file
    .then(function(data) {
       const md = generate(data);

        return writeFileAsync("readMe.md", md);
    })
    .then(function() {
        console.log("Successfully wrote to readMe.md");
    })
    .catch(function(err) {
        console.log(err);
    })


// function to initialize program
//function init() {
//}

//MIT License \n GNU GPLv3 \n GNU AGPLv3 \n Mozilla Public License 2.0 \n Apache License 2.0 \n Boost Software License \n The Unlicense


