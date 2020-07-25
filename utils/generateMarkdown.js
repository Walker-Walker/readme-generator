// function to generate markdown for README
function generateMarkdown(answers) {


  function spaceChecker(answers) {
    if (answers.license.includes(" ")) {
     answers.license = answers.license.replace(" ", "%20")
    } 
  }
  spaceChecker(answers);


  return `
          
  # ${answers.title}
    
  # License 
  
  ![Github license](https://img.shields.io/badge/licence-${answers.license}-blue.svg)
  
  # Table of Contents

  [License](#license)  
  
  [Description](#description)

  [Installation](#installation)  

  [Usage](#usage)

  [Contribution](#contribution)

   
  # Description
 
  ${answers.description}
  
  # Installation 

  In order to install dependencies you will do the following ${answers.dependencies}

  # Usage
 
  ${answers.usage}
  
  # Contribution
  
  ${answers.contribute}

  # Tests
  
  \`${answers.tests}\`

  # Questions 

  If you have any questions please visit my [GitHub](https://github.com/${answers.name}/) or Email me directly at <${answers.email}>
`;
}

module.exports = generateMarkdown;
