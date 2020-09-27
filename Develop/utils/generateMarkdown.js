// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

  ## Table of Contents

  [Description](###Description)

  [Instalation](###Instalation%20Instructions)

  [Usage](###Usage%20Information)

  [Contributing](###Contributing%20Guidelines)

  [Tests](###Test%20Instructions)

  [Licence](###Licence)

  [Questions](###Questions)

  ## Description
  ${data.description}

  ## Instalation Instructions
  ${data.instalation}

  ## Usage Information
  ${data.usage}

  ## Contribution Guidelines
  ${data.contributing}

  ## Test Instructions
  ${data.tests}

  ## Licence
  ${data.license}

  ## Questions
  [GitHub Profile](${data.github})
  ### ${data.email}
  ### ${data.contact}

`;
}



module.exports = generateMarkdown;

// module.exports = { writeToFile };
