
import {API_URL, SC_API_URL} from '@/constants'
import {AuthHeaders, getContentType, getSCHeaders} from './api.helper'
import {removeFromStorage} from "@/services/auth/auth.helper";
import axios, {CreateAxiosDefaults} from "axios";

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

axiosAuth.interceptors.response.use(response => response, error => {
	if (error.status === 401) {
		removeFromStorage()
		location.reload()
	}
})
