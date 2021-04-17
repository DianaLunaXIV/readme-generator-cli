// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Describe how to use your project.',
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'Tell users how they can contribute to your project.',
    },
    {
        type: 'list',
        name: 'projectLicense',
        choices: ["GNU AGPLv3", "GNU GPLv3", "MIT", "Apache License 2.0", "Mozilla Public License 2.0"],
        message: 'Which software license do you want to apply to your project?',
    },
    {
        type: 'input',
        name: 'projectUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'What is your e-mail address?',
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


// TODO: Create a function to initialize app
function init() {
    let answersResolved;
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        data = generateMarkdown(answers)
        writeToFile('README.md', data)
    });

    
}

// Function call to initialize app
init();
