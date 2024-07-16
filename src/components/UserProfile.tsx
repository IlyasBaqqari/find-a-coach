'use client'

import Image from "next/image";
import {signOut} from "next-auth/react";

interface User {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Date | null;
    image: string | null;
}

interface Profile {
    user: User;
    id: string;
    userId: string;
    isCoach: boolean;
    role: string;
    level: string;
}

interface UserProfileProps {
    profile: Profile;
}

export default function UserProfile({ profile }: UserProfileProps) {
    return (
        <>
            <div className='my-5 p-5 bg-stone-200 rounded-lg md:rounded-xl'>
                <div className='flex items-center'>
                    <Image src={`${profile.user.image}`} alt={`${profile.user.name}`} width='0' height='0' sizes='100vw' className='w-32 h-32 md:w-48 md:h-48 md:me-8 flex-shrink-0 rounded-md md:rounded-lg'/>
                    <div className='mx-4'>
                        <div className='mb-2'>
                            <h2 className='font-medium text-2xl'>{profile.user.name}</h2>
                            <p className='text-stone-500'>{profile.user.email}</p>
                        </div>
                        <p>{profile.isCoach ? 'Coach' : 'Non-coach'}</p>
                        <div className='mt-2'>
                            <p>{`${profile.role} - Level ${profile.level}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => signOut({callbackUrl: '/'})} className='w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Sign out
            </button>
        </>
    );
}