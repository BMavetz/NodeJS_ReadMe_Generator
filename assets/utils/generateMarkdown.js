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
    return('');
  }else if(license == 'MIT'){
    return('https://opensource.org/licenses/MIT');
  }else if(license == 'Apache'){
    return('https://opensource.org/licenses/Apache-2.0');
  }else if(license == 'GPL'){
    return('https://www.gnu.org/licenses/gpl-3.0');
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  return `# ${data.title}

`;
}


module.exports = generateMarkdown;
