// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { verifyToken } from "@/lib/auth";
// import { mqttClient } from "@/lib/mqtt";

// export async function POST(req) {
//     const token = cookies().get("token")?.value;
//     if (!token) {
//         return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
//     }

//     try {
//         verifyToken(token);
//     } catch {
//         return NextResponse.json({ error: "Invalid token" }, { status: 401 });
//     }

//     const { light, state } = await req.json();
//     mqttClient.publish("home/lights", `LIGHT${light}:${state}`);

//     return NextResponse.json({ success: true });
// }


import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { mqttClient } from "@/lib/mqtt";

export async function POST(req) {
    try {
        const token = cookies().get("token")?.value;
        if (!token)
            return NextResponse.json({ error: "No auth" }, { status: 401 });

        verifyToken(token);

        const { light, state } = await req.json();
        mqttClient.publish("home/lights", `LIGHT${light}:${state}`);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json(
            { error: err.message || "Server error" },
            { status: 500 }
        );
    }
}
