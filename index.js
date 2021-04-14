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
    let formattedProjectName = `# ${answers.projectName}\n`;
    let formattedProjectRepo = `[Repository](${answers.projectRepo})\n`;
    let formattedDataForMD = formattedProjectName + formattedProjectRepo;
    return formattedDataForMD;
}

// TODO: Create a function to initialize app
function init() {
    let answersResolved;
    inquirer.prompt(questions)
    .then(answers => {
        answersResolved = formattedData(answers)
        writeToFile('test.md', answersResolved)
    });

    
}

// Function call to initialize app
init();
