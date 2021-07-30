const path = require('path');
const fs = require('fs');
let getComponents = (filePath) => {
  const folders = fs.readdirSync(filePath)
  const list = folders.map((file) => {
    let componentName = `scc${file.charAt(0).toLocaleUpperCase()}${file.slice(1)}`
    let importPath = `import ${componentName} from './components/${file}/index.js';`
    return {
      componentName,
      importPath
    }
  })
  return list
}

module.exports = {
  getComponents
}