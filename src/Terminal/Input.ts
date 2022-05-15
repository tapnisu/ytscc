import { prompt } from 'inquirer'

export const Input = async () => {
	const answers = await prompt({
		name: 'id',
		type: 'input',
		message: 'Input stream id',
		default() {
			return undefined
		}
	})

	return answers.id
}
