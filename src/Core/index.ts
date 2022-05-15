import { LiveChat } from 'youtube-chat'
import { Log, Input } from '../Terminal/index'

class Client {
	public async init() {
		const liveId = await Input()

		const liveChat = new LiveChat({ liveId: liveId })
		liveChat.on('chat', (chatItem) => Log(chatItem))

		const ok = await liveChat.start().catch()
		if (!ok) throw 'Error!'
	}
}

export default Client
