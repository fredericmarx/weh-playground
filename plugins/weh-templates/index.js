const isHTML = file => file.path.endsWith('.html')

const applyTemplate = (template, file, files) => {
  return Object.assign(file, {contents: template(file, files)})
}

module.exports = options => {
  return files => {
    return files.map(file => {
      return isHTML(file)
        ? applyTemplate(options.layouts[file.data.layout || 'base'], file, files)
        : file
    })
  }
}
