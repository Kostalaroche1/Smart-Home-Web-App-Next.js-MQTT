import { NextResponse } from "next/server";
import { signToken } from "@/lib/auth";

export async function POST(req) {
    const { username, password } = await req.json();

    if (username === "admin" && password === "1234") {
        const token = signToken({ role: "admin" });

        const res = NextResponse.json({ success: true });
        res.cookies.set("token", token, { httpOnly: true });
        return res;
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
