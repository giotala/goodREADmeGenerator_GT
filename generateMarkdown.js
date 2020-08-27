// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title} \n
## Description

${data.description}

## Installations \n
 ${data.install} \n
## Usage \n
 *Who will use this app and why? \n
  ${data.forWho}\n

### license: \n
${data.license} \n
### Credits \n
 *${data.name} \n
 *Github page: ${data.github}\n 
 *My email: ${data.email} \n
 *Contributors: ${data.names} \n
### Used to create the apps  \n
 *${data.Apps} \n
 *license: ${data.license} \n
### Test \n
  *${data.test} \n
### Questions \n
  *${data.question} \n
`;
}

module.exports = generateMarkdown;
