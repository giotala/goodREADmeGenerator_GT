// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title}
## Description

${data.description}

## Credit
 *${data.name} \n
 *Github page: ${data.github}
 *My email: ${data.email}
 *Contributors: ${data.names}
Used to create the apps 
  *${data.Apps}
license: ${data.license}
Who will use this app ${data.forWho}

`;
}

module.exports = generateMarkdown;
