import { selector } from 'recoil'
import { textState } from '../atoms/textState'

export const getTextState = selector({
	key: 'getTextState',
	get: ({ get }) => {
		const text = get(textState)

		return text.length
	}
})
