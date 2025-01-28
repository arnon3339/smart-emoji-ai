import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json({
        message: "Hello!"
    });
}

export async function POST(req: NextRequest) {
    const allEmojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🦝", "🐻", "🐼", "🐨", "🐯",
         "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🦍", "🦧", "🦮", "🐕",
          "🐩", "🐺", "🦊", "🦝", "🐈", "🐈‍⬛", "🐅", "🐆", "🦓", "🦌", "🦬", "🐂", "🐃", "🐄",
           "🐎", "🦄", "🐖", "🐗", "🐏"];
    let emojiIdxs: number[] = [];
    while (true) {
        const rnd = Math.floor(Math.random()*allEmojis.length);
        if (!emojiIdxs.includes(rnd))
            emojiIdxs.push(rnd);
        
        if (emojiIdxs.length === 3) break;
    }

    const rnds = Math.random()
    const text = (await req.json()).text;
    return NextResponse.json({
        emojis: allEmojis.filter((_: string, idx: number) => emojiIdxs.includes(idx))
    });
}