// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectName}\n
[Repository](${answers.projectRepo})\n
## Description\n > ${answers.projectDescription}\n
## Installation\n > ${answers.projectInstallation}\n
## Usage\n > ${answers.projectUsage}\n
## Contribution\n > ${answers.projectContribution}\n
## License\n > ${answers.projectLicense}\n
## Contact Information\n > If you have questions about my project, please reach out to me on [GitHub](github.com/${answers.projectUsername}) or send me an e-mail at ${answers.projectEmail}.
`;
}

module.exports = generateMarkdown;
