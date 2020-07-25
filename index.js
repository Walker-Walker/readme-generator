//function to accept user input
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");
// array of questions for user
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your Github User Name?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be entered to install denpendencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be entered to run tests?",
  },
  {
    type: "input",
    name: "contribute",
    message: "How do you contribute to the repo?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "list",
    message: "What is your prefferred license?",
    name: "license",
    choices: ["BSD 3", "GPL 3.0", "APACHAE 2.0", "MIT"],
  },
];

// function to write README file

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// function to initialize program
function init() {
  console.log(process.cwd());
  var inquirer = require("inquirer");
  inquirer
    .prompt(questions)
    .then((answers) => {
      const {
        name,
        email,
        description,
        title,
        dependencies,
        tests,
        contribute,
        usage,
      } = answers;
      console.log(answers);

      writeToFile("README.md", generateMarkdown(answers));
    })

    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
}

// function call to initialize program
init();
// console.log(answers , "User Answers as follows")
