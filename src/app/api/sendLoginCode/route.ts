import { NextRequest, NextResponse } from 'next/server';
import {axiosWithdraw} from "@/api/axios";
import {withdrawService} from "@/services/withdraw/withdraw.service";

export async function POST(request: NextRequest) {
    const { email, game } = await request.json();

    try {
        const data = {
            email,
            game,
            lang: 'ru',
            env: 'prod',
        };

        const result = await withdrawService.post('account/login', data);
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: error }, { status: error.status });
    }
}