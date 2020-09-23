// function to generate markdown for README
function generateMarkdown(data) {

  // Badge link
let liceBadge = `https://img.shields.io/badge/license-${data.license}-brightgreen`;
liceBadge = encodeURI(liceBadge);

return `# ${data.title}

  <img src =${liceBadge} alt = "license badge">

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  ${data.installation}
  
  ## Usage
 
  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Contact me with any questions or concerns at the email link below.
  
  [Github profile](https://github.com/${data.github}) \n
  <a href = "mailto: ${data.email}">Send Email</a>

  ## License

  Licensed under ${data.license}.

  ## Links


`;

};

module.exports = generateMarkdown;
