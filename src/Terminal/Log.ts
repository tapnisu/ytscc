import { ChatItem } from 'youtube-chat/dist/types/data'

export const Log = async (chatItem: ChatItem) => {
	return console.log(
		`${chatItem.author.name}: ${(chatItem.message[0] as any).text}`
	)
}
