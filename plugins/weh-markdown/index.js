var md = require('markdown-it')()

const isMarkdown = file => file.path.endsWith('.md')

const markdown = file => {
  const path = file.path.substr(0, file.path.lastIndexOf('.')) + '.html'
  const contents = md.render(file.contents)

  return Object.assign(file, { path, contents })
}

module.exports = () => {
  return files => {
    return files.map(file => {
      return isMarkdown(file)
        ? markdown(file)
        : file
    })
  }
}
