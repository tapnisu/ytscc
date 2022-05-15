/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { readFile, writeFile } = require('fs')
const path = require('path')

const fileDir = `${path.dirname(require.resolve('youtube-chat'))}/parser.js`

readFile(fileDir, {encoding: 'utf8'}, function (err,data) {
	var formatted = data.replace('const shortcut = run.emoji.shortcuts[0];', 'const shortcut = (run.emoji?.shortcuts?.length > 0) ? run.emoji?.shortcuts[0] : "";')
	
	writeFile(fileDir, formatted, 'utf8', function (err) {
		if (err) return console.log(err)
	})
})
