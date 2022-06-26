const net = require('net')

const port = process.argv[2]

const server = net.createServer(function (socket) {
    const date = new Date

    const YYYY = ('0000' + date.getFullYear()).slice(-4)
    const MM = ('00' + (date.getMonth() + 1)).slice(-2)
    const DD = ('00' + date.getDate()).slice(-2)
    const hh = ('00' + date.getHours()).slice(-2)
    const mm = ('00' + date.getMinutes()).slice(-2)

    const time = `${YYYY}-${MM}-${DD} ${hh}:${mm}\n`

    socket.write(time)
    socket.end()
})

server.listen(port)