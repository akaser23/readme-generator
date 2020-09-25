const fs = require('fs');

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
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
            name: 'github',
            message: 'Enter your Github profile link.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your perfered email address.'
        },
        {
            type: 'input',
            name: 'contact',
            message: 'Please give instructions on how to contact you.'
        }
    ])
};

// function to write README file
const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
        fs.writeToFile('./README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadMe Created!'
            });
        });
    });
};

// function to initialize program
const init = () => {
    questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(fileContent => {
        return writeToFile(fileContent);
    });
};

// function call to initialize program
init();
