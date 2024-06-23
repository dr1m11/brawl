import {IUser} from "@/utils/types";

export interface IAuthResponse {
	token: string
	user: IUser
}

export interface ISignInData {
	email: string
	password: string
}

export interface ISignUpData {
	username: string
	email: string
	password: string
}
