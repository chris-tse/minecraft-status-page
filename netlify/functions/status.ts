import mcs from 'node-mcstatus'
import { Handler } from '@netlify/functions';

const SERVER_ADDRESS = 'play.extremecraft.net'
const port = 25565
const handler: Handler = async (event, context) => {
	try {
		const result = await mcs.statusJava(SERVER_ADDRESS, port)
		const {online, version} = result

		const response = {
			status: result.online ? 'online' : 'offline',
			name: version.name_clean,
			port,
		}

		return {
			statusCode: 200,

			body: JSON.stringify(response)
		}
	} catch (e) {
		console.log('uh oh')
		console.log(e)
		return {
			statusCode: 200,
			body: JSON.stringify({message: 'Error fetching server info'})
		}
	}

}

export { handler }
