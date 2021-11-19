const inquirer = require('inquirer');
const fs = require("fs");
const generateSite = require('./src/page-template.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");


const inputManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Your name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('You are required to enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address: ',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Your email address is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter the number of your office: ',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('The number of your office is required');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        inputMenu();
    })
};

const inputMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select an action from below:',
            choices: ['Add Engineer to team', 'Add Intern to team', 'My team is complete']
        }])
        .then(userChoice => {
            switch (userChoice.menu) {
                case "Add Engineer to team":
                    inputEngineer();
                    break;
                case "Add Intern to team":
                    inputIntern();
                    break;
                default:
                    createTeam();
            }
        });
};

const inputEngineer = () => {
    console.log(`
    Add Engineer to team
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Engineers name: ',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('The Engineers name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the Engineers employee ID: ',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Enter your employee ID: ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Engineers email address: ',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Your email address is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your Github username: ',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Your Github username is required');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        inputMenu();
    })
};

const inputIntern = () => {
    console.log(`
    Add Intern to team
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Interns name: ',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('The Interns name is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the Interns employee ID: ',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('The Interns employee ID is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Interns email address: ',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('The Interns email address is required');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the Interns school name: ',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('The Interns school name is required');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        inputMenu();
    })
};

const createTeam = () => {
    console.log(`
    My team is complete
    `);

    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
}

inputManager();