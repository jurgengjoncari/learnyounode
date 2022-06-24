const http = require('http')

const URL = process.argv[2]

let wordsList = []

http.get(URL, function (response) {
    response.setEncoding('utf-8')
    response.on('data', function (data) {
        wordsList.push(data)
    })
    response.on('end', function () {
        const sentence = wordsList.join('')
        
        console.log(sentence.length);
        console.log(sentence);
    })
})

