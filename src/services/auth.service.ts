import {IUser} from "@/utils/types";
import {API_URL} from "@/constants";

interface ILoginResponse {
    accessToken: string
}

interface IRegisterResponse {
    id: string
}

export interface ILoginData {
    email: string
    password: string
}


export interface IRegisterData {
    email: string
    password: string
    username: string
}

class AuthService {
    async login(data: ILoginData): Promise<ILoginResponse> {
        const response = await fetch(`${API_URL}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса')
        }

        const responseData: ILoginResponse = await response.json()

        return responseData
    }

    async test(data: IRegisterData) {
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                // переведёт промис в состояние fulfilled с результатом "result"
                resolve(`${JSON.stringify(data)}`);
            }, 1000);

        });
        const response = await promise
        return response
    }

    async register(data: IRegisterData) {
        const response = await fetch(`${API_URL}/auth/sign-up`, {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json',
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            // },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Ошибка при получении запроса')
        }

        const responseData = await response.json()
        return responseData
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService()









