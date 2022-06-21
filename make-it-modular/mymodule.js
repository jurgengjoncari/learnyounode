const fs = require('fs')
const extname = require('path').extname

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function (err, data){
		if (err) {
			return callback(err)
		}
		data = data.filter(file => extname(file) == `.${ext}`)
		callback(null, data)
	})
}
