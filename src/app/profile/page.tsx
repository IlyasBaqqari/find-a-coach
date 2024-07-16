import Navbar from "~/components/Navbar/Navbar";
import type {GetServerSidePropsContext, Viewport} from 'next';
import Footer from "~/components/Footer";
import {getServerAuthSession} from "~/server/auth";
import {db} from "~/server/db";
import ErrorMessage from "~/components/ErrorMessage";
import FirstTimeLoginForm from "~/components/Form/FirstTimeLoginForm";
import Image from "next/image";
import {signOut} from "next-auth/react";
import UserProfile from "~/components/UserProfile";

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}


export default async function ProfilePage() {
    const session = await getServerAuthSession();

    if (session) {
        try {
            const profile = await db.profile.findUniqueOrThrow({where: {userId: session.user.id}, include: { user: true } });
            return (
                <>
                    <Navbar/>
                    <div className='m-2 sm:m-5 lg:m-10'>
                        <h1 className='mt-5 text-2xl md:text-4xl'>Your Profile</h1>
                        <UserProfile profile={profile} />
                    </div>
                </>
            );
        } catch (e) {
            return (
                <>
                    <Navbar/>
                    <FirstTimeLoginForm session={session} />
                </>
            )
        }

    } else {
        return (
            <>
                <Navbar />
                <ErrorMessage message={'There was a problem accessing your profile. Please try again later.'}/>
            </>
        );
    }
}
