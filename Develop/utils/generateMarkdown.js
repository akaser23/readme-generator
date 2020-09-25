// function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}

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
  ${data.licence}

  ## Questions
  [GitHub Profile](${data.github})
  ${data.email}
  ${data.contact}

`;
}

module.exports = generateMarkdown;

// module.exports = { writeToFile };
