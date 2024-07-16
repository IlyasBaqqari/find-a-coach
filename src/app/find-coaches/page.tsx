import Navbar from "~/components/Navbar/Navbar";
import type { Viewport} from 'next';
import FilterForm from "~/components/Form/FilterForm";
import {getServerAuthSession} from "~/server/auth";
import {db} from "~/server/db";
import Image from "next/image";
import type {Prisma} from "@prisma/client";
import CoachResult from "~/components/CoachResult";

interface FilterSearchParams {
    name: string;
    role: string | string[];
    level: string | string[];
}

interface WhereSearchQuery {
    isCoach: boolean;
    userId?: {
        not?: string;
    };
    user?: {
        name?: Prisma.StringFilter;
    }
    role?: Prisma.StringFilter;
    level?: Prisma.StringFilter;
}

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default async function FindCoaches({ searchParams }: { searchParams: FilterSearchParams }) {
    const session = await getServerAuthSession();

    const parsedParams = {
        name: searchParams.name || '',
        role: (searchParams.role ? ((Array.isArray(searchParams.role) ? searchParams.role : [searchParams.role])) : []),
        level: (searchParams.level ? ((Array.isArray(searchParams.level) ? searchParams.level : [searchParams.level])) : []),
    }

    const appliedFilters = {
        name: parsedParams.name,
        PA: parsedParams.role.includes('PA'),
        PD: parsedParams.role.includes('PD'),
        l4: parsedParams.level.includes('4.1') || parsedParams.level.includes('4.2') || parsedParams.level.includes('4.3'),
        l5: parsedParams.level.includes('5.1') || parsedParams.level.includes('5.2') || parsedParams.level.includes('5.3'),
        l6: parsedParams.level.includes('6'),
    }

    const whereQuery: WhereSearchQuery = {
        isCoach: true,
    }

    if (session) whereQuery.userId = { not: session.user.id };
    if (parsedParams.name)  whereQuery.user  = { name: { contains: parsedParams.name } };
    if (parsedParams.role.length)  whereQuery.role  = { in: parsedParams.role };
    if (parsedParams.level.length) whereQuery.level = { in: parsedParams.level };

    const coachSearchQuery = {
        where: whereQuery,
        include: {
            user: true,
        },
    };

    const coachProfiles = await db.profile.findMany(coachSearchQuery);

    return (
        <>
            <Navbar />
            <div className='flex flex-col lg:flex-row justify-start w-full'>
                <FilterForm appliedFilters={appliedFilters}/>
                <div className='w-full h-screen overflow-y-scroll'>
                    {coachProfiles.map(async (coach, index) => {
                        return (
                            <CoachResult coach={coach} key={index} />
                        );
                    })}
                </div>
            </div>
        </>
    );

}
