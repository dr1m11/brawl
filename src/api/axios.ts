import axios, { CreateAxiosDefaults } from 'axios'

import {API_URL, SC_API_URL} from '@/constants'
import {AuthHeaders, errorCatch, getContentType, getSCHeaders} from './api.helper'

const axiosOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: getContentType(),
}

const axiosAuthOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: AuthHeaders()
}

export const axiosAuth = axios.create(axiosAuthOptions)

export const axiosClassic = axios.create(axiosOptions)

const axiosWithdrawOptions: CreateAxiosDefaults = {
	baseURL: SC_API_URL,
	headers: getSCHeaders(),
}

export const axiosWithdraw = axios.create(axiosWithdrawOptions)

// export const instance = axios.create(axiosOptions)

// instance.interceptors.request.use(config => {
// 	const accessToken = getAccessToken()
//
// 	if (config?.headers && accessToken)
// 		config.headers.Authorization = `Bearer ${accessToken}`
//
// 	return config
// })

// instance.interceptors.response.use(
// 	config => config,
// 	async error => {
// 		const originalRequest = error.config
//
// 		if (
// 			(error?.response?.status === 401 ||
// 				errorCatch(error) === 'jwt expired' ||
// 				errorCatch(error) === 'jwt must be provided') &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true
// 			try {
// 				await authService.getNewTokens()
// 				return instance.request(originalRequest)
// 			} catch (error) {
// 				if (errorCatch(error) === 'jwt expired') removeFromStorage()
// 			}
// 		}
//
// 		throw error
// 	}
// )
