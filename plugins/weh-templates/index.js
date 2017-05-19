var baseTemplate = require('../../templates/base')

const isHTML = file => file.path.endsWith('.html')

const applyTemplate = (template, file, files) => {
	return Object.assign(file, {contents: template(file, files)})
}

module.exports = () => {
  return files => {
    return files.map(file => {
			return isHTML(file)
				? applyTemplate(baseTemplate, file, files)
				: file
		})
  }
}
