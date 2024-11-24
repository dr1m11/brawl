import { NextRequest, NextResponse } from 'next/server';
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return NextResponse.json({ error: error }, { status: error.status });
    }
}