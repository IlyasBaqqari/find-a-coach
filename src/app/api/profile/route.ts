import { db } from "~/server/db";
import type { NextRequest } from "next/server";

interface POSTRequestBody {
    userId: string,
    isCoach: boolean,
    role: string,
    level: string,
}

export async function POST(request: NextRequest) {
    const { userId, isCoach, role, level }= await request.json() as POSTRequestBody;

    try {
        const newProfile = await db.profile.create({
            data: {
                isCoach,
                role,
                level,
                user: {
                    connect: {
                        id: userId
                    },
                },
            },
        });
        return Response.json(newProfile);
    } catch (e) {
        return Response.error();
    }
}