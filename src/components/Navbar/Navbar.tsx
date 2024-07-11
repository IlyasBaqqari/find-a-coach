import Link from "next/link";
import Image from "next/image";
import Login from "~/components/Navbar/Login";
import Logout from "~/components/Navbar/Logout";
import {getServerAuthSession} from "~/server/auth";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default async function Navbar() {
    const session = await getServerAuthSession()

    return (
        <nav className="flex py-3 md:p-0 justify-between items-center bg-gray-200">
            <Link href="/find-coaches" className="w-64 px-10 text-xl flex text-black items-center hover:underline hover:text-blue-500"><FaMagnifyingGlass className='text-md' /><p className='ms-3 hidden w-0 md:block md:w-auto'>Search coaches</p></Link>
            <Link href="/" className='flex-shrink-0 md:flex-shrink'>
                <h1 className="hidden md:block mx-auto text-lg md:text-2xl py-4 font-medium align-middle hover:underline">Find a Coach</h1>
                <Image src='/images/logo.png' alt='Find a Coach' width='0' height='0' sizes='100vw' className='w-8 h-8 block md:hidden rounded hover:border-2 hover:border-blue-500' />
            </Link>
            {(!session) ? <Login /> : <Logout session={session} />}
        </nav>
    );
}