//skip to line 1933 for actual code
const licenseText = require('./licenseText');
const _ = require('lodash');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `https://img.shields.io/badge/license-AGPLv3-blue.svg`;
    case 'GNU GPLv3':
      return `https://img.shields.io/badge/license-GPLv3-blue.svg`;
    case 'MIT':
      return `https://img.shields.io/badge/license-MIT-green.svg`;
    case 'Apache License 2.0':
      return `https://img.shields.io/badge/license-Apache_2.0-red.svg`;
    case 'Mozilla Public License 2.0':
      return `https://img.shields.io/badge/license-MPL_2.0-orange.svg`;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `https://choosealicense.com/licenses/agpl-3.0/`;
    case 'GNU GPLv3':
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;
    case 'Apache License 2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case 'Mozilla Public License 2.0':
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return licenseText.AGPLv3;
    case 'GNU GPLv3':
      return licenseText.GPLv3;
    case 'MIT':
      return licenseText.MIT;
    case 'Apache License 2.0':
      return licenseText.Apache;
    case 'Mozilla Public License 2.0':
      return licenseText.MPL;
    default:
      return ''
  }
}

function renderTableOfContents(answers) {
  let tableOfContents = ` 1. [${answers.projectName}](#${answers.projectName.toLowerCase()})\n
  2. [Description](#description)\n
  3. [Installation](#installation)\n
  4. [Usage](#usage)\n
  5. [License](#license)\n
  6. [Contact](#contact)\n
  `;
  return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let licenseBadge = renderLicenseBadge(answers.projectLicense);
  let licenseLink = renderLicenseLink(answers.projectLicense);
  let licenseSection = renderLicenseSection(answers.projectLicense);
  let toc = renderTableOfContents(answers);
  return `# ${answers.projectName}\n
![${answers.projectLicense}](${licenseBadge})\n
[Repository](${answers.projectRepo})\n
## Table of Contents\n ${toc}\n
## Description\n > ${answers.projectDescription}\n
## Installation\n > ${answers.projectInstallation}\n
## Usage\n > ${answers.projectUsage}\n
## Contribution\n > ${answers.projectContribution}\n
## License\n [${answers.projectLicense}](${licenseLink})\n
${licenseSection}\n
## Contact\n > If you have questions about my project, please reach out to me on [GitHub](github.com/${answers.projectUsername}) or send me an e-mail at ${answers.projectEmail}.
`;
}

module.exports = generateMarkdown;
