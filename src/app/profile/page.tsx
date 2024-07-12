import Navbar from "~/components/Navbar/Navbar";
import type {Viewport} from 'next';
import Footer from "~/components/Footer";
import {getServerAuthSession} from "~/server/auth";
import {db} from "~/server/db";
import ErrorMessage from "~/components/ErrorMessage";

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width'
}

export default async function HomePage() {
    // Check User table if Profile exists
    // Either create or load data

    const session = await getServerAuthSession();

    return (
        <ErrorMessage message={"An issue was encountered, please try again"} />
    )

    // if (session) {
    //     const user = await db.user.findFirst({where: {id: session.user.id}});
    //     //const recipes = await db.recipe.findMany({'where': {'createdById': session.user.id}});
    //
    //     return (
    //         <>
    //             <Navbar/>
    //                 <p>PROFILE</p>
    //             <Footer />
    //         </>
    //     );
    // } else {
    //
    // }
}
