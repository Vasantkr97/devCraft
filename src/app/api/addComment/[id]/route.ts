import { addComment } from "@/db/snippet";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { snippetId, content } = body;

        if (!snippetId || !content?.trim()) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const comment = await addComment(snippetId, content);
        return NextResponse.json(comment, { status: 201 });

    } catch (error) {
        console.error("Error adding comment:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
