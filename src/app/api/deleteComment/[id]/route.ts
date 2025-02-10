import { deleteComment } from "@/db/snippet";
import { getUser } from "@/db/user";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

interface Context {
    params: { id: string };
}

export async function DELETE(req: NextRequest, context: Context): Promise<NextResponse> {
    try {
        const { id: commentId } = context.params;
        const clerkUser = await currentUser();
        const user = clerkUser ? await getUser(clerkUser?.id) : null;

        if (!user) {
            return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
        }
        
        if (!commentId) {
            return NextResponse.json({ error: "Comment ID is required"}, { status: 400 })
        }

        await deleteComment(commentId);

        return NextResponse.json({ message: "Comment deleted successfully" }, { status: 200 });
    } catch (error) {
        console.log("Error deleting Comment:", error);
        return NextResponse.json({ error: "Internal server error"}, { status: 500 })
    }
}