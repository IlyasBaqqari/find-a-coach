import Navbar from "~/components/Navbar/Navbar";
import type {Viewport} from 'next';
import Footer from "~/components/Footer";
import {getServerAuthSession} from "~/server/auth";
import {db} from "~/server/db";
import ErrorMessage from "~/components/ErrorMessage";
import FirstTimeLoginForm from "~/components/Form/FirstTimeLoginForm";

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default async function HomePage() {
    // Check User table if Profile exists
    // Either create or load data

    const session = await getServerAuthSession();

    if (session) {
        try {
            const profile = await db.profile.findFirstOrThrow({where: {userId: session.user.id}});
        } catch (e) {
            return (
                <>
                    <Navbar/>
                    <FirstTimeLoginForm session={session} />
                    <Footer />
                </>
            )
        }

        return (
            <>
                <Navbar/>
                    <p>PROFILE</p>
                <Footer />
            </>
        );
    } else {
        return (
            <>
                <Navbar />
                <ErrorMessage message={'There was a problem accessing your profile. Please try again later.'}/>
                <Footer />
            </>
        );
    }
}
