var grayMatter = require('gray-matter')

const matter = file => {
  const frontMatter = grayMatter(file.contents)

  return Object.assign(file, {contents: frontMatter.content}, frontMatter)
}

module.exports = () => {
  return files => {
    return files.map(file => matter(file))
  }
}
