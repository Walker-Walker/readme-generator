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
    validate: input => {
      if(input === ""){ 
        console.log("Please enter a GitHub User Name")
        return false   
      } else {
        return true
      } 
      
  }
  },

  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: input => {
      if(input.includes("@") && input){ 
        return true
      } else {
        console.log('\nplease enter a valid email')
        return false
      }

    }
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
    validate: input => {
      if(input === "") { 
        console.log('Please enter description')
        return false
      } else {
        return true
      }

  }
},
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: input => {
      if(input === ""){ 
        console.log('\nplease enter project title')
        return false
      } else {
        return true
      }
  }
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be entered to install dependencies?",
    validate: input => {
      if(input === ""){ 
       console.log('please enter command to install dependencies')
        return false
      } else {
        return true
      }
  }
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be entered to run tests?",
    validate: input => {
      if(input === "") { 
        console.log('please enter command for test running')
        return false
      } else {
        return true
      }
  }
  },
  {
    type: "input",
    name: "contribute",
    message: "How do you contribute to the repo?",
    validate: input => {
      if(input === "" ){ 
        console.log('please describe how to contribute to the repo')
        return false
      } else {
        return true
      }
  }
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
    validate: input => {
      if(input === ""){ 
        console.log('please describe any additional tips for using the repo')
        return false
      } else{
        return true
      }
  }
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

