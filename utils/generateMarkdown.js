// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers.title);
  return `
          
  # ${answers.title}
  ## Description
  ${answers.description}
  
  #License 
  ![Github license](https://img.shields.io/badge/licence-${answers.license}-blue.svg)
  
          
   ## Table of Contents
   [installation] (#installation)
        ${answers.description}
       ##Installation 
      In order to install dependencies you will do the following ${answers.dependencies}
    [usage] (#usage)
      ##Usage
    ${answers.usage}
     [Usage](#usage)
     [Credits](#credits)
     [License](#license)


`;
}

module.exports = generateMarkdown;
