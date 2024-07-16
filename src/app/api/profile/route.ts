import { db } from "~/server/db";
import type { NextRequest } from "next/server";

type RequestBody = {
    userId: string,
    isCoach: boolean,
    role: string,
    level: string,
}

export async function POST(request: NextRequest) {
    const { userId, isCoach, role, level }: RequestBody = await request.json();

    try {
        const user = await db.profile.findUnique({where: {id: userId}});
        console.log(user)

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