// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questionss for user input
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
  return fs.writeFileSync(fileName, JSON.stringify(data));
}
function init() {
  inquirer.prompt(questions).then((response) => {
    const readme = `
# ${questions.title}

## Description
${questions.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${questions.installation}

## Usage
${questions.usage}

## License
This project is licensed under the ${questions.license}.

## Contributing
${questions.contributing}

## Tests
${questions.tests}

## Questionss
If you have any questionss, feel free to reach out to me on GitHub at [${questions.githubUsername}](https://github.com/${questions.githubUsername}).
`;
    // TODO: Create a function to initialize app
    console.log(readme);
    writeToFile("README.md", readme);
  });
}

// Function call to initialize app
init();
