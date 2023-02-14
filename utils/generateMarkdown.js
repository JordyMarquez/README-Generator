// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else {
    return '';
  }
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "ISC") {
    return `https://opensource.org/licenses/ISC`;
  }
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  else {
    return '';
  }
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else {
    return `## License

    ${license}

    For more information on ${license} please visit ${renderLicenseLink(license)}
    `
  }
}

// Creates a function to generate markdown for README //missing these in theq uestions
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributions](#contributions)

[Tests](#tests)

[Questions](#questions)

  ## Installation Instructions

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributions}

  ## Tests

  To run tests:

  \`\`\`js
  npm run tests
  \`\`\`

  ## Questions
  For any questions please contact ${data.name} at https://github.com/${data.username}.
  You may also email me at anytime thru email at ${data.email}
`;
}

module.exports = generateMarkdown;
