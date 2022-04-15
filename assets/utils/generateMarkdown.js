
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

  See a Walkthrough video here: https://drive.google.com/file/d/1adttKJ_xYsvKiF-r48OEieZe9wdIOtsA/view
  
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
