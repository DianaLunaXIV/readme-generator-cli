// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const _ = require('lodash');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message:"What is your project's name?",
    },
    {
        type: 'input',
        name: 'projectRepo',
        message: "Where is your project repository?",
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide a description of your project here.',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Describe how to install your project.',
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(data);
        console.log('Your markdown file has been saved to the same directory as the generator. Thank you for using my program!');
    })
}

//generate section (key, value)
//key: section name | value: user input
//return ## capitalized Key \n\n value

//table of contents: loops over answers objects to create strings for capitalized bracket key
//use _.capitalize


// TODO: Create a function to initialize app
function init() {
    let answersResolved;
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        data = generateMarkdown(answers)
        writeToFile('test.md', data)
    });

    
}

// Function call to initialize app
init();
