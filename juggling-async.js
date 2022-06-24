const HTTP = require('http')

const URL1 = process.argv[2]
const URL2 = process.argv[3]
const URL3 = process.argv[4]

HTTP.get(URL1, function (request) {
    const wordsList = []

    request.setEncoding('utf-8')
    request.on('data', function (data) {
        wordsList.push(data)
        // console.log(data);
    })
    request.on('end', function () {
        const sentence = wordsList.join('')
        console.log(sentence);

        HTTP.get(URL2, function (request) {
            const wordsList = []
        
            request.setEncoding('utf-8')
            request.on('data', function (data) {
                wordsList.push(data)
                // console.log(data);
            })
            request.on('end', function () {
                const sentence = wordsList.join('')
                console.log(sentence);
                
                HTTP.get(URL3, function (request) {
                    const wordsList = []
                
                    request.setEncoding('utf-8')
                    request.on('data', function (data) {
                        wordsList.push(data)
                        // console.log(data);
                    })
                    request.on('end', function () {
                        const sentence = wordsList.join('')
                        console.log(sentence);
                    })
                })
            })
        })
    })
})