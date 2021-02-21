exports.handler = async function (event, context) {
    const util = require('minecraft-server-util')
    const SERVER = 'chrisminecraft.duckdns.org'

    try {
        const response = await util.status(SERVER)

        return {
            statusCode: 200,
            body: JSON.stringify({ error: false, serverInfo: response }),
        }
    } catch (e) {
        return {
            statusCode: 200,
            body: JSON.stringify({ error: true, message: e.message }),
        }
    }
}
