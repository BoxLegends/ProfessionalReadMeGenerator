// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    switch(license){
        case "MIT": 
            return "https://img.shields.io/badge/license-MIT-lightgreen"
        case "GPL": 
            return "https://img.shields.io/badge/license-GPL-black"
        case "Apache 2.0": 
            return "https://img.shields.io/badge/license-Apache-blue"
        case "CDDL-1.0": 
            return "https://img.shields.io/badge/license-ppl1.3c-ofl-red"
        default:  
            return "https://img.shields.io/badge/license-Apache-gray"
      }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
    switch(license){
        case "MIT": 
            return "https://opensource.org/licenses/MIT"
        case "GPL": 
            return "https://opensource.org/licenses/gpl-license"
        case "Apache 2.0": 
            return "https://opensource.org/licenses/Apache-2.0"
        case "CDDL-1.0": 
            return "https://opensource.org/licenses/CDDL-1.0"
        default:  
            return "https://img.shields.io/badge/license-Apache-gray"
      }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;