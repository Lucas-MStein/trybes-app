import { NextResponse } from "next/server";

type CleverReachReceiver = {
    email: string;
    activated: boolean;
};

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== "string") {
            return NextResponse.json(
                { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
                { status: 400 }
            );
        }

        const apiKey = process.env.CLEVERREACH_API_KEY;
        const groupId = process.env.CLEVERREACH_GROUP_ID;

        if (!apiKey || !groupId) {
            return NextResponse.json(
                { error: "CleverReach ist noch nicht konfiguriert." },
                { status: 500 }
            );
        }

        const receiver: CleverReachReceiver = {
            email,
            activated: false,
        };

        const response = await fetch(
            `https://rest.cleverreach.com/v3/groups/${groupId}/receivers`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(receiver),
            }
        );

        const responseText = await response.text();

        if (!response.ok) {
            return NextResponse.json(
                {
                    error:
                        responseText || "Die Anmeldung bei CleverReach ist fehlgeschlagen.",
                },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Die Anmeldung konnte nicht verarbeitet werden." },
            { status: 500 }
        );
    }
}