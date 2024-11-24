import Cookies from "js-cookie";

export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const AuthHeaders = () => ({
	'Authorization': `Bearer ${Cookies.get('token') ? Cookies.get('token') : null}`,
	'Content-Type': 'application/json',
})

export const getSCHeaders = () => ({
	"accept": "application/json, text/plain, */*",
	"accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
	"content-type": "application/x-www-form-urlencoded",
})

// export const errorCatch = (error: any): string => {
// 	const message = error?.response?.data?.message
//
// 	return message
// 		? typeof error.response.data.message === 'object'
// 			? message[0]
// 			: message
// 		: error.message
// }
