// Includes packages needed for this application
const importMarkdown = require('./utils/generateMarkdown'); //imports function
const fs = require('fs');
const inquirer = require('inquirer');




// Creates a function to write README file //parameter (placeholder)
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("success"))
}

// Creates a function to initialize app
function init() { 
    inquirer
    .prompt([
        //Creates an array of objects of questions for user input
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'How would you desribe the application/website',
            name: 'description',

        },
        {
            type: 'input',
            message: 'How do you install the application/website?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do you use it',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license would you like to use?',
            name: 'license',
            choices: ['ISC', 'MIT']
        },
        {
            type: 'input',
            message: 'Who worked on this application/website?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'What is your GitHub username',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What email should be used for future contact?',
            name: 'email'
        }
    ])
    .then((data) => {
        const markDown = importMarkdown(data) //creates a Markdown string
        writeToFile("README.md", markDown)// argument
        console.log(markDown) //shows up on terminal
    })
    
}


// Function call to initialize app
init();

