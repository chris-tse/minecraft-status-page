const util = require('minecraft-server-util');

exports.handler = async function (event, context) {
    const SERVER = 'culturalserver.duckdns.org';
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    };

    try {
        const response = await util.status(SERVER);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ error: false, serverInfo: response }),
        };
    } catch (e) {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ error: true, message: e?.message || 'No response from server' }),
        };
    }
};
