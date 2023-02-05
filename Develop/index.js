// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "Enter a description for your project:",
  },
  {
    type: "input",
    name: "Installation",
    message: "Enter instillation instructions for your project:",
  },
  {
    type: "input",
    name: "Usage",
    message: "Enter how to use your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT License", "Apache License 2.0", "BSD 2-Clause License", "GNU General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense", "Creative Commons Attribution 4.0 International (CC BY 4.0)"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Enter an explanation on how to contribute to your project:",
  },
  {
    type: "input",
    name: "Tests",
    message: "Enter examples of testing your project:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub username:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readme = `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out to me on GitHub at [${data.githubUsername}](https://github.com/${data.githubUsername}).
`;
  fs.writeFile("README.md", readme);
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();
