// TODO: Include packages needed for this application
// this is where I require the fs and inquirer as well as the markdown page
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// below are the questions that are asked the user in the console to create the readme
function questions(){ 

return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Name of Project.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use for this application?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are you contributing?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you run a test?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['Apache 2.0', 'The MIT', 'Monzilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email address?'
    }
])
// this is where the readme is generated
.then((answers) => {
    console.log(answers)
    const getContent = generateMarkdown(answers);
    fs.writeFile('ProjectReadMe.md', getContent, (err) =>
      err ? console.error(err) : console.log('Success!'));
}
)}

// This is where the code is ran and prompts the user once it is initilized
function init() {
    try {
        questions();
    }
    catch(err) {
        console.log(err);
    }
}

// Function call to initialize app
init();

