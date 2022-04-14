// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}
// { title: 'MIT', url: 'https://img.shields.io/badge/license-MIT-yellowgreen'},
//             { title: 'Apache', url: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'},
//             { title: 'GPL', url: 'https://img.shields.io/badge/License-GPL%20v3-red.svg' }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //renderLicenseBadge(data.license);
  return `# ${data.title}

`;
}


module.exports = generateMarkdown;
