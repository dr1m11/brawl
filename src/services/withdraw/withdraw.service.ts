import {axiosClassic, axiosWithdraw} from "@/api/axios";
import {EmailType, IWithdrawData} from "@/services/withdraw/withdraw.types";

export const withdrawService = {
    async post(endpoint, data) {
        try {
            const response = await axiosWithdraw.post(endpoint, new URLSearchParams(data));
            return response.data;
        } catch (error) {
            if (error.response) {
                console.error('Error status', error.response.status);
                console.error('Error data', error.response.data);
            }
            throw error;
        }
    },

    async withdraw(data: IWithdrawData) {
        const response = await axiosClassic.post('/withdraw/create', data)
        return response.data
    }
}

export async function handleSendLoginCode(email, game) {
    try {
        const response = await fetch('/api/sendLoginCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, game }),
        });

        const data = await response.json();
        return data
    } catch (error) {
        return error;
    }
}

export async function validateLoginCode(email, pin) {

    try {
        const response = await fetch('/api/validateLoginCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pin }),
        });

        const data = await response.json();
        return data
    } catch (error) {
        return error;
    }
}