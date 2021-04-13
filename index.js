// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log(data);
        console.log('The file has been saved!');
    })
}

const formattedData = (answers) => {
    let formattedProjectName = `#\n${answers.projectName}`;
    let formattedProjectRepo = `[Repository](${answers.projectRepo})`;
    let formattedDataForMD = formattedProjectName + formattedProjectRepo;
    return formattedDataForMD;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('test.md', formattedData(JSON.stringify(answers))));
    
}

// Function call to initialize app
init();
