// imports all of the required packages and functions 
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown =require('./utils/generateMarkdown')

    //this is where all of the prompts to the user come from 
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your app.',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please provide an accurate description of your app.',
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Does your app have any installation requirements?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'What is the main use of your app?',
          },
          {
            type: 'list',
            name: 'license',
            message: 'Please choose the liscense of your app.',
            choices: ['MIT', 'GPL', 'Apache 2.0', 'CDDL-1.0'],
            default: 'MIT',
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Who has contributed to your app?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Has your app had any testing?',
          },
    ]);
}

// INIT function that initializes the App
const init = () => {
        questions()
          .then((answers) => writeFile('README.md', generateMarkdown(answers)))
          .then(() => console.log('Your professional README has been generated!'))
      };

// The call for the INIT
init();