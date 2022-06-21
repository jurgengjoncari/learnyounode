const fs = require('fs');

var file = process.argv[2];
var data = fs.readFileSync(file, 'utf8');
var lines = data.split('\n');
var newlines = lines.length - 1;
console.log(newlines);
