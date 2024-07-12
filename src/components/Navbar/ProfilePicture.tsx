import type {Session} from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePicture({session}: {session: Session}) {

    return (
    <div className='flex w-64 items-center justify-end px-10'>
        <Link href='/profile'><Image src={`${session.user.image}`} alt={`${session.user.name}`} width='0' height='0' sizes='100vw' className='w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-white hover:cursor-pointer hover:border-blue-500 focus:border-blue-500' /></Link>
    </div>
    );

}