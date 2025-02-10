import { saveExecution } from "@/db/saveExecution";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   
    try {
        const { language, code, output, error } = await req.json();
        
        const result = await saveExecution({
            language,
            code,
            output: output || "",
            error: error || "",
        });

        // Ensure result is valid before returning
        if (!result) {
            return NextResponse.json({ error: "Failed to save execution" }, { status: 500 });
        }

        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.log("Error saving Execution:", error);
        return NextResponse.json({ error: "Failed to save execution"}, { status: 500})
    }
    
}