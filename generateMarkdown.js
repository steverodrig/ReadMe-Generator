// function to generate markdown for README
function generateMarkdown(data) {

  // Generates badge based on prompt input
let badge = `https://img.shields.io/badge/license-${data.license}-brightgreen`;
badge = encodeURI(badge);


  return `# ${data.title}

  ${badge}

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

  ${data.questions}
  
  [Github profile](https://github.com/${data.github}) \n
  Email address: ${data.email}

  ## License

  Licensed under ${data.license}.


`;

};

module.exports = generateMarkdown;
