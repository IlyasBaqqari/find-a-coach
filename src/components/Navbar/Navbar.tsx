import Link from "next/link";
import Login from "~/components/Navbar/Login";
import Logout from "~/components/Navbar/Logout";
import {getServerAuthSession} from "~/server/auth";

export default async function Navbar() {
    const session = await getServerAuthSession()

    return (
        <div className="flex justify-between items-center bg-gray-200">
            <Link href="#" className="px-10 text-3xl">≡</Link>
            <Link href="#"><h1 className="text-2xl py-4 font-medium">Find a Coach</h1></Link>
            {(!session) ? <Login /> : <Logout session={session} />}
        </div>
    );
}