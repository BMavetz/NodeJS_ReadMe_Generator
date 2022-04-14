// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
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
        choices: ['MIT', 'Apache', 'GPL' ],
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
    // const HTMLfile = pageCreate(answers);
    // console.log(HTMLfile);
    // fs.writeFile('index.html', HTMLfile,(err) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("success");
    //     }

    //  })

    })


const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
