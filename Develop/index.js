const fs = require('fs');

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },
        {
            type: 'input',
            name: 'instalation',
            message: 'Please give instalation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe usage inforamtion.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What contribution guidelines do you have?'
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
            choices: ['![APM](https://img.shields.io/badge/APM-MIT-green)', 
                    '![AUR](https://img.shields.io/badge/AUR-Apache-blue)', 
                    '![Bower](https://img.shields.io/badge/Bower-MIT-green)', 
                    '![Cocoapods](https://img.shields.io/badge/Cocoapods-MIT-%23373737)', 
                    '![Conda](https://img.shields.io/badge/Conda-MIT-green)', 
                    '![CPAN](https://img.shields.io/badge/CPAN-lgpl__2__1-blue)', 
                    '![CRAN/METACRAN](https://img.shields.io/badge/CRAN-GPL%20(%3E%3D%202)-blue)', 
                    '![Crates.io](https://img.shields.io/badge/Crates-MIT%2FApache--2.0-blue)', 
                    '![CTAN](https://img.shields.io/badge/CTAN-ppl1.3c%2C%20ofl-lightgrey)', 
                    '![DUB](https://img.shields.io/badge/DUB-MIT-green)', 
                    '![Eclipse](https://img.shields.io/badge/Eclipse-GPL-blue)', 
                    '![Github](https://img.shields.io/badge/Github-MIT-green)', 
                    '![Hex](https://img.shields.io/badge/Hex-Apache%202-blue)', 
                    '![NPM](https://img.shields.io/badge/NPM-MIT-green)', 
                    '![Packagist](https://img.shields.io/badge/Packagist-MIT-green)', 
                    '![PyPI](https://img.shields.io/badge/PyPI-BSD-green)']
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
const writeFile = fileContent => {

    const readmeData = generateMarkdown(fileContent); 

    return new Promise((resolve, reject) => {
        fs.writeFile('./README.md', readmeData, err => {
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
    .then(questionData => {
        return writeFile(questionData);
    });
    // .then(data => {
    //     return generateMarkdown(data);
    // });
};

// function call to initialize program
init();
