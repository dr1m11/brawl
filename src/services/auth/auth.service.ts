import {removeFromStorage, saveTokenStorage} from './auth.helper'
import {IAuthResponse, ISignInData, ISignUpData} from "@/services/auth/auth.types";
import {axiosClassic} from "@/api/axios";

export enum EnumTokens {
	'TOKEN' = 'token',
	'REFRESH_TOKEN' = 'refreshToken',
}

export const authService = {
	async signIn(data: ISignInData) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/user/sign-in',
			data
		)

		if (response.data.token) saveTokenStorage(response.data.token)

		return response
	},

	async signUp(data: ISignUpData) {
		return await axiosClassic.post(
			'/user/sign-up',
			data
		)
	},
}
