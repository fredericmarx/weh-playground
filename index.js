const weh = require('@weh/weh')
const markdown = require('./plugins/weh-markdown')
const matter = require('./plugins/weh-matter')
const templates = require('./plugins/weh-templates')

const config = {
	source: 'src'
}

weh(async site => {
	site.config(config)

	site.use(matter)
  site.use(markdown)
	site.use(templates)

  return site
})
