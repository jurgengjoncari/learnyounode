const fs = require('fs');

var fileName = process.argv[2];

handler = function (err, data) {
	if (err) console.log(err);
	else console.log(data.split('\n').length - 1);
}

fs.readFile(fileName, 'utf8', handler);
