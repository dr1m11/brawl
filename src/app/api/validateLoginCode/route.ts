import { NextRequest, NextResponse } from 'next/server';
import {withdrawService} from "@/services/withdraw/withdraw.service";

export async function POST(request: NextRequest) {
    const { email, pin } = await request.json();

    try {
        const data = {
            email,
            pin,
        };

        const result = await withdrawService.post('account/login.validate', data);
        return NextResponse.json(result);
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return NextResponse.json({ error: error }, { status: error.status });
    }
}