import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: NextRequest) {
    return NextResponse.json({
        message: "Hello!"
    });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(_req: NextRequest) {
    const allEmojis = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🦝", "🐻", "🐼", "🐨", "🐯",
         "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", "🦍", "🦧", "🦮", "🐕",
          "🐩", "🐺", "🦊", "🦝", "🐈", "🐈‍⬛", "🐅", "🐆", "🦓", "🦌", "🦬", "🐂", "🐃", "🐄",
           "🐎", "🦄", "🐖", "🐗", "🐏"];
    const emojiIdxs: number[] = [];
    while (true) {
        const rnd = Math.floor(Math.random()*allEmojis.length);
        if (!emojiIdxs.includes(rnd))
            emojiIdxs.push(rnd);
        
        if (emojiIdxs.length === 3) break;
    }

    return NextResponse.json({
        emojis: allEmojis.filter((_: string, idx: number) => emojiIdxs.includes(idx))
    });
}