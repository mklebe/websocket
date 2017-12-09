/** @type {String} */
const message = 'Fooo'

/** @type {WebSocket} */
const connection = new WebSocket('ws://local.me:8001')

connection.addEventListener('open', () => {
    connection.send(message)
})

connection.addEventListener('error', (error) => {
    window.console.info( error )
})

connection.addEventListener('message', (e) => {
    window.console.log(e)
    document.querySelector('[data-received-from-server] span').textContent = e.data
})

document.querySelector('[data-sent-to-server] span').textContent = message
