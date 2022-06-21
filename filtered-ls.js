const readdir = require('fs/promises').readdir
const extname = require('path').extname

const dir = process.argv[2]
const extension = `.${process.argv[3]}`

readdir(dir)
.then(files => files.filter(file => extname(file) == extension))
.then(filtered => filtered.forEach(file => {console.log(file)}))
.catch(err => console.log(err))
