const webSocket = require('nodejs-websocket');

const server = webSocket.createServer(( connection ) => {
    console.log('New connection');

    connection.on('text', ( incommingText ) => {
        console.log(`Received from client: ${incommingText}`)
        connection.sendText(`${incommingText.toUpperCase()}!!`)
    })

    connection.on('close', () => {
        console.log('Connection closed')
    })
}).listen(8001)
