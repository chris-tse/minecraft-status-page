exports.handler = async function (event, context) {
    const NetcatClient = require('netcat/client')
    const nc = new NetcatClient()
    const SERVER = 'chrisminecraft.duckdns.org'
    const PORT_RANGE = '255565-25565'

    nc.addr(SERVER).scan(PORT_RANGE, ports => {
        return {
            statusCode: 200,
            body: JSON.stringify(ports),
        }
    })
}
