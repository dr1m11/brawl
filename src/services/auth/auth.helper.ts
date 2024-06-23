import Cookies from 'js-cookie'
import {EnumTokens} from "@/services/auth/auth.service";


export const getAccessToken = () => {
	const token = Cookies.get(EnumTokens.TOKEN)
	return token || null
}

export const saveTokenStorage = (token: string) => {
	Cookies.set(EnumTokens.TOKEN, token, {
		domain: 'https://brawl-alpha.vercel.app/',
		sameSite: 'strict',
		expires: 12,
	})
}

export const removeFromStorage = () => {
	Cookies.remove(EnumTokens.TOKEN)
}
