const weh = require('@weh/weh')
const markdown = require('./plugins/weh-markdown')
const matter = require('./plugins/weh-matter')
const minify = require('./plugins/weh-html-minifier')
const templates = require('./plugins/weh-templates')

const config = {
	source: 'src'
}

weh(async site => {
	site.config(config)

	site.use(matter)
  site.use(markdown)
	site.use(templates)
	site.use(minify)

  return site
})
