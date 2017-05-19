module.exports = (file, files) =>
`<html>
	<head>
		<title>${file.data.title}</title>
	</head>
	<body>
		${file.contents}
		<hr>
		File ${files.indexOf(file) + 1} of ${files.length}
	</body>
</html>`
