import {axiosAuth, axiosWithdraw} from "@/api/axios";
import {IWithdrawData} from "@/services/withdraw/withdraw.types";
// /authenticated/withdraw/info
export const withdrawService = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    async post(endpoint, data) {
        try {
            const response = await axiosWithdraw.post(endpoint, new URLSearchParams(data));
            return response.data;
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (error.response) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                console.error('Error status', error.response.status);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                console.error('Error data', error.response.data);
            }
            throw error;
        }
    },

    async withdraw(data: IWithdrawData) {
        const response = await axiosAuth.post('/authenticated/withdraw/create', data)
        return response.data
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export async function handleSendLoginCode(email, game) {
    try {
        const response = await fetch('/api/sendLoginCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, game }),
        });

        return await response.json()
    } catch (error) {
        return error;
    }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export async function validateLoginCode(email, pin) {

    try {
        const response = await fetch('/api/validateLoginCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pin }),
        });

        return await response.json()
    } catch (error) {
        return error;
    }
}