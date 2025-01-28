import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const params = await req.json();
    console.log(params);
    return NextResponse.json({
        message: "Hello!"
    });
}