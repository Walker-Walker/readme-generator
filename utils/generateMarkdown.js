// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers.title);
  return `
          #Licence 
            ![Github licence](https://img.shields.io/badge/licence-${answers.license}-blue.svg)
  
          # title ${answers.title}
          ## Table of Contents
       [installation] (#installation)
        ${answers.description}
      
      ##installation 
      in order to install dependencies you will do the following ${answers.dependencies}



`;

}



module.exports = generateMarkdown;
