// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license == 'none'){
  return('');
}else if(license == 'MIT'){
  return('https://img.shields.io/badge/license-MIT-yellowgreen');
}else if(license == 'Apache'){
  return('https://img.shields.io/badge/license-MIT-yellowgreen');
}else if(license == 'GPL'){
  return('https://img.shields.io/badge/License-GPL%20v3-red.svg');
}

}


// { title: 'MIT', url: 'https://img.shields.io/badge/license-MIT-yellowgreen'},
//             { title: 'Apache', url: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'},
//             { title: 'GPL', url: 'https://img.shields.io/badge/License-GPL%20v3-red.svg' }
//TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license == 'none'){
  return('');
}else if(license == 'MIT'){
  return('https://opensource.org/licenses/MIT');
}else if(license == 'Apache'){
  return('https://opensource.org/licenses/Apache-2.0');
}else if(license == 'GPL'){
  return('https://www.gnu.org/licenses/gpl-3.0');
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'none'){
    return('This application has no associated license');
  }else if(license == 'MIT'){
    return('This application is covered under the MIT license');
  }else if(license == 'Apache'){
    return('This application is covered under the Apache 2.0 license');
  }else if(license == 'GPL'){
    return('This application is covered under the GPL 3.0 License');
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  console.log(badge, link, licenseSection);
  return `# ${data.title}
  [![License](${badge})](${link})
  
  ## Description

  ${data.description}
    
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](questions)  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License

  ${licenseSection}
  
  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  To view further applications made by this user, please visit the following github page: [${data.github}](https://github.com/${data.github})
  
  If there are any questions for the user regarding this application, plese feel free to contact them through the following email address: ${data.email}
 


`;
}


module.exports = generateMarkdown;
