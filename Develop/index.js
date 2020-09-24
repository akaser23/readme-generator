const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is your project title? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe usaeg inforamtion.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What contribution guidlines do you have?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please give test instructions'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which licence did you use for your application?',
            choices: ['Perpetual', 'Floating', 'Subscription']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your Github profile link.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your perfered email address.'
        }
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
