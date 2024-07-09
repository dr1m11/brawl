import Cookies from 'js-cookie'
import {EnumTokens} from "@/services/auth/auth.service";


export const getAccessToken = () => {
	const token = Cookies.get(EnumTokens.TOKEN)
	return token || null
}

export const saveTokenStorage = (token: string) => {
	Cookies.set(EnumTokens.TOKEN, token, {
		domain: '.brawl-alpha.vercel.app',
		// domain: 'localhost',
		sameSite: 'strict',
		expires: 12 / 24
	})
}

export const removeFromStorage = () => {
	// Cookies.remove('token', {domain: '.brawl-alpha.vercel.app'})
	Cookies.remove(EnumTokens.TOKEN)
}
