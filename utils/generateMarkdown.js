// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const Badge = function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == 'The MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else (license == 'Monzilla Public License 2.0'); //took the {} cause it keeps giving me an error
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const licenseLink = function renderLicenseLink(license) {
  if (license == 'Apache 2.0') {
    return `More info on this license (https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == 'The MIT') {
    return `More info on this license (https://opensource.org/licenses/MIT)`;
  }
  else (license == 'Monzilla Public License 2.0'); //took the {} cause it keeps giving me an error
    return `More info on this license (https://opensource.org/licenses/MPL-2.0)`;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //data should have a license link and license section 
  //render functions will be used here
  return `# ${data.title}
  ${Badge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [GitHub] (#github)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${licenseLink(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  Any Questions? You can reach me at (${data.email}).
  ## GitHub
  [GitHub Profile](https://github.com/${data.userName}/)  
`;
}

module.exports = generateMarkdown;
