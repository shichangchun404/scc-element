const fs = require('fs');
const path = require('path');
const endOfLine = require('os').EOL;
const render = require('json-templater/string');
const { MAIN_TEMPLATE } = require('../template')
const { getComponents } = require('../utils')

const componentsList = getComponents(path.join(__dirname, '../../src/components'))
const importPaths = []
const componentNames = []
componentsList.forEach(item => {
  importPaths.push(item.importPath)
  componentNames.push(`  ${item.componentName}`)
})
const template = render(MAIN_TEMPLATE, {
  importPaths: importPaths.join(endOfLine),
  componentNames: componentNames.join(','+endOfLine),
  version: process.env.VERSION || require(`../../package.json`).version,
});

//console.log('template ',importPaths, componentNames, template)
fs.writeFileSync(path.join(__dirname, '../../src/index.js'),template)