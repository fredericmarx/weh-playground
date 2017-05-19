var htmlMinifier = require('html-minifier').minify

const isHTML = file => file.path.endsWith('.html')

const options = {
	collapseWhitespace: true
}

const minify = (file, options) => {
	return Object.assign(file, {contents: htmlMinifier(file.contents, options)})
}

module.exports = () => {
  return files => {
    return files.map(file => {
			return isHTML(file)
				? minify(file, options)
				: file
		})
  }
}
