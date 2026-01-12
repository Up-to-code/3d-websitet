import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages, model } = await req.json();

        if (!process.env.OPENROUTER_API_KEY) {
            return NextResponse.json(
                { error: 'OpenRouter API Key not configured' },
                { status: 500 }
            );
        }

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000", // Optional but good practice
                "X-Title": "Ahmed Mansour Portfolio", // Optional
            },
            body: JSON.stringify({
                model: model || "arcee-ai/trinity-mini:free",
                messages: messages,
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json(
                { error: `OpenRouter API error: ${response.statusText}`, details: errorText },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Extract logical reasoning if available (DeepSeek/Trinity models often separate this)
        // For standard OpenAI format, it's just choices[0].message.content
        // But we pass back the full object just in case the client needs more
        return NextResponse.json(data);

    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
