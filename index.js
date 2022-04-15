
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/utils/generateMarkdown.js');

function askPrompt(){
inquirer
  .prompt([
    {
      type: 'input', 
      name: 'title',
      message: 'What is the project title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a brief description of this application:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is this application used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How would you like others to make contributions to this application?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are ways to test the application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license that you would like your project to use:',
        choices: ['None','MIT', 'Apache', 'GPL' ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    }
  ])
  .then((answers) => {

    console.log(answers);
    writeToFile(generateMarkdown, answers);
    })
};

const questions = [];

function writeToFile(fileName, data) {
    const markdownFile = fileName(data);
    
    fs.writeFile('README.md', markdownFile,(err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
  
      })
}


function init() {
    inquirer
  .prompt([
    {
      type: 'list', 
      name: 'WriteFile',
      message: 'Would you like to write the ReadMe file?',
      choices: ['Yes', 'No' ],
    },
]) 
.then((answers) => {
    if(answers.WriteFile == 'Yes'){
        askPrompt();
    } else{
        console.log('User does not wish to write to ReadMe file.');
        return;
    }
})
}

init();
